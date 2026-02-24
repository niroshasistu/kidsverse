import React, { useState, useEffect, useRef } from "react";
import "./LearningZone.css";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
const tables = Array.from({ length: 10 }, (_, i) => i + 1);

const bgImages = [bg1, bg2, bg3];

const LearningZone = () => {
  const [stage, setStage] = useState(null);
  const [currentBg, setCurrentBg] = useState(0);
  const contentRef = useRef(null);

  // Background auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleExplore = (value) => {
    setStage(value);

    // Smooth scroll to content section
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
        }}
      >
        <div className="hero-overlay">
          <h1>🎓 Welcome to Learning Zone</h1>
          <p>Choose what you want to learn today!</p>

          <div className="hero-cards">
            <div className="hero-card">
              <h3>Alphabets</h3>
              <button onClick={() => handleExplore(1)}>Explore</button>
            </div>

            <div className="hero-card">
              <h3>Numbers</h3>
              <button onClick={() => handleExplore(2)}>Explore</button>
            </div>

            <div className="hero-card">
              <h3>Tables</h3>
              <button onClick={() => handleExplore(3)}>Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION (WHITE BACKGROUND) */}
      <section className="content-section" ref={contentRef}>
        {stage === 1 && (
          <>
            <h2>Alphabets</h2>
            <div className="learning-grid">
              {alphabets.map((letter) => (
                <div key={letter} className="learning-card">
                  {letter}
                </div>
              ))}
            </div>
          </>
        )}

        {stage === 2 && (
          <>
            <h2>Numbers</h2>
            <div className="learning-grid">
              {numbers.map((num) => (
                <div key={num} className="learning-card">
                  {num}
                </div>
              ))}
            </div>
          </>
        )}

        {stage === 3 && (
          <>
            <h2>Multiplication Tables</h2>
            <div className="tables-grid">
              {tables.map((num) => (
                <div key={num} className="table-card">
                  <h4>Table of {num}</h4>
                  <ul>
                    {Array.from({ length: 10 }, (_, i) => (
                      <li key={i}>
                        {num} × {i + 1} = {num * (i + 1)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default LearningZone;