import openpyxl
import json

# Load the workbook
file_path = r'C:\Users\Meth\Documents\GitHub\cheema-lab.github.io.website\20260624_publication_list.xlsx'
wb = openpyxl.load_workbook(file_path)
ws = wb.active

# Get all rows
rows = list(ws.iter_rows(values_only=True))

# Extract header
headers = rows[0]

# Extract data rows
publications = []
for row in rows[1:]:
    if any(row):  # Skip empty rows
        pub = {}
        for i, header in enumerate(headers):
            value = row[i]
            # Convert to int/str as appropriate
            if header == 'Publication Year' and value:
                pub[header] = int(value)
            elif value is not None:
                pub[header] = str(value).strip()
            else:
                pub[header] = None
        publications.append(pub)

# Save to file
output_file = r'C:\Users\Meth\Documents\GitHub\cheema-lab.github.io.website\publications.json'
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(publications, f, indent=2, ensure_ascii=False)

print(f"✓ Extracted {len(publications)} publications")
print(f"✓ Saved to: {output_file}")
