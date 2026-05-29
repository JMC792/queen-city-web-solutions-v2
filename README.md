# Queen City Web Solutions v2

Queen City Web Solutions v2 is the next version of the Queen City Web Solutions website. The goal is to present the company as a modern digital partner for growing businesses, with a polished startup-style brand, clear service pages, stronger lead capture, and room to expand into resources, case studies, and productized offerings.

## Project Goals

- Create a polished marketing site for Queen City Web Solutions.
- Position the company around websites, digital systems, automation, and growth support.
- Make the homepage feel clear, confident, and conversion-focused.
- Build a flexible structure for future service pages, portfolio entries, resources, and case studies.
- Keep content, metadata, routes, and visual components consistent with the Queen City brand.

## Tech Stack

- Next.js 13 App Router
- React 18
- Tailwind CSS
- Headless UI
- Heroicons
- Motion animations
- Netlify deployment
- Cypress test scaffold

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Key Routes

- `/` - Homepage
- `/about` - Company overview
- `/contact` - Contact and lead form
- `/service` - Services overview
- `/portfolio` - Portfolio listing
- `/portfolio/[slug]` - Individual portfolio entry
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog post
- `/careers` - Careers page
- `/tos/privacy` - Privacy policy
- `/tos/terms` - Terms of use
- `/tos/eos` - End of service terms

## Project Structure

```text
app/                  Next.js app routes, pages, metadata, sitemap, and robots
components/           Reusable UI sections and page components
lib/                  Shared helper functions
public/data/          Portfolio and article data
public/icons/         Brand and UI icons
public/images/        Site imagery and portfolio images
public/locales/       Site copy and structured content
styles/               Global CSS and Tailwind utilities
```

## Current Status

The site has a working Next.js structure and a growing component library, but it is still in a cleanup and polish phase. Some content, routes, and data were carried over from earlier client templates and need to be updated so the entire site speaks with one Queen City Web Solutions voice.

Known cleanup areas:

- Replace leftover content from older projects.
- Standardize service language around Queen City Web Solutions.
- Update blog and portfolio placeholder data.
- Review legal pages for JSX `className` usage.
- Remove or complete empty API routes.
- Add meaningful Cypress tests or remove the placeholder test scaffold.
- Tighten navigation around the future page structure.

## Suggested Roadmap

1. Refresh the homepage copy and section order.
2. Clean all locale files and remove unrelated brand references.
3. Create stronger service pages for web design, SEO, automation, and maintenance.
4. Rework the portfolio into case studies with business outcomes.
5. Add a pricing or packages page.
6. Add a resources section for articles, guides, and lead magnets.
7. Improve contact flow with a project inquiry or website audit form.
8. Add basic tests for homepage rendering, navigation, and contact form visibility.

## Future Page Ideas

- `/service/web-design`
- `/service/seo`
- `/service/automation`
- `/service/maintenance`
- `/pricing`
- `/case-studies`
- `/case-studies/[slug]`
- `/industries`
- `/industries/home-services`
- `/industries/law-firms`
- `/industries/nonprofits`
- `/resources`
- `/resources/[slug]`
- `/process`

## Brand Direction

Queen City Web Solutions should feel like a focused, modern startup-style agency: clear, practical, polished, and outcome-driven. The site should communicate that the company does more than build websites. It helps businesses turn their online presence into a system for trust, leads, and growth.
