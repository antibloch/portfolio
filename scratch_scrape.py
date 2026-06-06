import requests
from bs4 import BeautifulSoup
import json
import sys

def scrape_scholar(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print(f"Failed to fetch {url}. Status: {response.status_code}")
        sys.exit(1)
        
    soup = BeautifulSoup(response.text, 'html.parser')
    pubs = []
    
    # Scholar tables
    for tr in soup.find_all('tr', class_='gsc_a_tr'):
        title_tag = tr.find('a', class_='gsc_a_at')
        if not title_tag:
            continue
        title = title_tag.text.strip()
        link = "https://scholar.google.com" + title_tag['href']
        
        authors_tag = tr.find('div', class_='gs_gray')
        authors = authors_tag.text.strip() if authors_tag else ""
        
        venue_tag = tr.find_all('div', class_='gs_gray')
        venue = venue_tag[1].text.strip() if len(venue_tag) > 1 else ""
        
        cites_tag = tr.find('a', class_='gsc_a_ac')
        cites = cites_tag.text.strip() if cites_tag else ""
        
        year_tag = tr.find('span', class_='gsc_a_h')
        year = year_tag.text.strip() if year_tag else ""
        
        pubs.append({
            'title': title,
            'authors': authors,
            'venue': venue,
            'citations': cites,
            'year': year,
            'link': link
        })
        
    print(json.dumps(pubs, indent=2))

if __name__ == "__main__":
    scrape_scholar("https://scholar.google.com/citations?user=03BvsCEAAAAJ&hl=en")
