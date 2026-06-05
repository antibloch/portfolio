import requests
from bs4 import BeautifulSoup
url = "https://github.com/antibloch/donor_readiness"
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
readme = soup.find('article', class_='markdown-body')
if readme:
    imgs = readme.find_all('img')
    print(f"Found {len(imgs)} images")
else:
    print("No readme found")
