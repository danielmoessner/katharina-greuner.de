import os
import subprocess
from datetime import date

# Configuration
MEDIA_DIR = 'public/media'
IMAGE_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.avif')
EXCLUDE_DIRS = ['public/media', '.git', 'node_modules', '.next', 'build', 'dist', 'out']
EXCLUDE_FILES = ['media-usage-report.txt', 'image_files.txt', 'results.txt', 'regenerate_report.py', 'find_references.py', 'media-usage-report.original.txt']

def get_all_images(root_dir):
    images = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(IMAGE_EXTENSIONS):
                images.append(os.path.join(root, file))
    return images

def is_used(image_path):
    basename = os.path.basename(image_path)
    # Search command: grep -rq {basename} .
    cmd = ['grep', '-rq', basename, '.']
    
    for d in EXCLUDE_DIRS:
        cmd.append(f'--exclude-dir={d}')
    
    for f in EXCLUDE_FILES:
        cmd.append(f'--exclude={f}')

    result = subprocess.run(cmd)
    return result.returncode == 0

images = get_all_images(MEDIA_DIR)
used_images = []
unused_images = []

for img in images:
    if is_used(img):
        used_images.append(img)
        print(f"USED: {img}")
    else:
        unused_images.append(img)
        print(f"UNUSED: {img}")

# Generate report
with open('media-usage-report.txt', 'w') as f:
    f.write("MEDIA USAGE REPORT\n")
    f.write(f"{date.today().isoformat()}\n")
    f.write(f"total_images: {len(images)}\n")
    f.write(f"used_images: {len(used_images)}\n")
    f.write(f"unused_images: {len(unused_images)}\n")
    f.write("\nUNUSED_IMAGES\n")
    for img in unused_images:
        f.write(f"{img}\n")

print(f"Report generated: {len(images)} total, {len(unused_images)} unused.")
