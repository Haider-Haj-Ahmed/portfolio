import re
with open('/mnt/user-data/uploads/portfolio.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()
print(len(content))
