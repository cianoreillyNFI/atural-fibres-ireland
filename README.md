# Natural Fibres Ireland — Static Website

A zero-cost static website designed for GitHub Pages.

## Files
- `index.html` — homepage
- `mission.html` — mission and policy context
- `fibres.html` — fibre portfolio
- `programme.html` — six workstreams
- `collaborate.html` — stakeholder pathways and email enquiry form
- `styles.css` — complete responsive design system
- `script.js` — mobile navigation, subtle reveal animations, current year and email-form behaviour
- `assets/` — logo mark and favicon
- `404.html`, `robots.txt`, `sitemap.xml` — production basics

## Before launch
1. Create or forward `hello@naturalfibresireland.ie`. If you use a different address, replace every instance of this email in the HTML and `script.js`.
2. Confirm the main domain. The files currently assume `https://naturalfibresireland.ie`.
3. Add social profiles when available.
4. If the organisation later incorporates as a CLG or Ltd, update the footer/legal information rather than implying that status before it exists.

## Publish on GitHub Pages
1. Create a public GitHub repository, e.g. `natural-fibres-ireland`.
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/ (root)`.
5. Once live, enter `naturalfibresireland.ie` as the custom domain in GitHub Pages.
6. At Blacknight, point the DNS records to GitHub Pages according to GitHub's current custom-domain instructions.
7. Enable **Enforce HTTPS** once GitHub makes it available.

## Contact form
The form is intentionally backend-free. It creates a pre-filled email and opens the visitor's email application. This keeps the site free and avoids storing personal data on the website. Later, it can be connected to a proper form endpoint or CRM.

## Design notes
The visual language is intentionally institutional and sector-focused: deep green, natural off-white, restrained clay accent, strong typography, no stock photography, and language centred on industrial value chains rather than craft/hobby messaging.
