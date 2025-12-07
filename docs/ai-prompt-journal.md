I am proficient in Java and Python and I want to build a landing page for my project using React, a new language for me. 
1. Help me briefly understand the difference between Python and React.
2. Where is React mostly used
Write the output in bullet points

1. Difference between Python and React (Briefly)
Python
A general-purpose programming language used for backend development, scripting, data science, AI, automation, etc.
Runs on the server side (backend).
Used to build APIs, servers, data processing systems, machine learning models, etc.
Not used directly to build user interfaces for web browsers.

React
A JavaScript library for building interactive user interfaces on the frontend.
Runs in the browser, controlling what users see and interact with.
Used to build UI components, dynamic pages, and smooth user experiences.
Not a full programming language — it is a UI tool built on JavaScript.

I am a student learning how to use React for the first time. Assist me in setting up a landing page for House Hunt Assist, my project. Give me a step by step guide on how to set everything up and run it eventually. Also I am using VS Code as my IDE for the project.
Give the output in number format.
1. Install Node.js (and npm)
Download and install Node.js (LTS). Verify in a terminal:
node -v
npm -v
(Goal: Node >= 16.)
2. Open VS Code
Start VS Code and open the folder where you want the project.
3. Create the React project with Vite
In VS Code terminal run:
npm create vite@latest house-hunt-assist -- --template react
Or, if you prefer TypeScript:
npm create vite@latest house-hunt-assist -- --template react-ts
4. Enter the project and install dependencies
cd house-hunt-assist
npm install
5. Open the project in VS Code (if not already):
code .
6. Familiarize with the default structure
Important files/folders:
index.html — app entry.
src/main.jsx — React entry.
src/App.jsx — root component.
src/assets/ — images.
package.json — scripts (dev, build, preview).
7. Start the dev server
npm run dev
Open the shown URL (usually http://localhost:5173) to see the app.
8. Replace App with a simple Landing Page skeleton
Replace src/App.jsx with this minimal landing layout:
// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./styles.css";
export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container">
          <h1 className="logo">House Hunt Assist</h1>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
9. Add a Hero component
Create src/components/Hero.jsx:
// src/components/Hero.jsx
import React from "react";
export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-left">
        <h2>Find your next home — faster.</h2>
        <p>
          House Hunt Assist helps you discover, compare and contact landlords
          with intelligent filters and a smooth interface.
        </p>
        <div className="cta-group">
          <a className="btn primary" href="#how">Get Started</a>
          <a className="btn outline" href="#features">Learn More</a>
        </div>
      </div>
      <div className="hero-right">
        <img src="/src/assets/house-illustration.png" alt="house" />
      </div>
    </section>
  );
}

10. Add Features and Footer components
src/components/Features.jsx (simple example):

// src/components/Features.jsx
import React from "react";

export default function Features() {
  return (
    <section id="features" className="features container">
      <h3>Key features</h3>
      <ul className="feature-list">
        <li><strong>Smart search</strong> — find homes by location, price or amenities.</li>
        <li><strong>Compare listings</strong> — side-by-side view of shortlisted homes.</li>
        <li><strong>Contact flow</strong> — message agents/landlords from the app.</li>
      </ul>
    </section>
  );
}

src/components/Footer.jsx:

// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} House Hunt Assist — Built with React</p>
      </div>
    </footer>
  );
}

11. Create a basic stylesheet
src/styles.css:

/* src/styles.css */
:root {
  --max-w: 1100px;
  --accent: #2563eb;
}

* { box-sizing: border-box; }
body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; margin: 0; color: #111; }

.container { max-width: var(--max-w); margin: 0 auto; padding: 0 1rem; }

