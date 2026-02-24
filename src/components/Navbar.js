import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">KidsVerse</Link>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/learningzone">Learning</Link></li>
        <li><Link to="/braingames">Brain Games</Link></li>
        <li><Link to="/storyworld">Stories</Link></li>
        <li><Link to="/healthtracker">Health</Link></li>
        <li><Link to="/creativitystudio">Creativity</Link></li>
        <li><Link to="/ecozone">Eco Zone</Link></li>
        <li><Link to="/talentshowcase">Talent</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;