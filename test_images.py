import json
import requests

with open('projectsData.js', 'r') as f:
    content = f.read()
    content = content.replace('const PROJECTS_DATA = ', '').strip()
    if content.endswith(';'):
        content = content[:-1]
    data = json.loads(content)

bad_images = 0
total_images = 0
for proj in data:
    if proj['category'] in ['cv', 'nlp']:
        url = proj['image']
        try:
            r = requests.head(url, timeout=5)
            if r.status_code != 200:
                print(f"Bad image ({r.status_code}): {url}")
                bad_images += 1
            total_images += 1
        except Exception as e:
            print(f"Error fetching {url}: {e}")

print(f"Total: {total_images}, Bad: {bad_images}")