.site-header { background: white; border-bottom: 1px solid #eee; }
.site-header .container { display:flex; align-items:center; justify-content:space-between; padding:1rem 0; }
.logo { font-weight:700; letter-spacing: -0.02em; }

.nav a { margin-left: 1rem; text-decoration:none; color:#333; }

.hero { display:flex; gap:2rem; align-items:center; padding:4rem 0; }
.hero-left { flex:1; }
.hero-right { flex:1; display:flex; justify-content:center; }
.hero-right img { max-width:100%; height:auto; border-radius:12px; }

.btn { display:inline-block; padding:0.6rem 1rem; border-radius:8px; text-decoration:none; }
.btn.primary { background:var(--accent); color:white; }
.btn.outline { border:1px solid #ddd; color:#333; }

.features { padding:3rem 0; }
.feature-list { list-style:none; padding:0; display:grid; gap:1rem; }
.site-footer { border-top:1px solid #eee; padding:1.5rem 0; text-align:center; font-size:0.9rem; }

12. Add an illustration or image
Put an image into src/assets/house-illustration.png (or use a free placeholder). You can also use <img src="https://via.placeholder.com/600x400" /> for quick testing.

13. Live reload while you edit
The Vite dev server reloads automatically. Edit components and CSS — changes show instantly.

14. Optional: Install useful dependencies
If you want routing (multi-page/app sections):

npm install react-router-dom
For HTTP requests to your Python/Java backend:
npm install axios

15. Optional: Add linting & formatting
Install ESLint & Prettier and recommended configs (helps keep code clean). Example quick install:

npm install -D eslint prettier eslint-plugin-react
npx eslint --init


Use VS Code extensions: ESLint, Prettier - Code formatter, vscode-icons (optional).

16. Run production build & preview

Build:

npm run build


Preview the production build locally:

npm run preview


17. Initialize Git and make first commit

git init
git add .
git commit -m "Initial House Hunt Assist landing page (Vite + React)"


Create a GitHub repo and push (follow GitHub instructions).

18. Deploy (quick options)

Common simple hosts: Vercel or Netlify. Steps (very quick outline):

Connect your GitHub repo.

Vercel/Netlify auto-detects the Vite app and builds with npm run build.

Set build command: npm run build and publish directory: dist.

Done — your landing page will be live.

19. Connect to your backend later (Python/Java)

For an API endpoint, store base URL in an env file:

Create .env with VITE_API_BASE=https://api.example.com

Access in React: import.meta.env.VITE_API_BASE

Use axios or fetch to call endpoints from components (keep CORS in mind on backend).

20. Developer tools & debugging

Install browser extension: React Developer Tools (Chrome/Firefox) for inspecting component tree.

Use VS Code debugger (launch configuration for Chrome) for breakpoints.

21. Accessibility & responsiveness

Use semantic HTML (<header>, <main>, <section>, <nav>) — we used that.

Test on different screen sizes using browser DevTools mobile emulation.

Add responsive CSS (e.g., stack .hero columns on small screens using media queries).

22. Next improvements you might want

Add Tailwind CSS for rapid styling.

Add form for "Contact / Request a Tour" and wire it to your backend.

Add analytics, SEO meta tags in index.html, and an accessible navigation menu.

23. Troubleshooting common issues

Module not found → check import paths (Vite uses relative /src/... or ./...).

Styling not applied → ensure import "./styles.css"; exists in App.jsx or main.jsx.

Dev server not starting → confirm Node & npm versions and npm install completed.


Need the complete code as a zip, a Tailwind setup, or TypeScript conversions? Tell me which and I’ll generate files or code snippets right away.
Make the following additions on the landing page;
1. make the content flexible according to screen size so that it can fit the whole screen at all times
2. add features like location for the houses for example; Eldoret, Nairobi, Mombasa, Kisumu, Kiambu
3. make the primary color of the page brown
send the updated codes for the files affected

1. Updated src/styles.css
Changes made:
Added media queries for smaller screens
Changed primary color to brown
Improved layout flexibility
Ensured hero section stacks on small devices
Added smooth responsive spacings

2. Updated src/components/Features.jsx
Changes made:
Added location features as requested
Cleaned layout formatting

3. Updated src/App.jsx
Changes made:
No major logic change, just ensured responsive classnames & color integration
This file is minimally updated to ensure compatibility with new styles
