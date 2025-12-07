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
