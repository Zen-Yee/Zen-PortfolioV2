# Portfolio

My personal portfolio site — a static, single-page site built with React to showcase my projects, skills, and background as I transition into web development.

🔗 **Live site:** [Zen-Portfolio](https://zen-portfolio-v2.vercel.app)

## Tech Stack

- **React** (Vite)
- **CSS** 
- Deployed as a static site via Vercel

## Features

- Responsive design across desktop, tablet, and mobile
- Project showcase section with links to live demos and source code
- About/skills section
- Contact section with links to email, GitHub, and LinkedIn

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build

```bash
npm run build
```

This generates a production-ready static build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/           # Static assets
│   ├── assets/        # Images, icons, fonts
│   └── index.html
|
├── src/
│   ├── components/    # Reusable UI components
│   ├── data/          # 
│   ├── sections/      # Page sections (Hero, About, Projects, Contact)
│   ├── App.jsx
│   └── index.jsx
|
├── vite.config.js
└── package.json
```

## Deployment

This project is deployed as a static site. To deploy your own copy:

1. Run `npm run build` to generate the `dist/` folder.
2. Deploy the contents of `dist/` to your static host of choice (GitHub Pages, Vercel, Netlify, etc.).

## Contact

- **Email:** qhui.yee@gmail.com
- **GitHub:** [Zen](https://github.com/Zen-Yee)
- **LinkedIn:** [Yee Qian Hui](https://www.linkedin.com/in/qian-hui-yee-66a394205/)

---

Built with ⚛️ React by Zen.
