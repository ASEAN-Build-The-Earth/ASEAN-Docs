import os

def rename_md_to_mdx(root_dir):
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".md"):
                old_path = os.path.join(subdir, file)
                new_path = os.path.join(subdir, file[:-3] + ".mdx")
                os.rename(old_path, new_path)
                print(f"Renamed: {old_path} -> {new_path}")

if __name__ == "__main__":
    directory = input("Enter the directory path: ").strip()
    if os.path.isdir(directory):
        rename_md_to_mdx(directory)
        print("Done renaming all .md files to .mdx")
    else:
        print("Invalid directory path")
