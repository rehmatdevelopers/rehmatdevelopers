# Rehmat Developers Website

A complete, responsive 9-page website for **Rehmat Developers** (Founder & CEO: Muhammad Waleed, Raja Jang, Kasur, Pakistan). Plain HTML5, CSS3 and vanilla JavaScript. No build step, no dependencies, works on GitHub Pages.

## Pages
`index.html` (Home), `about.html`, `services.html`, `portfolio.html`, `blog.html`, `pricing.html`, `faq.html`, `reviews.html`, `contact.html`

## Structure
```
index.html + 8 more pages
assets/css/style.css       centralized styles (theme tokens at the top)
assets/js/data.js          ALL content: services, projects, posts, FAQ, team, plans, contact details
assets/js/components.js    reusable header, footer, icons and cards
assets/js/main.js          navigation, filters, FAQ accordion, modals, validated forms
images/                    logo.svg, favicon.svg, waleed.jpg, ahsan.jpg (see images/README.txt)
tools/build_pages.py       optional: regenerates the 9 HTML files from one template
```

## Deploy on GitHub Pages
1. Copy everything into your repository root (keep your existing `images/` files such as `waleed.jpg` and `ahsan.jpg`).
2. Commit and push.
3. In **Settings > Pages**, choose your branch and the `/ (root)` folder.
4. Visit `https://<username>.github.io/<repository>/`. All paths are relative, so it works under a project subpath.

To preview locally: open `index.html`, or run `python3 -m http.server` in this folder.

## Editing content
Almost everything lives in `assets/js/data.js`. Change a price, FAQ answer, service, project or contact detail there and every page updates. The header and footer are defined once in `components.js`, so they are identical on every page.

Theme colors are CSS variables at the top of `style.css`: navy `#101B35`, electric blue `#386BFF`, white `#FFFFFF`. Typography is Inter (Google Fonts).

## How the forms work (GitHub Pages has no server)
- **Contact form**: validates, then opens the visitor's email app (to rehmat.developers022@gmail.com) or WhatsApp (+92 328 4461097) with the message pre-filled.
- **Reviews**: validated; the submitter sees their review on their own device, and is prompted to email or WhatsApp it to you. Reviews are **not** auto-published, which prevents fake entries. To publish an approved review, add it to `RD.reviews` in `data.js`.
- **Newsletter**: validates, then opens an email subscription request to you.
For automatic submissions without email apps, connect a free form service (Formspree, Web3Forms) in `main.js`.

## Items to confirm before launch
- **Pricing**: uses the current Pricing page ($299 / $799 / $2,499, 2/3/4 revisions, 30/60/90 days support). The old Services and FAQ pages showed outdated prices; those are now consistent.
- **Portfolio**: the 12 project names and descriptions are carried over from your existing site. Unverifiable claims (e.g. "doubled sales", "15% conversion") were removed. Please confirm each is genuine and add real screenshots via the `img` field.
- **Blog**: article summaries are shown in a pop-up. Your original full articles (`post-*.html`) were not part of this redesign; add them if you want full pages.
- **Reviews**: no testimonials were published on the original site, so none are shown. The Home and Reviews pages show an invitation until you add real ones.
- **GitHub link** in the footer assumes `github.com/rehmatdevelopers`; edit `RD.site.github` if different.
- The old client-side **Admin** page was left out (a password in browser code is not secure).
