#!/usr/bin/env python3
"""Correctly parse Hegel-Begriffslexikon.md -> data.js with proper books."""
import re, json

lines = open('/opt/projects/deepseek/hegel/Hegel-Begriffslexikon.md').readlines()

# Track which book each ### heading belongs to
current_book = 'seinslogik'
book_for_heading = {}  # line_number -> book key

for i, line in enumerate(lines):
    if line.startswith('## ERSTES BUCH'):
        current_book = 'seinslogik'
    elif line.startswith('## ZWEITES BUCH'):
        current_book = 'wesenslogik'
    elif line.startswith('## DRITTES BUCH'):
        current_book = 'begriffslogik'
    if line.startswith('### ') and re.match(r'^### [A-ZÄÖÜ]', line):
        book_for_heading[i] = current_book

# Extract ### blocks
concepts = []
counter = {'seinslogik': 0, 'wesenslogik': 0, 'begriffslogik': 0}
book_names = {'seinslogik': 'Seinslogik', 'wesenslogik': 'Wesenslogik', 'begriffslogik': 'Begriffslogik'}
name_to_id = {}

heading_lines = sorted(book_for_heading.keys())
for idx, start_line in enumerate(heading_lines):
    name = lines[start_line].replace('### ', '').strip()
    book = book_for_heading[start_line]
    
    # Find end of this block
    end_line = len(lines)
    for j in range(start_line + 1, len(lines)):
        if j in heading_lines or lines[j].startswith('## '):
            end_line = j
            break
    
    block = ''.join(lines[start_line:end_line])
    
    # Skip non-concept blocks
    if '**Position:**' not in block and '**Definition:**' not in block:
        continue
    
    counter[book] += 1
    prefix = {'seinslogik': 's', 'wesenslogik': 'w', 'begriffslogik': 'b'}[book]
    cid = f'{prefix}{counter[book]:02d}'
    
    # Extract data
    quote = ''
    qm = re.search(r'> \*(.+?)\*', block, re.DOTALL)
    if qm:
        quote = qm.group(1).strip().replace('\n> ', ' ')
    
    position = ''
    pm = re.search(r'\*\*Position:\*\*\s*(.+?)\n', block)
    if pm:
        position = pm.group(1).strip()
    
    definition = ''
    dm = re.search(r'\*\*Definition:\*\*\s*(.+?)(?=\n\*\*Querverweise|\n###|\n##|\n####|\Z)', block, re.DOTALL)
    if dm:
        definition = dm.group(1).strip()
    
    cross_refs = []
    rm = re.search(r'\*\*Querverweise:\*\*\n((?:.+\n)+?)(?=\n\*\*|$)', block, re.DOTALL)
    if rm:
        for ref_line in rm.group(1).split('\n'):
            ref_line = ref_line.strip()
            if not ref_line.startswith('-') or '→' not in ref_line:
                continue
            tm = re.search(r'\*\*(.+?)\*\*', ref_line)
            if tm:
                target = tm.group(1).strip()
                desc_part = ref_line.split('**:', 1)
                desc = desc_part[1].strip() if len(desc_part) > 1 else target
                cross_refs.append({'target': target, 'text': desc})
    
    concepts.append({
        'id': cid, 'name': name, 'book': book,
        'bookName': book_names[book], 'position': position,
        'quote': quote, 'definition': definition, 'crossRefs': cross_refs
    })
    
    # Register names
    for v in [name, name.split('(')[0].strip().rstrip('/').strip()]:
        v = v.strip()
        if v and v not in name_to_id:
            name_to_id[v] = cid
    for sep in ['·', '/']:
        if sep in name:
            for part in name.split(sep):
                v = part.strip().split('(')[0].strip().rstrip('/').strip()
                if v and v not in name_to_id:
                    name_to_id[v] = cid

# Manual mappings
manual = {
    'Sein': 's01', 'Nichts': 's02', 'Werden': 's03', 'Dasein': 's04',
    'Qualität': 's05', 'Endlichkeit': 's06', 'Unendlichkeit': 's07',
    'Fürsichsein': 's08', 'Eins': 's09', 'Quantität': 's10', 'Maß': 's12',
    'Wesen': 'w01', 'Schein': 'w02', 'Reflexion': 'w03', 'Grund': 'w05',
    'Existenz': 'w06', 'Erscheinung': 'w07', 'Wirklichkeit': 'w09',
    'Substanz': 'w11', 'Kausalität': 'w12', 'Wechselwirkung': 'w13',
    'Begriff': 'b01', 'Urteil': 'b03', 'Schluss': 'b04', 'Objektivität': 'b05',
    'Idee': 'b07', 'Leben': 'b08', 'Erkennen': 'b09', 'Absolute Idee': 'b10',
    'Identität': 'w04', 'Unterschied': 'w04', 'Widerspruch': 'w04',
    'Werden (Seinslogik)': 's03',
    'Methode': 'b10', 'Knotenlinie': 's13',
    'Sein / Wesen': 'b01', 'Sein / Nichts': 's03',
    'Qualität / Quantität': 's10', 'Wesen / Schein': 'w03',
    'Wesen / Erscheinung': 'w09', 'Begriff / Objektivität': 'b07',
    'Identität / Unterschied / Widerspruch': 'w04',
    'Identität / Unterschied': 'w04', 'Qualität / Grenze': 's05',
    'Etwas / Anderes': 's06',
    'Alle vorhergehenden Begriffe': 'b10',
}
for k, v in manual.items():
    if v and k not in name_to_id:
        name_to_id[k] = v

# Resolve cross-references
for c in concepts:
    for cr in c['crossRefs']:
        tn = cr['target']
        cr['targetId'] = name_to_id.get(tn)
        if not cr['targetId']:
            for n, nid in name_to_id.items():
                if tn.lower() in n.lower() or n.lower() in tn.lower():
                    cr['targetId'] = nid
                    break

# Write data.js
js_content = '// Auto-generated from Hegel-Begriffslexikon.md\nconst hegelData = '
js_content += json.dumps(concepts, ensure_ascii=False, indent=2) + ';\n'
with open('/opt/projects/deepseek/hegel/data.js', 'w') as f:
    f.write(js_content)

print(f'Generated data.js: {len(concepts)} concepts')
for c in concepts:
    resolved = sum(1 for cr in c['crossRefs'] if cr.get('targetId'))
    print(f'  {c["id"]} [{c["bookName"][:6]}]: {c["name"][:50]} — {len(c["crossRefs"])} refs ({resolved})')
