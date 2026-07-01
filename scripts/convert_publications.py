import json
from collections import Counter

# Read the complete publications file
with open('publications_all_sheets.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

publications = data['publications']

# Function to generate tags based on title and content
def generate_tags(pub):
    title = (pub['Title'] or '').lower()
    journal = (pub['Journal/Book'] or '').lower()
    tags = []
    
    # Keyword mapping for tags
    keywords = {
        'Radiation': ['radiation', 'radiat', 'dose', 'irradiat', 'x-ray'],
        'Metabolomics': ['metabolomic', 'metabolite', 'mass spectrometry', 'lcms', 'lc-ms'],
        'Proteomics': ['proteomic', 'protein'],
        'Cancer': ['cancer', 'tumor', 'pancreatic', 'melanoma', 'glioblastoma'],
        'Biomarkers': ['biomarker', 'signature'],
        'Biodosimetry': ['biodosimetr', 'dosimetr'],
        'Immunology': ['immune', 'immunotherapy', 'macrophage', 'cd8'],
        'Cardiovascular': ['cardiac', 'heart', 'cardiovascular'],
        'Neurodegenerative': ['alzheimer', 'neuroinflammation', 'neurodegeneration', 'brain'],
        'Space': ['spaceflight', 'space'],
    }
    
    for tag, keywords_list in keywords.items():
        if any(kw in title or kw in journal for kw in keywords_list):
            tags.append(tag)
    
    # Ensure at least one tag
    if not tags:
        if 'radiat' in journal.lower():
            tags.append('Radiation')
        else:
            tags.append('Research')
    
    return list(set(tags[:3]))  # Return up to 3 unique tags

# Convert to the format expected by Publications.tsx
converted = []
for idx, pub in enumerate(publications, 1):
    converted_pub = {
        'id': idx,
        'year': int(pub['Publication Year']) if pub['Publication Year'] else 2020,
        'title': pub['Title'],
        'authors': pub['Authors'],
        'journal': pub['Journal/Book'],
        'doi': pub['DOI'] if pub['DOI'] else '',
        'tags': generate_tags(pub)
    }
    converted.append(converted_pub)

# Output statistics
print(f"Total publications converted: {len(converted)}")
print(f"Year range: {min(p['year'] for p in converted)} - {max(p['year'] for p in converted)}")
print(f"Publications by year:")
year_counts = Counter(p['year'] for p in converted)
for year in sorted(year_counts.keys(), reverse=True):
    print(f"  {year}: {year_counts[year]}")

# Save to a TypeScript-friendly format
with open('publications_converted.json', 'w') as f:
    json.dump(converted, f, indent=2)

print(f"\nConverted publications saved to publications_converted.json")
print(f"Ready to update Publications.tsx with all {len(converted)} publications")
