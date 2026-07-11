from fontTools.ttLib import TTFont

font = TTFont("assets/Fondazione-Regular.otf")
if "GSUB" in font:
    gsub = font["GSUB"].table
    feature_list = gsub.FeatureList.FeatureRecord
    for record in feature_list:
        print(f"Feature: {record.FeatureTag}")
else:
    print("No GSUB table found.")
