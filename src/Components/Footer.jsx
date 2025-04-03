import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2025 shopkart . All Rights Reserved.</p>
      <p>
        <Link to="/contact" className="text-white me-3">Contact</Link>
        <Link to="/about" className="text-white">About</Link>
      </p>
    </footer>
  );
};

export default Footer;
