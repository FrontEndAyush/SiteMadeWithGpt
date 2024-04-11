import React, { useState } from "react";
import "./Navbar.css";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
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
        <div className="hamburger" onClick={toggleMenu}>
          <MdOutlineMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
