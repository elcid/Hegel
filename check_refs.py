#!/usr/bin/env python3
import json, re
with open('/opt/projects/deepseek/hegel/data.js') as f:
    js = f.read()
# Strip comment and extract JSON
js = re.sub(r'^//.*\n', '', js)
js = js.replace('const hegelData = ', '').rstrip(';\n ')
data = json.loads(js)
unresolved = []
for c in data:
    for cr in c['crossRefs']:
        if cr.get('targetId') is None:
            unresolved.append(f"{c['id']} {c['name'][:30]} -> {cr['target']}")
print(f'{len(unresolved)} unresolved crossRefs:')
for u in unresolved:
    print(f'  {u}')
