import re, urllib.request, sys

with open('/opt/projects/deepseek/hegel/Hegel-Querverweise.md') as f:
    md = f.read()

match = re.search(r'```mermaid\n(.*?)\n```', md, re.DOTALL)
if not match:
    print("ERROR: No mermaid block found")
    sys.exit(1)

mermaid_code = match.group(1)

data = mermaid_code.encode('utf-8')
req = urllib.request.Request(
    'https://kroki.io/mermaid/png',
    data=data,
    headers={'Content-Type': 'text/plain', 'User-Agent': 'Mozilla/5.0'},
    method='POST'
)
try:
    with urllib.request.urlopen(req, timeout=120) as resp:
        png = resp.read()
        with open('/opt/projects/deepseek/hegel/Hegel-Querverweise.png', 'wb') as out:
            out.write(png)
        print(f'PNG saved: {len(png)} bytes')
except Exception as e:
    print(f'Error: {e}')
