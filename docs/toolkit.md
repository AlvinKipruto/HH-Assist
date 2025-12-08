# Toolkit Document – React + Vite (House Hunting Landing Page)
## 1. Title & Objective
Technology Choice:

React + Vite

Justification:

I selected React for its component-based architecture and ease of building reusable UI sections.
I used Vite as the build tool because it offers extremely fast development startup, instant hot reloads, and is optimized for modern JavaScript workflows.

End Goal:

To build a minimal working landing page for a House Hunting Web App, displaying multiple house locations and adjusting responsively to different screen sizes.

## 2. Quick Summary of the Technology
Definition:

React is a JavaScript library for building interactive user interfaces using a component-based design.
Vite is a fast build tool and development server optimized for modern frontend frameworks like React.

Use Cases:

Building interactive web apps

Single Page Applications (SPAs)

Dashboards, landing pages, and component-driven interfaces

High-performance frontend systems

Real-World Example:

Airbnb Web Interface uses React to power dynamic listings, search components, and interactive UI elements similar to house-hunting features.

## 3. System Requirements

Operating System: Windows 10/11, macOS, or Linux

Minimum RAM: 4GB (8GB recommended)

Node.js: v16+ or v18+

NPM: Installed with Node.js

Code Editor: Visual Studio Code (recommended)

Required Packages/Dependencies:

React

React DOM

Vite

@types/react (optional for TypeScript users)

## 4. Installation & Setup Instructions

Follow these steps to set up the project:

1. Create a new React + Vite project
npm create vite@latest house-hunting-landing-page --template react

2. Enter the project folder
cd house-hunting-landing-page

3. Install dependencies
npm install

4. Start the development server
npm run dev


After running the final command, Vite will give you a local development URL, usually:

http://localhost:5173/

5. Minimal Working Example

Code Block – Simple React Landing Page

// src/App.jsx

export default function App() {
  return (
    <div style={{ background: "#8B4513", minHeight: "100vh", padding: "40px", color: "white" }}>
      <h1>House Hunting Made Easy</h1>
      <p>Find houses across Kenya in locations such as:</p>

      <ul>
        <li>Eldoret</li>
        <li>Nairobi</li>
        <li>Mombasa</li>
        <li>Kisumu</li>
        <li>Kiambu</li>
      </ul>
    </div>
  );
}

Expected Output:

A brown-themed landing page showing a title, description, and list of house locations displayed vertically.

Brief Explanation:

The component returns a div styled as a full-screen section.

Text and elements are included directly.

React automatically updates the UI when changes are made during development.

Vite reloads the page instantly without refreshing the entire app.

6. AI Prompt Journal
- You can check the AI Prompt Journal at ai-prompt-journaal.md
Evaluation / Reflection:

The response was clear and complete.

I only needed minimal edits to match my exact project.

The structured breakdown made documentation easier to maintain.

## 7. Common Issues & Fixes
Issue 1:

Error: npm: command not found
Fix: Install Node.js from https://nodejs.org
 which includes npm.

Issue 2:

Error: Vite fails to start with message:
Error: Port 5173 already in use
Fix:
Run Vite with a different port:

npm run dev -- --port=5174

Issue 3:

Problem: CSS not applying in the React component
Fix:
Ensure the CSS file is imported correctly:

import './App.css';


and restart the dev server.

## 8. References

React Documentation → https://react.dev

Vite Official Docs → https://vitejs.dev

MDN Web Docs → https://developer.mozilla.org
