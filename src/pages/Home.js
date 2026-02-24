import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const features = [
  { icon: "🔤", title: "Learning Zone", path: "/learningzone" },
  { icon: "🧠", title: "Brain Games", path: "/braingames" },
  { icon: "📚", title: "Story World", path: "/storyworld" },
  { icon: "💪", title: "Health Tracker", path: "/healthtracker" },
  { icon: "🎨", title: "Creativity Studio", path: "/creativitystudio" },
  { icon: "🌍", title: "Eco Zone", path: "/ecozone" },
  { icon: "🏆", title: "Talent Showcase", path: "/talentshowcase" }
];

const Home = () => {
  return (
    
    <div className="home-wrapper">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to KidsVerse 🌈</h1>
          <p>Learn • Play • Grow</p>
          <a href="#features" className="explore-btn">Explore</a>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section id="features" className="features-section">
        <h2>Explore Our World ✨</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <Link to={feature.path} key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;