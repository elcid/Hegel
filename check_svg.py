import re

with open('/opt/projects/deepseek/hegel/Hegel-Querverweise.svg') as f:
    svg = f.read()

# Find foreignObjects
fobs = re.findall(r'<foreignObject[^>]*>.*?</foreignObject>', svg, re.DOTALL)
print(f'Total foreignObjects: {len(fobs)}')

# Show first 5 with text
count = 0
for fo in fobs:
    divs = re.findall(r'<div[^>]*>(.*?)</div>', fo)
    for d in divs:
        if d.strip():
            count += 1
            if count <= 10:
                print(f'  [{count}] "{d.strip()}"')

# Also show the first full foreignObject
print('\n=== First foreignObject (first 500 chars) ===')
print(fobs[0][:500])
