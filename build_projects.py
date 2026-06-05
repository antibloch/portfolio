import os
import re
import json
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from concurrent.futures import ThreadPoolExecutor, as_completed

MD_FILE = "github_repos.md"
JS_OUTPUT = "projectsData.js"
ASSETS_DIR = "assets/images/projects"

def parse_markdown():
    categories = {}
    current_category = None
    
    with open(MD_FILE, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            # New Category
            if line.startswith('## ') and not line.startswith('## Summary'):
                current_category = line[3:].strip()
                categories[current_category] = []
            
            # Repo match
            if current_category and line.startswith('| [') and not line.startswith('| Repository'):
                # Extract repo name and url
                match = re.match(r'\|\s*\[([^\]]+)\]\(([^)]+)\)', line)
                if match:
                    repo_name = match.group(1)
                    repo_url = match.group(2)
                    
                    # Also extract purpose from the 2nd column
                    parts = line.split('|')
                    purpose = parts[2].strip() if len(parts) >= 3 else ""
                    tech_stack = parts[3].strip() if len(parts) >= 4 else ""
                    features = parts[4].strip() if len(parts) >= 5 else ""
                        
                    categories[current_category].append({
                        "name": repo_name,
                        "url": repo_url,
                        "purpose": purpose,
                        "tech_stack": [t.strip() for t in tech_stack.split(',') if t.strip()],
                        "features": features
                    })
    return categories

def download_file_with_backoff(url, dest_path, max_attempts=5):
    if os.path.exists(dest_path):
        return True # Already downloaded
    for attempt in range(max_attempts):
        try:
            r = requests.get(url, stream=True, timeout=15)
            if r.status_code == 200:
                with open(dest_path, 'wb') as f:
                    for chunk in r.iter_content(1024 * 1024):
                        f.write(chunk)
                return True
            elif r.status_code == 429:
                time.sleep((2 ** attempt) + 2)
            else:
                r.raise_for_status()
        except Exception as e:
            time.sleep((2 ** attempt) + 2)
    return False

def get_html_with_backoff(url, max_attempts=5):
    for attempt in range(max_attempts):
        try:
            r = requests.get(url, timeout=15)
            if r.status_code == 200:
                return r.text
            elif r.status_code == 429:
                time.sleep((2 ** attempt) + 2)
            else:
                r.raise_for_status()
        except Exception as e:
            time.sleep((2 ** attempt) + 2)
    return None

def get_extension(url, canonical_src=""):
    target = canonical_src if canonical_src else url
    path = urlparse(target).path
    ext = os.path.splitext(path)[1]
    return ext if ext else '.jpg'

def process_repo(repo, slug, cat):
    repo_name = repo['name']
    url = repo['url']
    print(f"Crawling: {url}")
    
    repo_dir = os.path.join(ASSETS_DIR, repo_name)
    os.makedirs(repo_dir, exist_ok=True)
    
    html = get_html_with_backoff(url)
    if not html:
        return None
        
    soup = BeautifulSoup(html, 'html.parser')
    
    # OpenGraph Image
    og_image = soup.find('meta', property='og:image')
    image_url = "assets/images/placeholder.jpg"
    if og_image and og_image['content']:
        og_url = og_image['content']
        dest_path = os.path.join(repo_dir, "og_image.jpg")
        if download_file_with_backoff(og_url, dest_path):
            image_url = dest_path
    
    # Description
    description_meta = soup.find('meta', property='og:description')
    description = description_meta['content'] if description_meta else ""
    
    if description and "Contribute to" in description:
        description = description.split("Contribute to")[0].strip()
        
    # Extra images, Videos, and Overview from README
    extra_images = []
    extra_videos = []
    overview_text = ""
    readme = soup.find('article', class_='markdown-body')
    if readme:
        imgs = readme.find_all('img')
        img_idx = 1
        for img in imgs:
            src = img.get('src')
            canonical_src = img.get('data-canonical-src', '')
            # Ignore common badges
            skip_keywords = ['badge', 'shield', 'travis', 'circleci', 'github/workflow', 'license', 'visitor-badge']
            if src and not any(k in src.lower() or k in canonical_src.lower() for k in skip_keywords):
                absolute_src = urljoin(url, src)
                dest_path = os.path.join(repo_dir, f"extra_img_{img_idx}{get_extension(absolute_src, canonical_src)}")
                if download_file_with_backoff(absolute_src, dest_path):
                    extra_images.append(dest_path)
                    img_idx += 1
        
        videos = readme.find_all('video')
        vid_idx = 1
        for vid in videos:
            src = vid.get('src')
            if not src:
                source_tag = vid.find('source')
                if source_tag:
                    src = source_tag.get('src')
            if src:
                absolute_src = urljoin(url, src)
                dest_path = os.path.join(repo_dir, f"extra_vid_{vid_idx}{get_extension(absolute_src)}")
                if download_file_with_backoff(absolute_src, dest_path):
                    extra_videos.append(dest_path)
                    vid_idx += 1
                
        # Extract overview text robustly
        paragraphs = readme.find_all('p')
        text_blocks = []
        for p in paragraphs:
            text = p.get_text(separator=' ', strip=True)
            # Only keep substantial paragraphs
            if len(text) > 100 and 'build status' not in text.lower():
                text_blocks.append(text)
            if len(text_blocks) >= 2:
                break
        
        overview_text = " \n\n".join(text_blocks)
        
    if not description:
        description = repo['purpose']
        
    if extra_images:
        image_url = extra_images.pop(0)
        
    return {
        "title": repo_name,
        "category": slug,
        "categoryName": cat,
        "image": image_url,
        "extra_images": extra_images,
        "extra_videos": extra_videos,
        "description": description,
        "overview": overview_text,
        "tech_stack": repo['tech_stack'],
        "features": repo['features'],
        "url": repo['url']
    }

def main():
    os.makedirs(ASSETS_DIR, exist_ok=True)
    categories = parse_markdown()
    
    projects_data = []
    
    category_slugs = {
        "ML Privacy & Security": "privacy",
        "Radar & ECG Signal Processing": "radar",
        "Computer Vision": "cv",
        "LLMs and AI Agents": "nlp",
        "Chemical & Brain Analysis": "brain",
        "Accelerometer, COVID-19 & Misc ML": "misc",
        "App & Web Development": "apps"
    }
    
    tasks = []
    with ThreadPoolExecutor(max_workers=5) as executor:
        for cat, repos in categories.items():
            slug = category_slugs.get(cat, "misc")
            for repo in repos:
                tasks.append(executor.submit(process_repo, repo, slug, cat))
        
        for future in tasks:
            result = future.result()
            if result:
                projects_data.append(result)
                
    # Maintain original order from github_repos.md
    # Write to JS
    js_content = f"const PROJECTS_DATA = {json.dumps(projects_data, indent=2)};\n"
    with open(JS_OUTPUT, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print("projectsData.js generated successfully!")

if __name__ == "__main__":
    main()
