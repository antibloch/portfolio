from build_projects import parse_markdown

categories = parse_markdown()
for k, v in categories.items():
    print(f"{k}: {len(v)} repos")
