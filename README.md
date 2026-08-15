# prabhanjan.com — site source (v3: Inter typography + real content)

Plain HTML/CSS/JS. No build step, no framework. Free hosting, ~$10-13/year
(domain only). Every page is fully self-contained — styles are inlined in
each file, so there's no external stylesheet that can fail to load.

**Replaces v2.** Delete any old `index.html`, `work.html`, `role-detail.html`,
`words.html`, and `style.css` from your repo, then upload these five files
in their place.

## What changed from v2
- **One typeface, everywhere**: Inter, at various weights/sizes, replacing
  the previous serif+sans+mono mix — per your "keep it simple" call.
- **Full type-scale pass**: nav wordmark, page titles, role titles, stats,
  body text, and labels were all resized against each other so the
  hierarchy feels proportionate rather than arbitrary (see the scale
  reference comment at the top of each file's `<style>` block).
- **Nav wordmark** is now large and bold — the biggest visible brand mark
  on every page, as asked.
- **Icons shrunk, titles enlarged** on the Work page — each role's name
  ("Lock-In," "Scale," etc.) is now the dominant element per section.
- **Scale role content rewritten**: the old "60 → 350 people" stat was
  company context, not personal impact, so it's gone. In its place: the
  four operational systems built from scratch and the 25+ locations
  unlocked via two real partnerships — both straight from your resume.
- One more small polish pass on a couple of learning bullets that read
  generic before.

## Files
- `index.html` — Home
- `work.html` — Work (vertical scroll, one role at a time)
- `role-detail.html` — the "More detail" slides for each role
- `words.html` — Words (blog, still sample posts)

## Updating the live site
Same as before: GitHub → **Add file → Upload files** → drag in the changed
files → commit. Live within a minute or two.

## Next up
- Real posts for Words (still sample content)
- Anything else you spot once this is live
