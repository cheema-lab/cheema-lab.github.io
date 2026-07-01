import json

# Read the converted publications JSON
with open('publications_converted.json', 'r', encoding='utf-8') as f:
    publications = json.load(f)

# Check for duplicates
titles_seen = {}
dois_seen = {}
duplicates = []

for pub in publications:
    title = (pub['title'] or '').strip()
    doi = (pub['doi'] or '').strip()
    
    # Check title duplicates
    if title and title in titles_seen:
        duplicates.append({
            'type': 'title',
            'value': title,
            'ids': [titles_seen[title]['id'], pub['id']],
            'years': [titles_seen[title]['year'], pub['year']]
        })
    elif title:
        titles_seen[title] = pub
    
    # Check DOI duplicates (only if DOI exists)
    if doi and doi in dois_seen:
        duplicates.append({
            'type': 'doi',
            'value': doi,
            'ids': [dois_seen[doi]['id'], pub['id']],
            'years': [dois_seen[doi]['year'], pub['year']]
        })
    elif doi:
        dois_seen[doi] = pub

print(f"Total publications: {len(publications)}")
print(f"Unique titles: {len(titles_seen)}")
print(f"Unique DOIs: {len([d for d in dois_seen if d])}")
print(f"\nDuplicate check:")

if duplicates:
    print(f"Found {len(duplicates)} duplicates:\n")
    for dup in duplicates:
        print(f"  Type: {dup['type']}")
        print(f"  IDs: {dup['ids']}")
        print(f"  Years: {dup['years']}")
        if dup['type'] == 'title':
            print(f"  Title: {dup['value'][:80]}...")
        else:
            print(f"  DOI: {dup['value']}")
        print()
else:
    print("✓ No duplicates found!")

# Check for empty entries
empty_entries = [p for p in publications if not (p['title'] or p['doi'])]
print(f"\nEmpty entries: {len(empty_entries)}")
if empty_entries:
    print("Empty publications:")
    for p in empty_entries:
        print(f"  ID {p['id']}: year {p['year']}")
else:
    print("✓ No empty entries")

# Count publications by year for reference
from collections import Counter
years = Counter(p['year'] for p in publications)
print(f"\nPublications by year:")
for year in sorted(years.keys(), reverse=True):
    print(f"  {year}: {years[year]}")
