import json

# Read current publications
with open('publications_converted.json', 'r', encoding='utf-8') as f:
    current_pubs = json.load(f)

# Get all author names from current publications
current_authors = set()
for pub in current_pubs:
    authors = (pub['authors'] or '').lower()
    if 'jayatilake' in authors:
        current_authors.add(pub['doi'].lower() if pub['doi'] else '')

print("Current Jayatilake publications in database:")
jayatilake_pubs = [p for p in current_pubs if 'jayatilake' in (p['authors'] or '').lower()]
print(f"Found {len(jayatilake_pubs)} publications with Jayatilake")
print("\nYears represented:")
from collections import Counter
years = Counter(p['year'] for p in jayatilake_pubs)
for year in sorted(years.keys(), reverse=True):
    print(f"  {year}: {years[year]}")

print("\nChecking for publications that might be missing...")
print("\nKnown Jayatilake publications from PubMed search (not in our list):")

# These are publications found in PubMed search that might not be in our list
potential_new_pubs = [
    {
        "title": "Diagnostic utility of N-terminal TMPP labels for unambiguous identification of clipped sites in therapeutic proteins",
        "authors": "Gunawardena HP, Jayatilake MM, Brelsford JD, Nanda H.",
        "journal": "Sci Rep",
        "year": 2023,
        "pmid": "37903854",
        "doi": "10.1038/s41598-023-45446-z"
    },
    {
        "title": "The Microbiome and Metabolomic Profile of the Transplanted Intestine with Long-Term Function",
        "authors": "Girlanda R, Liggett JR, Jayatilake M, Kroemer A, Guerra JF, Hawksworth JS, Radkani P, Matsumoto CS, Zasloff M, Fishbein TM.",
        "journal": "Biomedicines",
        "year": 2022,
        "pmid": "36140180",
        "doi": "10.3390/biomedicines10092079"
    },
    {
        "title": "Texture feature analysis of MRI-ADC images to differentiate glioma grades using machine learning techniques",
        "authors": "Vijithananda SM, Jayatilake ML, Gonçalves TC, Rato LM, Weerakoon BS, Kalupahana TD, Silva AD, Dissanayake K, Hewavithana PB.",
        "journal": "Sci Rep",
        "year": 2023,
        "pmid": "37737249",
        "doi": "10.1038/s41598-023-41353-5"
    },
]

# Check which ones are already in our database
for new_pub in potential_new_pubs:
    existing = any(p['doi'] == new_pub['doi'] or p['title'] == new_pub['title'] for p in current_pubs if p['doi'] or p['title'])
    status = "✓ Already in DB" if existing else "✗ NEW - NOT IN DB"
    print(f"\n{status}")
    print(f"  Title: {new_pub['title'][:60]}...")
    print(f"  Year: {new_pub['year']}")
    print(f"  DOI: {new_pub['doi']}")
