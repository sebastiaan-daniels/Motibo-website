from PIL import Image
import os

def add_padding(image_path, output_path, padding_ratio=0.25):
    with Image.open(image_path) as img:
        width, height = img.size
        padding_x = int(width * padding_ratio)
        padding_y = int(height * padding_ratio)
        
        new_width = width + 2 * padding_x
        new_height = height + 2 * padding_y
        
        new_img = Image.new("RGBA", (new_width, new_height), (255, 255, 255, 255))
        new_img.paste(img, (padding_x, padding_y))
        new_img.save(output_path, "WEBP")

def process_images():
    for file in os.listdir():
        if file.lower().endswith(".webp"):
            output_file = f"{os.path.splitext(file)[0]}_padded.webp"
            add_padding(file, output_file)
            print(f"Processed: {file} -> {output_file}")

if __name__ == "__main__":
    process_images()
