import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="brand">ZimmyChu</div>
        <div className="tabs">
          <a href="#" className="tab">
            Home
          </a>
          <a href="#" className="tab">
            Product
          </a>
          <a href="#" className="tab">
            Pricing
          </a>
          <a href="#" className="tab">
            Content
          </a>
        </div>
        <button className="join-button">Join Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
