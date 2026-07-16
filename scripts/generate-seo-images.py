from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE_RABBIT = ROOT / "src" / "assets" / "story" / "rabbit-about.webp"
OUTPUT_DIR = ROOT / "public" / "seo"
SIZE = (1200, 630)

CARDS = {
    "en": {
        "font": ["NotoSans-Regular.ttf", "arial.ttf"],
        "bold": ["NotoSans-Bold.ttf", "arialbd.ttf"],
        "title": ["A clear, easy-to-read", "BDSM notebook."],
        "kicker": "BDSM EXPERIENCES, PREFERENCES & BOUNDARIES",
    },
    "zh-hant": {
        "font": ["msjh.ttc", "NotoSans-Regular.ttf"],
        "bold": ["msjhbd.ttc", "NotoSans-Bold.ttf"],
        "title": ["一本清楚好讀的", "BDSM 筆記"],
        "kicker": "BDSM 經驗、喜好、界線",
    },
    "zh-hans": {
        "font": ["msyh.ttc", "NotoSans-Regular.ttf"],
        "bold": ["msyhbd.ttc", "NotoSans-Bold.ttf"],
        "title": ["一本清楚易读的", "BDSM 笔记"],
        "kicker": "BDSM 经验、喜好、界限",
    },
    "ja": {
        "font": ["meiryo.ttc", "NotoSans-Regular.ttf"],
        "bold": ["meiryob.ttc", "NotoSans-Bold.ttf"],
        "title": ["すっきり読みやすい", "BDSM ノート"],
        "kicker": "BDSM の経験・好み・境界線",
    },
}


def font_path(candidates: list[str]) -> str:
    windows_fonts = Path("C:/Windows/Fonts")
    for candidate in candidates:
        path = windows_fonts / candidate
        if path.exists():
            return str(path)
    raise FileNotFoundError(f"No suitable font found: {candidates}")


def draw_gradient() -> Image.Image:
    image = Image.new("RGB", SIZE)
    pixels = image.load()
    for y in range(SIZE[1]):
        for x in range(SIZE[0]):
            horizontal = x / (SIZE[0] - 1)
            vertical = y / (SIZE[1] - 1)
            glow = max(0.0, 1.0 - (((x - 940) / 500) ** 2 + ((y - 190) / 430) ** 2))
            pixels[x, y] = (
                int(17 + 25 * horizontal + 18 * glow),
                int(8 + 11 * horizontal + 8 * glow),
                int(14 + 18 * horizontal + 12 * glow + 4 * vertical),
            )
    return image.convert("RGBA")


def fit_font(
    font_file: str,
    lines: list[str],
    preferred_size: int,
    max_width: int,
    min_size: int,
) -> ImageFont.FreeTypeFont:
    size = preferred_size
    while size > min_size:
        font = ImageFont.truetype(font_file, size)
        if all(font.getlength(line) <= max_width for line in lines):
            return font
        size -= 1
    return ImageFont.truetype(font_file, size)


def make_card(locale: str, copy: dict[str, object]) -> None:
    card = draw_gradient()
    draw = ImageDraw.Draw(card)
    regular = font_path(copy["font"])
    bold = font_path(copy["bold"])
    kicker_font = fit_font(
        bold,
        [copy["kicker"]],
        25 if locale == "en" else 34,
        660,
        18,
    )
    title_font = fit_font(
        regular,
        copy["title"],
        66 if locale == "en" else 78,
        660,
        42,
    )
    domain_font = ImageFont.truetype(regular, 23)
    brand_font = ImageFont.truetype(bold, 28)

    draw.rounded_rectangle(
        (42, 42, 1158, 588),
        radius=30,
        fill=(34, 16, 27, 255),
        outline=(238, 190, 178, 38),
        width=2,
    )
    draw.text((88, 86), "BOUNDARY NOTES", font=brand_font, fill=(255, 241, 235, 255))
    draw.line((88, 137, 238, 137), fill=(222, 163, 149, 190), width=3)
    draw.text((88, 198), copy["kicker"], font=kicker_font, fill=(220, 166, 152, 255))

    title_y = 260
    for line in copy["title"]:
        draw.text((84, title_y), line, font=title_font, fill=(255, 245, 240, 255))
        title_y += title_font.size + 14

    draw.text((88, 528), "boundarynotes.com", font=domain_font, fill=(229, 189, 177, 210))

    rabbit = Image.open(SOURCE_RABBIT).convert("RGBA")
    bbox = rabbit.getbbox()
    if bbox is None:
        raise ValueError("Rabbit asset is unexpectedly empty")
    rabbit = rabbit.crop(bbox)
    rabbit.thumbnail((455, 535), Image.Resampling.LANCZOS)
    rabbit_x = 1132 - rabbit.width
    rabbit_y = 570 - rabbit.height
    card.alpha_composite(rabbit, (rabbit_x, rabbit_y))

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    card.convert("RGB").save(
        OUTPUT_DIR / f"boundary-notes-{locale}.png",
        format="PNG",
        compress_level=9,
    )


for locale_id, localized_copy in CARDS.items():
    make_card(locale_id, localized_copy)
