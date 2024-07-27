import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from html2markdown import convert
import time
import logging
from concurrent.futures import ThreadPoolExecutor

BASE_URL = "https://ucek.in"
OUTPUT_DIR = "contents"

# File extensions to ignore
IGNORED_EXTENSIONS = [
    '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',  # Documents
    '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg',  # Images
    '.mp3', '.wav', '.ogg',  # Audio
    '.mp4', '.avi', '.mov', '.wmv',  # Video
    '.zip', '.rar', '.7z',  # Archives
]

# Document extensions to exclude from parsing
DOCUMENT_EXTENSIONS = [
    '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
]

# Set up logging to file only
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("scraper.log"),
    ]
)

def get_soup(url):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()  # Raise an exception for bad status codes
        return BeautifulSoup(response.content, 'html.parser')
    except requests.RequestException as e:
        logging.error(f"Error fetching {url}: {e}")
        return None

def get_all_links(soup, parent_folder=None):
    if soup is None:
        return []

    links = []

    # First, get all navbar links
    navbar = soup.find('ul', class_='nav navbar-nav')
    if navbar:
        for li in navbar.find_all('li', recursive=False):
            a = li.find('a', href=True)
            if a:
                href = a['href']
                if href != '#':
                    full_url = urljoin(BASE_URL, href)
                    if full_url.startswith(BASE_URL):
                        sub_folder = a.text if a else 'Sub Menu'
                        links.append((full_url, sub_folder))

            # Check for sub-menu
            sub_menu = li.find('ul', class_='sub-menu')
            if sub_menu:
                sub_folder = a.text if a else 'Sub Menu'
                links.extend(get_all_links(sub_menu, sub_folder))

    # Then, get all other links on the page
    for a in soup.find_all('a', href=True):
        href = a['href']
        if href != '#':
            full_url = urljoin(BASE_URL, href)
            if full_url.startswith(BASE_URL) and full_url not in [link[0] for link in links]:
                links.append((full_url, parent_folder))

    logging.info(f"Found {len(links)} links")
    return links

def is_article_link(url):
    path = urlparse(url).path
    _, ext = os.path.splitext(path)
    return ext.lower() not in IGNORED_EXTENSIONS

def is_document_link(url):
    path = urlparse(url).path
    _, ext = os.path.splitext(path)
    return ext.lower() in DOCUMENT_EXTENSIONS

def create_markdown_file(url, title, content, parent_folder=None):
    try:
        path_parts = urlparse(url).path.strip('/').split('/')
        if parent_folder:
            path_parts.insert(-1, parent_folder)
        folder_path = os.path.join(OUTPUT_DIR, *path_parts[:-1])
        os.makedirs(folder_path, exist_ok=True)

        file_name = path_parts[-1] or 'index'
        if not file_name.endswith('.md'):
            file_name += '.md'
        file_path = os.path.join(folder_path, file_name)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(convert(content))

        logging.info(f"Created: {file_path}")
    except Exception as e:
        logging.error(f"Error creating markdown file for {url}: {e}")

def scrape_article(url, parent_folder=None):
    soup = get_soup(url)
    if soup is None:
        return

    title = soup.find('h1').text.strip() if soup.find('h1') else "Untitled"

    content_div = soup.find('div', class_='contentDiv')
    if not content_div:
        logging.warning(f"No contentDiv found for {url}")
        return

    # Remove unwanted elements
    for element in content_div(['script', 'style', 'nav', 'header', 'footer']):
        element.decompose()

    # Convert HTML to Markdown
    try:
        content = str(content_div)
        create_markdown_file(url, title, content, parent_folder)
    except Exception as e:
        logging.error(f"Error converting content to markdown for {url}: {e}")

def process_url(url, parent_folder, visited):
    if url in visited:
        return

    print(f"Visiting: {url}")
    visited.add(url)

    try:
        soup = get_soup(url)
        if soup is None:
            return

        links = get_all_links(soup, parent_folder)

        with ThreadPoolExecutor() as executor:
            executor.map(lambda link: process_url(*link, visited), links)

        if is_article_link(url) and not is_document_link(url):
            scrape_article(url, parent_folder)

    except Exception as e:
        logging.error(f"Unexpected error processing {url}: {e}")

def main():
    visited = set()
    process_url(BASE_URL, None, visited)

if __name__ == "__main__":
    main()
    logging.info("Scraping completed.")
