# 🌐 NovixWeb — Persian SCSS Landing Page

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Live Demo](https://img.shields.io/badge/🔴%20Live%20Demo-Visit%20Site-0d6efd?style=for-the-badge)](https://novixweb.github.io/sass-landing-page/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Source%20Code-0d6efd?style=for-the-badge&logo=github)](https://github.com/novixweb/sass-landing-page)

> A fully responsive **Persian (RTL) landing page** crafted to demonstrate the power and scalability of **SCSS architecture** — featuring dark mode, animated navigation, SVG illustrations, and support for Persian fonts that include Persian numerals.

</div>

## 🌐 Live Demo

**[View Live Site](https://novixweb.github.io/sass-landing-page/)**

## 💻 GitHub Repository

**[GitHub Repository](https://github.com/novixweb/sass-landing-page)**

## 📖 About The Project

This project is a **Persian RTL landing page** built with a clean, modular SCSS architecture. The primary goal is to showcase real-world **Sass/SCSS skills** — including variables, mixins, nesting, partials, and `@use`/`@forward` — while delivering a polished, production-ready UI with modern CSS features like Flexbox, Grid, and smooth scroll behavior.

The site is fully deployed via **GitHub Pages** and supports both light and dark themes out of the box.

## ✨ Features

| Feature                      | Description                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| 🎨 **Dark Mode**             | Toggle between light and dark themes with smooth CSS transitions                       |
| 📱 **Fully Responsive**      | Mobile-first design using Flexbox & CSS Grid                                           |
| 🍔 **Mobile Hamburger Menu** | Navbar collapses into a button on mobile; slides down on click                         |
| 🔼 **Scroll-to-Top Button**  | Appears on scroll, smoothly returns user to the top                                    |
| 🖼️ **SVG Illustrations**     | Lightweight, crisp vector images for all sections                                      |
| 🔠 **Bootstrap Icons**       | Icon library integrated via local CSS (no CDN dependency)                              |
| 🅰️ **Vazir Font**            | Full Persian typeface loaded locally for offline support                               |
| 🔢 **Persian Numerals**      | Numbers rendered in Persian (Farsi) using the Vazir font                               |
| 🏗️ **Modular SCSS**          | Architecture split into `base`, `components`, `layout`, `config`, and `theme` partials |

## 📄 Page Sections

The landing page is structured with the following sections:

1. **🏠 Home** — Hero section with a headline, CTA button, and SVG illustration
2. **👤 About Us** — Introduction to the brand with a side illustration
3. **🛡️ Support** — Support offering with visual emphasis
4. **⚙️ Services** — Three-card grid showcasing the main services
5. **📱 Apps** — Mobile app download section (App Store & Google Play)
6. **📞 Contact** — Contact info including phone, email, and address
7. **🔗 Footer** — Multi-column footer with links and social icons

## 🛠️ Technologies Used

- **HTML5** — Semantic, accessible markup with RTL `dir="rtl"` support
- **CSS3** — Compiled output from SCSS with custom properties
- **SCSS (Sass)** — Modular architecture with partials, variables, mixins, and nesting
- **JavaScript (Vanilla)** — Dark mode toggle, mobile menu, scroll-up button
- **Bootstrap Icons** — Icon set loaded locally via CSS
- **Vazir Font** — Persian typeface hosted locally in `/fonts`
- **SVG** — Vector illustrations for all major sections
- **npm + Sass CLI** — Build tooling for compiling SCSS to CSS

## 📁 Project Structure

```
sass-landing-page/
│
├── css/
│   ├── bootstrap-icons.css
│   ├── styles.css
│   └── styles.css.map
│
├── fonts/
│   ├── bootstrap/
│   └── vazir/
│
├── images/
│
├── js/
│   └── app.js
│
├── scss/
│   ├── base/
│   ├── components/
│   ├── config/
│   ├── layout/
│   ├── theme/
│   └── styles.scss
│
├── index.html
├── package.json
└── package-lock.json
```

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**

---

```bash
git clone https://github.com/novixweb/sass-landing-page.git
cd sass-landing-page
```

2. **Install dependencies**

---

```bash
npm install
```

3. **Compile SCSS to CSS**

---

```bash
npm run sass
```

> This runs the Sass compiler and watches for changes, outputting to `/css/styles.css`.

4. **Open in browser**

---

Simply open `index.html` in your browser, or use a live server extension (e.g., VS Code Live Server).
