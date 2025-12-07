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
