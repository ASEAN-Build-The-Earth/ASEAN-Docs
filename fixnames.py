import os
import re

def convert_comments_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to match <!-- comment -->
    # re.DOTALL to match multiline comments
    pattern = r'<!--(.*?)-->'
    replacement = r'{/*\1*/}'

    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    # Only write if changed
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated comments in: {file_path}")

def process_directory(root_dir):
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(".mdx"):
                convert_comments_in_file(os.path.join(subdir, file))

if __name__ == "__main__":
    directory = input("Enter the path to the MDX directory: ").strip()
    if os.path.isdir(directory):
        process_directory(directory)
        print("All MDX comments have been converted.")
    else:
        print("Invalid directory path.")
