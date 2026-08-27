# prabhanjan.com — site source (v4: mobile fixes + copy pass)

Plain HTML/CSS/JS. No build step, no framework. Every page is fully
self-contained (styles inlined), so there's no external stylesheet to break.

## What changed in v4

**Mobile**
- **Nav collapses to a menu icon below 560px.** The old nav overflowed the
  screen on 360px and 375px phones — the wordmark collided with HOME and
  WORDS was clipped off the right edge. Desktop nav is unchanged.
- **iOS viewport fix on the role-detail slides.** These used `height: 100vh`,
  which on iPhone resolves to the full screen height and ignores Chrome's
  address bar and toolbar. The bottom ~15% of every slide (including the
  progress dots) sat below the visible area, and scrolling was disabled, so
  it was unreachable. Now uses `100dvh` with a `100vh` fallback.
- **Tap targets raised to 44px** on nav links, "More detail", "Read more",
  and "Back to Work" (were ~18px).

**Copy**
- Removed the repeated "How to…" opening that started 3 of the Key Learnings.
- Removed a colon used as a dash substitute.
- Cut empty intensifiers ("real structure", "genuinely different").
- Finished the em-dash reduction across Home, Work, and role detail.
  Remaining em dashes are date ranges only, plus one in the article that's
  in the original writing.

**Consistency**
- `work.html` and `role-detail.html` had drifted out of sync after manual
  edits (Brane role title, Exponent end date, Conifer role title). Both now
  match `work.html`, which was the correct version.

## Files
- `index.html` — Home
- `work.html` — Work (one role card at a time)
- `role-detail.html` — the "More detail" slides
- `words.html` — Words index
- `the-hidden-cost-of-no-acknowledgement.html` — first post

## Editing later
Titles, dates, headlines and metrics live in **both** `work.html` and
`role-detail.html` (inside `const ROLES = [...]`). Change one, change the
other, or they'll disagree on the live site.

## Updating the live site
GitHub → Add file → Upload files → drag in the changed files → commit
directly to main. Live in a minute or two.
