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
