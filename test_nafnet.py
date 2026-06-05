import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
url = "https://github.com/superdianuj/NAFNet"
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
readme = soup.find('article', class_='markdown-body')
if readme:
    imgs = readme.find_all('img')
    print(f"Found {len(imgs)} images:")
    for img in imgs:
        print(img.get('src'))
else:
    print("No readme found")
