import json

# Read the converted publications JSON
with open('publications_converted.json', 'r', encoding='utf-8') as f:
    publications = json.load(f)

print(f"Original count: {len(publications)}")

# Remove duplicates, keeping the first occurrence
seen_dois = set()
seen_titles = set()
unique_publications = []

for pub in publications:
    doi = (pub['doi'] or '').strip()
    title = (pub['title'] or '').strip()
    
    # Skip if we've seen this DOI or title before
    if doi and doi in seen_dois:
        print(f"  Removing duplicate ID {pub['id']}: {title[:50]}...")
        continue
    if title and title in seen_titles:
        print(f"  Removing duplicate ID {pub['id']}: {title[:50]}...")
        continue
    
    # Track this publication
    if doi:
        seen_dois.add(doi)
    if title:
        seen_titles.add(title)
    
    unique_publications.append(pub)

print(f"After deduplication: {len(unique_publications)}")
print(f"Duplicates removed: {len(publications) - len(unique_publications)}")

# Re-assign IDs sequentially
for i, pub in enumerate(unique_publications, 1):
    pub['id'] = i

# Save the deduplicated list
with open('publications_converted.json', 'w', encoding='utf-8') as f:
    json.dump(unique_publications, f, indent=2)

print("\nSaved deduplicated publications to publications_converted.json")
print(f"Final publication count: {len(unique_publications)}")

# Show year distribution
from collections import Counter
years = Counter(p['year'] for p in unique_publications)
print(f"\nPublications by year (after deduplication):")
for year in sorted(years.keys(), reverse=True)[:10]:
    print(f"  {year}: {years[year]}")
