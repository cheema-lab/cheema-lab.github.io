import json

with open('publications_converted.json', 'r') as f:
    pubs = json.load(f)

# Generate TypeScript code
ts_code = "  const publications = [\n"

for i, pub in enumerate(pubs):
    tags_str = ", ".join([f"'{tag}'" for tag in pub['tags']])
    
    # Escape single quotes in titles and authors
    title = (pub['title'] or '').replace("'", "\\'")
    authors = (pub['authors'] or '').replace("'", "\\'")
    journal = (pub['journal'] or '').replace("'", "\\'")
    doi = (pub['doi'] or '').replace("'", "\\'")
    
    ts_code += f"""    {{
      id: {pub['id']},
      year: {pub['year']},
      title: '{title}',
      authors: '{authors}',
      journal: '{journal}',
      doi: '{doi}',
      tags: [{tags_str}],
    }},
"""

ts_code += "  ]\n"

# Write to file
with open('publications_ts_code.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print(f"Generated TypeScript code for {len(pubs)} publications")
print(f"File size: {len(ts_code)} characters")
print("Saved to publications_ts_code.ts")
