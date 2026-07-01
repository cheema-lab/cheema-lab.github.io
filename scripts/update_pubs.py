import re

# Read the Publications.tsx file
with open('src/pages/Publications.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Read the generated publications array
with open('publications_ts_code.ts', 'r', encoding='utf-8') as f:
    pub_array = f.read()

# Find and replace the publications array using regex
# Match from "const publications = [" to the closing "]"
pattern = r'(  const publications = \[).*?(\n  \]\n)'
replacement = pub_array + '\n'

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Write back to Publications.tsx
with open('src/pages/Publications.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated Publications.tsx with all 257 publications!")

# Verify the update
with open('src/pages/Publications.tsx', 'r', encoding='utf-8') as f:
    updated = f.read()
    pub_count = updated.count('"id":')
    print(f"Verified: Found {pub_count} publications in updated file")
