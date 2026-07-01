#!/usr/bin/env python

# Read all files
with open('src/pages/Publications.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open('publications_ts_code.ts', 'r', encoding='utf-8') as f:
    new_array_lines = f.readlines()

# Replace lines 12-2326 (0-indexed) with the new array
# Keep everything before line 12
before = lines[:12]

# Add the new array
new_lines = before + new_array_lines + ['\n'] + lines[2327:]

# Write back
with open('src/pages/Publications.tsx', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Successfully updated Publications.tsx!")
print(f"Old array: lines 13-2327 (2315 lines)")
print(f"New array: {len(new_array_lines)} lines")
print(f"Total file lines: {len(new_lines)}")

# Verify
with open('src/pages/Publications.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
    count = content.count('      id:')
    print(f"Verified: File contains {count} publication entries")
    print(f"File is valid: {'const publications' in content and 'const currentYear' in content}")
