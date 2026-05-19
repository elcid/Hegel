#!/usr/bin/env python3
"""Fix remaining uppercase old spellings missed by case-sensitive replace."""
import os

filepath = '/opt/projects/deepseek/hegel/Hegel-Begriffslexikon.md'

with open(filepath) as f:
    content = f.read()

pairs = [
    # Uppercase old spellings
    ('(SCHLUß)', ''),
    ('(SEYN)', ''),
    ('(DASEYN)', ''),
    ('(URTHEIL)', ''),
    # also remove the now-redundant double modern spellings
    ('(SEIN)', ''),
    ('(DASEIN)', ''),
    ('(URTEIL)', ''),
    ('(SCHLUSS)', ''),
    # Clean up double spaces left after removal
    ('  ', ' '),
]

count = 0
for old, new in pairs:
    c = content.count(old)
    if c > 0:
        content = content.replace(old, new)
        count += c

with open(filepath, 'w') as f:
    f.write(content)

print(f'{filepath}: {count} remaining fixes')
