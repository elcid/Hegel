#!/usr/bin/env python3
"""Modernize German orthography - clean version, safe for indentation."""
import os

files = [
    '/opt/projects/deepseek/hegel/Hegel-Begriffslexikon.md',
    '/opt/projects/deepseek/hegel/Hegel-Querverweise.md',
    '/opt/projects/deepseek/hegel/generate_data.py',
]

# Only replace the actual spelling variants, not double-space
# Case-sensitive, both lower and upper variants
reps = [
    # Seyn → Sein (all caps and mixed)
    ('SEYN', 'SEIN'),
    ('DASEYN', 'DASEIN'),
    ('URTHEIL', 'URTEIL'),
    ('SCHLUß', 'SCHLUSS'),
    ('NOTHWENDIGKEIT', 'NOTWENDIGKEIT'),
    ('VERHÄLTNIß', 'VERHÄLTNIS'),
    ('Daseyns', 'Daseins'),
    ('Daseyn', 'Dasein'),
    ('Seyns', 'Seins'),
    ('Seyne', 'Seine'),
    ('Seyn', 'Sein'),
    ('Schluß', 'Schluss'),
    ('mußt', 'musst'),
    ('muß', 'muss'),
    ('Urtheil', 'Urteil'),
    ('Urtheile', 'Urteile'),
    ('Nothwendigkeit', 'Notwendigkeit'),
    ('nothwendig', 'notwendig'),
    ('Verhältniß', 'Verhältnis'),
]

# Special case: remove old-spelling notes like (SEIN), (DASEIN) from concept titles
# Only safe to do after the SEYN→SEIN replacements
# We'll do a separate pass for these

total = 0
for filepath in files:
    if not os.path.exists(filepath):
        print(f'SKIP {os.path.basename(filepath)}')
        continue
    with open(filepath) as f:
        content = f.read()
    count = 0
    for old, new in reps:
        c = content.count(old)
        if c > 0:
            content = content.replace(old, new)
            count += c
    with open(filepath, 'w') as f:
        f.write(content)
    print(f'{os.path.basename(filepath)}: {count}')
    total += count

print(f'Total: {total}')

# Now clean up redundant parenthetical modern spellings from concept titles in MD only
# e.g. "### SEIN (SEIN)" → "### SEIN"
md_path = '/opt/projects/deepseek/hegel/Hegel-Begriffslexikon.md'
if os.path.exists(md_path):
    with open(md_path) as f:
        content = f.read()
    # Remove (SEIN), (DASEIN), (URTEIL), (SCHLUSS) etc. from ### headings
    import re
    content = re.sub(r'^(### [A-ZÄÖÜ].+?) \((SEIN|DASEIN|URTEIL|SCHLUSS)\)', r'\1', content, flags=re.MULTILINE)
    # Also remove remaining old-style (SEIN) variants from body text (e.g., in source line)
    content = re.sub(r' \(„Seyn“| \(„Sein“| \(„Daseyn“', '', content)
    # Clean up (SEYN) remnants
    content = content.replace('(SEIN)', '')
    content = content.replace('(DASEIN)', '')
    content = content.replace('(URTEIL)', '')
    content = content.replace('(SCHLUSS)', '')
    with open(md_path, 'w') as f:
        f.write(content)
    print(f'{os.path.basename(md_path)}: heading cleanup done')
