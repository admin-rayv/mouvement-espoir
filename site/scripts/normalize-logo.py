#!/usr/bin/env python3
"""Normalise un logo de partenaire : canevas blanc uniforme, logo centré.

Usage : python3 normalize-logo.py <source> <destination.png>

Le logo est mis à l'échelle (sans déformation) pour tenir dans la zone
utile du canevas, puis centré sur fond blanc. Tous les logos produits
ont ainsi la même dimension, prêts pour la section partenaires.
"""

import sys
from PIL import Image

CANVAS = (800, 600)   # dimension finale commune
CONTENT = (640, 440)  # zone utile : laisse une marge blanche autour


def normalize(src: str, dest: str) -> None:
    logo = Image.open(src).convert("RGBA")

    scale = min(CONTENT[0] / logo.width, CONTENT[1] / logo.height)
    size = (round(logo.width * scale), round(logo.height * scale))
    logo = logo.resize(size, Image.LANCZOS)

    canvas = Image.new("RGB", CANVAS, "white")
    offset = ((CANVAS[0] - size[0]) // 2, (CANVAS[1] - size[1]) // 2)
    canvas.paste(logo, offset, logo)
    canvas.save(dest, "PNG")
    print(f"{src} ({Image.open(src).size}) -> {dest} {CANVAS}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    normalize(sys.argv[1], sys.argv[2])
