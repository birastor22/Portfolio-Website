# Ben Irastorza — Portfolio Website

Personal portfolio website built with HTML, Tailwind CSS, and JavaScript.

**Live site:** https://www.ben-irastorza.dev

---

## Tech Stack

- **HTML/CSS/JS** — no framework, vanilla front-end
- **Tailwind CSS v3** — utility-first CSS, compiled via CLI
- **particles.js** — animated background (loaded via CDN)
- **Typed.js** — hero text typing animation (loaded via CDN)
- **Font Awesome 6** — icons (loaded via CDN)
- **Google Fonts** — Roboto typeface (loaded via CDN)

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

---

## Setup

**1. Clone the repository**

```bash
git clone https://github.com/birastor22/Portfolio-Website.git
cd Portfolio-Website
```

**2. Install dependencies**

```bash
npm install
```

This installs Tailwind CSS (the only dev dependency).

**3. Build the CSS**

Tailwind reads `src/input.css` and outputs compiled CSS to `src/output.css`:

```bash
npx tailwindcss -i src/input.css -o src/output.css
```

**4. Open the site**

Open `index.html` directly in your browser, or use a local server:

```bash
npx serve .
```

Then visit `http://localhost:3000`.

---

## Development

To watch for changes and rebuild CSS automatically while editing:

```bash
npx tailwindcss -i src/input.css -o src/output.css --watch
```

Any time you add or remove Tailwind classes in `index.html` or `index.js`, the output CSS will rebuild instantly.

---

## Project Structure

```
Portfolio-Website/
├── assets/
│   ├── images/          # Profile pic, project screenshots, tech logos
│   └── data/            # Resume PDF
├── src/
│   ├── input.css        # Tailwind entry point (@tailwind directives)
│   └── output.css       # Compiled CSS (auto-generated, do not edit)
├── index.html           # Main page
├── index.js             # particles.js config + Typed.js animation
├── tailwind.config.js   # Tailwind configuration
└── package.json
```

---

## Deployment

The site is deployed via GitHub Pages using a `CNAME` file pointing to `www.ben-irastorza.dev`.

Before deploying, make sure to run a fresh CSS build so `src/output.css` is up to date:

```bash
npx tailwindcss -i src/input.css -o src/output.css
```

Then push to the `main` branch — GitHub Pages serves `index.html` from the root automatically.
