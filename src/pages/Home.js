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
      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-container">
          <h2>🌟 About KidsVerse</h2>

          <p className="about-description">
            KidsVerse is a joyful learning platform designed especially for children.
            We combine education, creativity, and fun to help kids learn while playing.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>🎯 Our Mission</h3>
              <p>
                To make learning interactive and exciting through stories,
                brain games, and creative activities.
              </p>
            </div>

            <div className="about-card">
              <h3>🌈 Our Vision</h3>
              <p>
                To build a safe and inspiring digital world where every child
                can explore and grow confidently.
              </p>
            </div>

            <div className="about-card">
              <h3>💡 What Makes Us Special</h3>
              <p>
                Fun learning modules, health tracking, eco awareness,
                and a talent showcase platform for kids.
              </p>
            </div>
          </div>
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
