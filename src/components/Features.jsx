// src/components/Features.jsx
import React from "react";

export default function Features() {
  return (
    <section id="features" className="features container">
      <h3>Key Features</h3>
      <ul className="feature-list">
        <li>
          <strong>Smart Search</strong> — find homes by location, pricing, and
          amenities.
        </li>
        <li>
          <strong>Locations Available:</strong> Eldoret, Nairobi, Mombasa,
          Kisumu, Kiambu.
        </li>
        <li>
          <strong>Compare Listings</strong> — side-by-side view of shortlisted
          homes.
        </li>
        <li>
          <strong>Contact Flow</strong> — message landlords or agents directly
          from the system.
        </li>
      </ul>
    </section>
  );
}
