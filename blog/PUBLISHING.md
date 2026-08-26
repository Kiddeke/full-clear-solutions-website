# Blog publishing guide (used by the automated OneStream news publisher)

This blog is plain static HTML. Publishing a post means three edits, all of which must stay in sync:

1. **Create the post page** at `blog/posts/YYYY-MM-DD-short-slug.html`.
   Copy the structure of an existing post in `blog/posts/` exactly: same `<head>` (update title,
   description, og tags, and og:url), same header/nav, same footer. The article body lives in
   `<article class="blog-post">` with an `<h1>`, a `.blog-post-meta` date line, body paragraphs,
   optional `<h2>` sections (e.g. "Why this matters"), and a `.blog-post-sources` block listing
   every source URL used.
2. **Add a card to the top of the list** in `blog/index.html` inside `<div class="blog-list">`
   (newest first), copying the `.blog-card` structure of the existing cards.
3. **Prepend an entry to `blog/posts.json`** with title, date (YYYY-MM-DD), path, summary,
   topics, and source URLs.

## Editorial rules for the automated publisher

- Only publish about **genuinely new OneStream news** (roughly the last 1–2 days): product
  releases, company announcements, acquisitions, major customer/government contract news,
  Splash and other events, analyst recognition (e.g. Gartner), significant partner news.
- **Maximum 2 posts per run/day.** If there is one big story, publish one good post. If there
  is no real news, publish nothing — do not pad, and do not write generic evergreen content.
- **De-duplicate first**: before writing, check every candidate story against the titles,
  topics, and source URLs already in `blog/posts.json`. A story already covered (even under a
  different headline) must be skipped.
- **Never fabricate.** Every fact must come from a real source found via web search, and every
  post must end with a Sources section linking those URLs. If details can't be verified, leave
  them out.
- Tone: professional, concise, practical — written for finance/EPM leaders. 300–600 words.
  End with a short "Our take" that connects the news to what Full Clear Solutions does
  (OneStream administration, solutions architecture, Hyperion migration) and links to
  `/contact.html`. No prices, promises, or claims about Full Clear Solutions beyond what the
  site itself says.
- Use root-relative URLs (`/style.css`, `/blog/`, `/contact.html`) in all pages.
