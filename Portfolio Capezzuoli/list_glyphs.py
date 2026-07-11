from fontTools.ttLib import TTFont
import json

font = TTFont("assets/Fondazione-Regular.otf")
# print all glyph names
glyph_names = font.getGlyphOrder()
print(f"Total glyphs: {len(glyph_names)}")

# Try to find alternate ampersands or variants
for name in glyph_names:
    if "ampersand" in name.lower() or "alt" in name.lower() or "." in name:
        print(name)
