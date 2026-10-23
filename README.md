# SunSync Hardware — website

Live: **https://sunsynchardware.com**

Responsive marketing site for SunSync Hardware, a solar equipment supplier. Built as a freelance project: design, logo and banners, front end, and the quote-request flow.

## What it does

- Product catalogue with category and detail pages
- Multi-step solar quote form: property details, roof, usage, budget, timeline
- Built-in cost estimator that gives the visitor an estimated system cost and monthly savings before they submit
- Quote requests are emailed to the sales team via EmailJS (no backend needed)
- Fully responsive, Tailwind-styled

## Stack

React 18 · Vite 5 · TailwindCSS 3 · React Router 7 · EmailJS

## Run locally

```bash
git clone https://github.com/mirzaramis/sunsync
cd sunsync
npm install
cp .env.example .env     # then fill in your EmailJS IDs
npm run dev
```

`npm run build` produces the production bundle in `dist/`.

## Configuration

The quote form needs three EmailJS values, read from Vite environment variables:

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Copy `.env.example` to `.env` and fill them in. `.env` is git-ignored.

## Project structure

```
src/
├── components/   Layout, ScrollToTop
├── pages/        Home, Products, ProductDetail, Services, About, Contact, Quote
├── App.jsx       routes
└── main.jsx
public/images/    product and banner images
```

## Author

Mirza Ramis Baig — https://github.com/mirzaramis
