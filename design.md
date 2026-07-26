# Portfolio Design Standard

## Hero Typography

The CareOS Case Study hero is the typography reference for all top-level page introductions. Apply this hierarchy to homepage and page heroes without changing each page’s established colour treatment.

### 1. Eyebrow

Used for the short category or context label above the hero heading.

| Property | Standard |
| --- | --- |
| Typeface | Geist Mono |
| Size | `0.75rem` / 12px on mobile; `0.875rem` / 14px from 640px |
| Weight | `500` |
| Style | Uppercase |
| Letter spacing | `0.16em` |
| Line-height | `1rem` at 12px; `1.25rem` at 14px |
| Space below | `1.5rem` / 24px |
| Colour | Page accent colour |

### 2. Hero heading

Used for the primary message of the page.

| Property | Standard |
| --- | --- |
| Typeface | Geist Sans |
| Size | `clamp(3rem, 6vw, 5.5rem)` |
| Approximate range | 48–88px |
| Weight | `500` |
| Style | Sentence or title case; no forced uppercase |
| Letter spacing | `-0.065em` |
| Line-height | `0.98` |
| Maximum width | `64rem` / 1024px |
| Text wrapping | Balanced |

### 3. Supporting text

Used for the concise explanation immediately following the hero heading.

| Property | Standard |
| --- | --- |
| Typeface | Geist Sans |
| Size | `clamp(1.05rem, 1.45vw, 1.3rem)` |
| Approximate range | 16.8–20.8px |
| Weight | `400` |
| Style | Sentence case |
| Letter spacing | Normal |
| Line-height | `1.65` |
| Maximum width | `48rem` / 768px |
| Space above | `2rem` / 32px; `2.5rem` / 40px from 640px |
| Text wrapping | Pretty |
| Colour | Muted page text colour |

## Design Tokens

```css
:root {
  --text-display: clamp(3rem, 6vw, 5.5rem);
  --text-display--line-height: 0.98;
  --text-display--letter-spacing: -0.065em;

  --text-body-lg: clamp(1.05rem, 1.45vw, 1.3rem);
  --text-body-lg--line-height: 1.65;
}
```

## Usage Rules

- Use Geist Sans for headings, supporting copy, navigation, body text, and buttons.
- Use Geist Mono for eyebrows, labels, metadata, and diagrams.
- Preserve the hierarchy rather than enlarging individual page titles independently.
- Apply this standard to top-level page heroes. Internal section headings and specialised components may use their own established scale.
- Keep hero copy concise enough to maintain readable line lengths and balanced wrapping.
