# Business Website

A simple, responsive static website for a business. Plain HTML, CSS and JavaScript, so no build step is needed.

## Structure

- `index.html`: page content (hero, services, about, testimonials, contact)
- `css/styles.css`: styles (edit the colors in `:root`)
- `js/main.js`: mobile menu, footer year, contact form handler

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Customize

Replace the placeholder text (business name, services, contact details) in `index.html`.
The contact form is a placeholder; connect it to a form service to receive messages.

## Deploy

Works on GitHub Pages: Settings → Pages → deploy from the `main` branch, root folder.
