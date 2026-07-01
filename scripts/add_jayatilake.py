import json

# Read current publications
with open('publications_converted.json', 'r', encoding='utf-8') as f:
    pubs = json.load(f)

print(f"Current count: {len(pubs)}")

# New Jayatilake publications to add
new_pubs = [
    {
        "title": "Diagnostic utility of N-terminal TMPP labels for unambiguous identification of clipped sites in therapeutic proteins",
        "authors": "Gunawardena HP, Jayatilake MM, Brelsford JD, Nanda H.",
        "journal": "Sci Rep",
        "year": 2023,
        "doi": "10.1038/s41598-023-45446-z",
        "tags": ["Proteomics", "Biomarkers"]
    },
    {
        "title": "The Microbiome and Metabolomic Profile of the Transplanted Intestine with Long-Term Function",
        "authors": "Girlanda R, Liggett JR, Jayatilake M, Kroemer A, Guerra JF, Hawksworth JS, Radkani P, Matsumoto CS, Zasloff M, Fishbein TM.",
        "journal": "Biomedicines",
        "year": 2022,
        "doi": "10.3390/biomedicines10092079",
        "tags": ["Metabolomics", "Microbiome"]
    },
    {
        "title": "Texture feature analysis of MRI-ADC images to differentiate glioma grades using machine learning techniques",
        "authors": "Vijithananda SM, Jayatilake ML, Gonçalves TC, Rato LM, Weerakoon BS, Kalupahana TD, Silva AD, Dissanayake K, Hewavithana PB.",
        "journal": "Sci Rep",
        "year": 2023,
        "doi": "10.1038/s41598-023-41353-5",
        "tags": ["Machine Learning", "Cancer"]
    },
]

# Get the highest ID
max_id = max(p['id'] for p in pubs)

# Add new publications
for new_pub in new_pubs:
    max_id += 1
    pub_entry = {
        'id': max_id,
        'year': new_pub['year'],
        'title': new_pub['title'],
        'authors': new_pub['authors'],
        'journal': new_pub['journal'],
        'doi': new_pub['doi'],
        'tags': new_pub['tags']
    }
    pubs.append(pub_entry)
    print(f"Added: ID {max_id} - {new_pub['title'][:50]}...")

print(f"New count: {len(pubs)}")

# Save updated publications
with open('publications_converted.json', 'w', encoding='utf-8') as f:
    json.dump(pubs, f, indent=2)

print(f"\nSaved {len(new_pubs)} new publications")
print(f"Total publications now: {len(pubs)}")
