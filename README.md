# Arvinder Singh — Software Developer Portfolio

A recruiter-focused portfolio for Arvinder Singh, a graduate software developer based in Auckland, New Zealand. The site uses an editorial engineering aesthetic and prioritises system thinking, technical decisions, validation, and practical project evidence.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The development URL is printed in the terminal. Production checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Site structure

- `/` — recruiter-focused homepage
- `/work/fade-plug` — Fade Plug booking platform case study
- `/work/smart-vineyard` — Smart Vineyard IoT case study
- `/work/recursed` — RECurseD Unity case study
- `src/content.ts` — typed source of truth for profile, projects, toolkit, education, and experience
- `src/components` — shared site chrome, diagrams, SEO, and reveal behaviour
- `src/pages` — homepage and project case-study layouts
- `scripts` — production delivery adapter for the hosted Sites build

## Update content or add a project

Edit `src/content.ts`. Keep claims factual and place repeated project details in the typed project record rather than duplicating copy inside components.

The current routes use the `ProjectSlug` type. To add a detailed project:

1. Add its slug to `ProjectSlug`.
2. Add a complete `Project` record to `projects`.
3. Add the public route to `public/sitemap.xml`.
4. Verify the route directly and from previous/next navigation.

Only render repository and live-demo links when a verified destination is available.

## Replace or add project media

Approved project media should be stored in `public/projects/<project-slug>/` using descriptive filenames. Prefer real product screenshots, prototype photographs, dashboard graphs, gameplay captures, or code excerpts.

When adding media:

- supply explicit dimensions or an aspect ratio;
- write meaningful alt text;
- lazy-load below-the-fold images;
- caption video and provide a transcript;
- distinguish diagrams from real interface or gameplay captures;
- do not use stock photography or imply that a placeholder is real evidence.

The current visual panels are labelled system diagrams and representative interface structure. They do not claim to be product screenshots.

## Update the résumé

Replace `public/Arvinder_Singh_Resume.docx` with the approved public version, keeping the filename unchanged. If a PDF becomes available, add it to `public`, change `profile.resume` in `src/content.ts`, and confirm every résumé link downloads successfully.

Do not expose the phone number in public site content unless Arvinder explicitly chooses to publish it.

## Content still requiring confirmation

- Verified repository and live-demo URLs for individual projects.
- Approved Fade Plug interface captures.
- Smart Vineyard prototype photos and ThingsBoard dashboard graphs.
- An approved RECurseD gameplay capture and Blender production media.
- A personal reflection or learning note for each detailed case study.
- An approved PDF version of the résumé, if PDF download is preferred.

These details are intentionally omitted from the public interface until confirmed. No metrics, outcomes, team sizes, timelines, or links have been invented.

## Metadata and deployment

The site includes root Open Graph and X metadata, a 1200×630 social card, Person and WebSite structured data, CreativeWork data for project routes, `robots.txt`, and `sitemap.xml`.

`vercel.json` rewrites extensionless routes to the Vite entry point for direct case-study navigation. The OpenAI Sites metadata and Vite plugin are also retained for portable hosting.
