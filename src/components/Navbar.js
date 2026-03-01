import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);  // ✅ new state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/">KidsVerse</Link>
      </div>

      {/* ✅ Hamburger Icon */}
      <div 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* ✅ Add active class when open */}
     <ul
  className={`navbar-links ${menuOpen ? "active" : ""}`}
>
  <li>
    <Link to="/" onClick={() => setMenuOpen(false)}>
      Home
    </Link>
  </li>

  <li>
    <Link to="/learningzone" onClick={() => setMenuOpen(false)}>
      Learning Zone
    </Link>
  </li>

  <li>
    <Link to="/braingames" onClick={() => setMenuOpen(false)}>
      Brain Games
    </Link>
  </li>

  <li>
    <Link to="/storyworld" onClick={() => setMenuOpen(false)}>
      Story World
    </Link>
  </li>

  <li>
    <Link to="/creativitystudio" onClick={() => setMenuOpen(false)}>
      Creativity Studio
    </Link>
  </li>
</ul>
<div className="nav-right">
  <a href="/login" className="login-btn">Login</a>
  <a href="/signup" className="signup-btn">Sign Up</a>
</div>
    </div>
  );
};

export default Navbar;
