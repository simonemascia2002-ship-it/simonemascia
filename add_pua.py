from fontTools.ttLib import TTFont

font = TTFont("assets/Fondazione-Regular.otf")
cmap = font.getBestCmap()
reverse_cmap = {name: code for code, name in cmap.items()}

glyph_names = font.getGlyphOrder()
pua_start = 0xE000

new_mappings = {}
for name in glyph_names:
    if name not in reverse_cmap and name != ".notdef":
        new_mappings[pua_start] = name
        print(f"Mapped {name} to {hex(pua_start)}")
        pua_start += 1

# Add mappings to cmap
for table in font['cmap'].tables:
    if table.isUnicode():
        table.cmap.update(new_mappings)

font.save("assets/Fondazione-Regular-PUA.otf")
print("Saved as assets/Fondazione-Regular-PUA.otf")
