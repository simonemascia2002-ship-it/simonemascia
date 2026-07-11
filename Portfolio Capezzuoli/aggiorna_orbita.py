import os
import json

def get_media_files(directory):
    allowed_extensions = {'.mp4', '.jpg', '.jpeg', '.png'}
    media_files = []
    
    for root, _, files in os.walk(directory):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in allowed_extensions:
                # Usa percorsi relativi (sostituisce i separatori di Windows con / se necessario)
                path = os.path.relpath(os.path.join(root, file), start='.')
                path = path.replace('\\', '/')
                media_files.append(path)
                
    return media_files

if __name__ == '__main__':
    assets_dir = 'assets_orbita'
    output_file = 'orbita_assets.json'
    
    if os.path.exists(assets_dir):
        files = get_media_files(assets_dir)
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump({"media": files}, f, indent=4)
        print(f"Creato {output_file} con {len(files)} file trovati.")
    else:
        print(f"Errore: Cartella '{assets_dir}' non trovata.")
