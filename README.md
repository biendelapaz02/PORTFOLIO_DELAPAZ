# Bien Jeric Dela Paz — Portfolio

Personal portfolio of **Bien Jeric Dela Paz**, a web designer and developer studying Computer Science at PUP Manila.

**Live site:** https://portfolio-delapaz.vercel.app

## What's on it

**Main page (`/`)**

| # | Section | Contents |
|---|---|---|
| — | Hero | Name, role, **View my work** and **Download CV** buttons |
| 01 | About | Short bio and portrait |
| 02 | Experience | Web Designer Intern at NSJ Technologies Inc. (New San Jose Builders, Inc.), with the Figma redesign |
| 03 | Projects | Camarines Norte Tourism Portal, Sentinet, Chef MAI, Cash Catalyst, LumenID, CarPayLater, plus four smaller projects |
| 04 | Creative | Film strip preview of the photo, video and modeling work |
| 05 | Skills | Skills list and certifications |
| 06 | Education | Degree and organizations |
| 07 | Contact | Email, phone, GitHub, LinkedIn and Credly |

**Creative page (`/creative`)**: *Behind & In Front of the Camera*

- **Photography**: the Teknolohista ng Bayan merch campaign for ASCII, PUP Manila
- **Video & Film**: five YouTube videos, loaded only when played
- **Modeling**: SIPAT Merchandise by UP GEOP

Light and dark mode are available on both pages.

## Built with

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 4
- Playwright for end-to-end tests
- Hosted on Vercel

## Running it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Tests

The Playwright tests cover both pages on desktop (1440×900) and mobile (Pixel 7). They check:
- navigation and the CV download
- link previews
- the photo viewer and the video players
- dark mode
- that nothing sticks out sideways on either page

They use the Chrome installed on your computer.

```bash
npm test              # builds the site and tests it locally
npm run test:live     # tests the deployed site on Vercel
```

## Project layout

```
public/                  Files served as-is: CV (Dela-Paz-Resume.pdf), favicon, link-preview image
src/main.tsx             Picks the page: /creative or the main page
src/app/App.tsx          Main page
src/app/Creative.tsx     Creative page
src/app/shared.tsx       Photo, video and modeling data, photo viewer, dark-mode styles
src/assets/              Project screenshots and portrait (WebP)
src/assets/photography/  Photography originals; web/ holds the WebP versions the site loads
src/assets/modeling/     Modeling originals; web/ holds the WebP versions the site loads
tests/                   Playwright tests
```

## Updating content

- **CV:** replace `public/Dela-Paz-Resume.pdf` and keep the same file name.
- **Projects, experience and skills:** edit the `PROJECTS`, `EXPERIENCE` and `SKILLS` lists at the top of `src/app/App.tsx`.
- **Photos and videos:** edit `PHOTOGRAPHY`, `LOOKBOOK` and `VIDEOS` in `src/app/shared.tsx`. New photos need a WebP version in the matching `web/` folder.

## Deployment

Every push to `main` deploys automatically on Vercel. Vercel installs with pnpm, so `pnpm-lock.yaml` must stay in sync when dependencies change.

`vercel.json` also sets security headers. The Content-Security-Policy only allows images, fonts and embeds from the sites the page uses today (Google Fonts, YouTube). If you add an image, video or script from a new site, add that site to the policy, or the browser will block it.
