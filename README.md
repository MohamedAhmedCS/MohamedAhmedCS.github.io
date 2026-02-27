# Mohamed Ahmed Portfolio (Angular 14)

This repository now hosts an Angular 14 single-page portfolio with a LinkedIn-inspired visual system. Content covers About, Skills, Experience, Projects, Leadership, Education, Blog links, and Contact.

## Tech
- Angular 14
- TypeScript
- SCSS

## Getting started
1) Install Node 16.x (matches Angular 14 tooling expectations).
2) Install dependencies:
	```bash
	npm install
	```
3) Run the dev server:
	```bash
	npm start
	```
	The app will serve on http://localhost:4200.

## Build
```bash
npm run build
```
Build output goes to `dist/portfolio/`.

## Structure
- `src/app/data.ts` – content for hero, skills, experience, projects, leadership, blogs, contact.
- `src/app/app.component.*` – layout and bindings.
- `src/styles.scss` – global LinkedIn-inspired theming.

## Notes
- Primary CTA points to LinkedIn: https://www.linkedin.com/in/mohamed-ahmed2/
- Resume button expects `public/resume.pdf` (add your file or adjust the link).