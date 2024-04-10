import React from "react";
import "./Hero.css"; // Assuming you have a CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-section">
        <div className="left-content">
          <p className="welcome-text text-2xl">Welcome</p>
          <h1 className="text-7xl font-bold mb-3">Courses Of</h1>
          <h1 className="text-7xl font-bold  mb-3">Excellent</h1>
          <h1 className="text-7xl font-bold  mb-3">Quality</h1>
          <button className="join-button">Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
