#!/usr/bin/env python
import re

# Read the Publications.tsx file
with open('src/pages/Publications.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Read the generated publications array
with open('publications_ts_code.ts', 'r', encoding='utf-8') as f:
    pub_array = f.read()

# Find the start of the publications array and end
start_marker = '  const publications = ['
end_marker = '  ]\n  const currentYear'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print(f"ERROR: Could not find markers")
    print(f"Start marker found: {start_idx}")
    print(f"End marker found: {end_idx}")
else:
    # Replace the publications array
    end_idx += len('  ]')  # Include the closing bracket
    
    new_content = content[:start_idx] + pub_array + '\n' + content[end_idx:]
    
    # Write back to Publications.tsx
    with open('src/pages/Publications.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Successfully updated Publications.tsx!")
    print(f"Replaced {end_idx - start_idx} characters")
    
    # Verify
    with open('src/pages/Publications.tsx', 'r', encoding='utf-8') as f:
        updated = f.read()
        # Count publication entries by counting "id:" 
        count = updated.count('      id:')
        print(f"Verified: Updated file contains {count} publication entries")
