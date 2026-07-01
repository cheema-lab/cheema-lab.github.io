#!/usr/bin/env python

# Read the Publications.tsx file
with open('src/pages/Publications.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the start and end of the publications array
start_line = None
end_line = None
bracket_count = 0
found_start = False

for i, line in enumerate(lines):
    if 'const publications = [' in line:
        start_line = i
        found_start = True
        bracket_count += line.count('[') - line.count(']')
        continue
    
    if found_start:
        bracket_count += line.count('[') - line.count(']')
        if bracket_count == 0 and ']' in line:
            end_line = i
            break

print(f"Start line: {start_line + 1}")  # +1 for display (1-indexed)
print(f"End line: {end_line + 1}")
print(f"Lines to replace: {start_line} to {end_line}")

# Show the context
if start_line and end_line:
    print("\nContext around start:")
    print(''.join(lines[max(0, start_line):min(len(lines), start_line+3)]))
    
    print("\nContext around end:")
    print(''.join(lines[max(0, end_line-2):min(len(lines), end_line+3)]))
