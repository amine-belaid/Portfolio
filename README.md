# Amine Belaid | Portfolio

Personal portfolio of **Amine Belaid**, software engineering student at ISSAT Sousse (Tunisia), interested in web development, AI and modern technologies.

Built with React. Sky-blue design with a dark mode, a project showcase with image galleries, a profile page based on my CV, and a working contact form.

<!-- Add a screenshot: put it in docs/preview.png and uncomment the line below -->
<!-- ![Portfolio preview](docs/preview.png) -->

## Features

- **Single-page home**: hero, about and skills, projects, and contact with an interactive map.
- **Profile page** (`/profile`): a full page built from my CV (education, projects, skills, languages, activities) with a sticky section index.
- **Projects**:
  - `/projects` lists every project one by one, each with its GitHub link.
  - `/projects/:slug` shows one project in detail, with an image gallery (thumbnails, arrows, full-screen view) and previous/next navigation.
- **Light and dark themes**: sky-blue by default, with a toggle that remembers the visitor's choice.
- **Contact form** powered by [EmailJS](https://www.emailjs.com/), with sending, success and error states.
- **Responsive** from small phones to large desktop screens.
- **Accessible details**: keyboard navigation, focus styles, labelled buttons, reduced-motion support.

## Tech stack

| Area | Tools |
|---|---|
| Framework | React 19, Create React App (`react-scripts` 5) |
| Routing | React Router 7 |
| Styling | SCSS, CSS custom properties (theme tokens) |
| Icons | Font Awesome |
| Map | Leaflet and React Leaflet (OpenStreetMap tiles) |
| Email | EmailJS |

## Getting started

**Requirements:** Node.js 18 or newer and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server (http://localhost:3000)
npm start

# 3. Create the production build in the build/ folder
npm run build
```

## Project structure

```
public/
  Amine-Belaid-CV.pdf        CV used by the "Download CV" buttons
  profile.png                Portrait (transparent or normal PNG)
  images/projects/           Project screenshots
src/
  data/projects.js           All projects (single source of truth)
  index.css                  Theme colors (light and dark) and global styles
  App.js                     Routes
  components/
    Navbar/                  Top bar, logo, theme toggle
    Hero/                    Intro section and social links
    AboutSkills/             About me and skills
    Projects/                Project cards on the home page
    Contact/                 Contact form and map
    ProjectsContact/         Panel that groups projects and contact
    Profile/                 /profile page
    ProjectPages/            /projects, /projects/:slug and the gallery
    Footer/
```

## Customize it

### Photo and CV
- Put your portrait at `public/profile.png`. Until it exists, an "AB" placeholder is shown.
- Put your CV at `public/Amine-Belaid-CV.pdf`.

### Projects
Edit `src/data/projects.js`. Each project looks like this:

```js
{
  slug: 'my-project',            // used in the URL: /projects/my-project
  name: 'My Project',            // short name (cards)
  title: 'My Project: Full Title',
  category: 'Web App',           // tag shown on the card
  summary: 'One line for the card.',
  text: 'A short description.',
  points: ['What I built', 'Another point'],
  tags: ['React', 'Node.js'],
  images: [                      // one or more; the first one is the cover
    '/images/projects/my-project-1.png',
    '/images/projects/my-project-2.png',
  ],
  github: 'https://github.com/your-name/your-repo',
  icon: faLaptopCode,            // shown if an image is missing
}
```

Then add the image files to `public/images/projects/`. With one image there is no gallery, with two or more there is. A new project appears automatically on the home page, on `/projects`, on its own page and on the profile page.

> The image folder is `public/images/projects/` on purpose. A folder named `public/projects/` would clash with the `/projects` page.

### Profile page content
Edit the constants at the top of `src/components/Profile/index.js` (contact details, education, skills, languages, activities).

### Social links
Edit the `SOCIALS` array in `src/components/Hero/index.js`.

### Colors and theme
All colors are variables at the top of `src/index.css`:
- `:root` (and `[data-theme='light']`) is the sky-blue theme.
- `[data-theme='dark']` is the dark theme.

Change `--accent-a`, `--accent-b`, `--accent-c`, `--btn-from` and `--btn-to` to change the main color of the whole site.

### Contact form
The form uses EmailJS. Set your own **service ID**, **template ID** and **public key** in `src/components/Contact/index.js`. The template receives `name`, `email`, `message` and `subject`.

### Map location
Change the `POSITION` coordinates in `src/components/Contact/ContactMap.js`.

## Deployment

Run `npm run build` and deploy the `build/` folder to any static host (Netlify, Vercel, GitHub Pages...).

Because the site has several pages (`/profile`, `/projects`, ...), the host must send every unknown URL to `index.html`:

- **Vercel**: works out of the box for Create React App.
- **Netlify**: add a file `public/_redirects` containing `/* /index.html 200`.
- **GitHub Pages**: needs extra setup (a `homepage` field in `package.json` and a 404 fallback, or a hash-based router).

## Contact

- Email: [aminebelaid2004@gmail.com](mailto:aminebelaid2004@gmail.com)
- GitHub: [aminebelaid2004-lang](https://github.com/amine-belaid)
- LinkedIn: [Amine Belaid](https://www.linkedin.com/in/amine-belaid-196a67310/)
