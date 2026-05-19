#!/usr/bin/env python3
import json, re
with open('/opt/projects/deepseek/hegel/data.js') as f:
    js = f.read()
js = re.sub(r'^//.*\n', '', js)
js = js.replace('const hegelData = ', '').rstrip(';\n ')
data = json.loads(js)
id2name = {c['id']: c['name'] for c in data}

for prefix, title in [('s', 'ERSTES BUCH'), ('b', 'DRITTES BUCH')]:
    print(f"\n=== {title} ===\n")
    for c in data:
        if not c['id'].startswith(prefix):
            continue
        unresolved = []
        for cr in c['crossRefs']:
            tid = cr.get('targetId')
            if not tid:
                unresolved.append(cr['target'])
        if unresolved:
            print(f"{c['id']} {c['name'][:35]}: ?? {', '.join(unresolved[:3])}")
        if c['id'].startswith(prefix):
            total = len(c['crossRefs'])
            ok = sum(1 for cr in c['crossRefs'] if cr.get('targetId'))
            if ok < total:
                print(f"  ({ok}/{total} resolved)")

print("\n=== GLOBAL ===")
all_ok = sum(1 for c in data for cr in c['crossRefs'] if cr.get('targetId'))
all_total = sum(len(c['crossRefs']) for c in data)
print(f"Resolved: {all_ok}/{all_total} ({100*all_ok/all_total:.0f}%)")
