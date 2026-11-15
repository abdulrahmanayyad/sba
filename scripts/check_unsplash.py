import os
import urllib.request
import json

photos = [
    ("adrien-olichon-1eQKDWNiIUs-unsplash.jpg", "1eQKDWNiIUs"),
    ("agto-nugroho-1mnXGDl3iRY-unsplash.jpg", "1mnXGDl3iRY"),
    ("collab-media-t26cTnB0V1k-unsplash.jpg", "t26cTnB0V1k"),
    ("declan-sun-cQr2x2ALizA-unsplash.jpg", "cQr2x2ALizA"),
    ("lidya-nada-grQh_x_vZKM-unsplash.jpg", "grQh_x_vZKM"),
    ("shanjir-h-photo4life-au-hnYQUpNtBws-unsplash.jpg", "hnYQUpNtBws"),
    ("th-o-ph-m-b5ivLh4eD0A-unsplash.jpg", "b5ivLh4eD0A"),
    ("towel-studio-h7NX26Sh3uA-unsplash.jpg", "h7NX26Sh3uA"),
    ("winx-U6VKGLgsxz0-unsplash.jpg", "U6VKGLgsxz0"),
]

for filename, pid in photos:
    url = f"https://unsplash.com/photos/{pid}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Extract title tag
            start = html.find("<title>")
            end = html.find("</title>")
            title = html[start+7:end] if start != -1 and end != -1 else "No title"
            print(f"{filename} -> {title}")
    except Exception as e:
        print(f"{filename} -> error: {e}")
