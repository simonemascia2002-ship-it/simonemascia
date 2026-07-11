from fontTools.ttLib import TTFont
import json

font = TTFont("assets/Fondazione-Regular.otf")
# Get best cmap table
cmap = font.getBestCmap()
# Get a list of unicode code points
unicodes = sorted(cmap.keys())
print(json.dumps(unicodes))
