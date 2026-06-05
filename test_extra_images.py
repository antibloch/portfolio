import json

with open('projectsData.js', 'r') as f:
    content = f.read().replace('const PROJECTS_DATA = ', '').strip()
    if content.endswith(';'): content = content[:-1]
    data = json.loads(content)

for cat in ['cv', 'nlp']:
    projects = [p for p in data if p['category'] == cat]
    with_images = [p for p in projects if len(p.get('extra_images', [])) > 0]
    print(f"{cat}: {len(with_images)}/{len(projects)} have extra_images")

