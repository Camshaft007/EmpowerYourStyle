# Empower Your Style

Premium Next.js website for `www.empoweryourstyle.nz`.

## Tech stack

- Next.js App Router
- Tailwind CSS
- Static export ready for custom-domain hosting
- SEO metadata, sitemap, robots file and LocalBusiness schema
- Google Analytics ready via `NEXT_PUBLIC_GA_ID`
- Contact form ready via `NEXT_PUBLIC_FORM_ENDPOINT`, with email fallback

## Project structure

```txt
app/                  Pages, metadata routes and global styles
components/           Reusable layout, CTA and form components
data/site.js          Shared business details, nav, services and copy
public/CNAME          Custom domain for static hosting
public/images/        Website image assets
```

Legacy HTML files remain in the repository for reference, but the new production site is the Next.js app in `app/`.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The site is configured with `output: "export"`, so the static production site is generated in `out/`. The `public/CNAME` file preserves `www.empoweryourstyle.nz` for GitHub Pages style hosting.

## Environment variables

Create `.env.local` when needed:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-endpoint.example
```

If `NEXT_PUBLIC_FORM_ENDPOINT` is not set, the contact form opens an email draft to `hello@empoweryourstyle.nz`.
