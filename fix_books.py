#!/usr/bin/env python3
"""Fix book assignments in data.js - manual remapping based on known structure."""
import json

with open('/opt/projects/deepseek/hegel/data.js') as f:
    js = f.read()
data = json.loads(js.replace('const hegelData = ', '').rstrip(';'))

# The MD structure: concepts 1-13 = Seinslogik, 14-26 = Wesenslogik, 27-36 = Begriffslogik
# Fix book and IDs
remap = {}
for i in range(13, 26):  # s14-s26 -> Wesenslogik
    remap[f's{i+1:02d}'] = ('wesenslogik', 'Wesenslogik', 'w')
for i in range(26, 36):  # s27-s36 -> Begriffslogik
    remap[f's{i+1:02d}'] = ('begriffslogik', 'Begriffslogik', 'b')

w_count = 0
b_count = 0

for c in data:
    old_id = c['id']
    if old_id in remap:
        new_book, new_name, prefix = remap[old_id]
        if new_book == 'wesenslogik':
            w_count += 1
            new_id = f'w{w_count:02d}'
        else:
            b_count += 1
            new_id = f'b{b_count:02d}'
        c['id'] = new_id
        c['book'] = new_book
        c['bookName'] = new_name

with open('/opt/projects/deepseek/hegel/data.js', 'w') as f:
    f.write(f'// Auto-generated from Hegel-Begriffslexikon.md\nconst hegelData = {json.dumps(data, ensure_ascii=False, indent=2)};')

print(f'Fixed {len(data)} concepts')
for c in data:
    print(f'  {c["id"]} [{c["bookName"]}]: {c["name"]}')
