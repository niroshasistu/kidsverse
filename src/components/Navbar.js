import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState(""); // "" means default

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);

    if (selectedTheme === "boy") {
      document.documentElement.style.setProperty("--primary-color", "#3ee6e6"); // red
      document.documentElement.style.setProperty("--hover-color", "#ff9999");
      document.documentElement.style.setProperty("--text-color", "#fff");
    } else if (selectedTheme === "girl") {
      document.documentElement.style.setProperty("--primary-color", "#ff66b2"); // pink
      document.documentElement.style.setProperty("--hover-color", "#ff99cc");
      document.documentElement.style.setProperty("--text-color", "#fff");
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">KidsVerse</Link>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/learningzone">Learning</Link></li>
        <li><Link to="/braingames">Brain Games</Link></li>
        <li><Link to="/storyworld">Stories</Link></li>
        <li><Link to="/healthtracker">Health</Link></li>
        <li><Link to="/creativitystudio">Creativity</Link></li>
        <li><Link to="/ecozone">Eco Zone</Link></li>
        <li><Link to="/talentshowcase">Talent</Link></li>
      </ul>

      {/* Theme Switch Buttons */}
      <div className="theme-switch">
        <button onClick={() => handleThemeChange("boy")}>👦 </button>
        <button onClick={() => handleThemeChange("girl")}>👧 </button>
      </div>

      {/* Auth Links */}
      <div className="navbar-auth">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;