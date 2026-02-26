import React, { useState } from "react";
import "./HealthTracker.css";

const HealthTracker = () => {
  const [water, setWater] = useState(Array(8).fill(false));
  const [yoga, setYoga] = useState([false, false, false, false]);
  const [exercise, setExercise] = useState([false, false, false, false]);

  const toggleWater = (i) => {
    const updated = [...water];
    updated[i] = !updated[i];
    setWater(updated);
  };

  const toggleYoga = (i) => {
    const updated = [...yoga];
    updated[i] = !updated[i];
    setYoga(updated);
  };

  const toggleExercise = (i) => {
    const updated = [...exercise];
    updated[i] = !updated[i];
    setExercise(updated);
  };

  const waterCount = water.filter(Boolean).length;
  const yogaCount = yoga.filter(Boolean).length;
  const exerciseCount = exercise.filter(Boolean).length;

  return (
    <div className="dashboard">

      <h1 className="title">🌟 My Daily Health Mission 🌟</h1>

      {/* 💧 WATER CIRCLE */}
      <div className="water-section">
        <div className="circle">
          <h2>{waterCount}/8</h2>
          <p>Glasses</p>
        </div>

        <div className="water-buttons">
          {water.map((done, i) => (
            <button
              key={i}
              className={done ? "water-btn active" : "water-btn"}
              onClick={() => toggleWater(i)}
            >
              💧
            </button>
          ))}
        </div>
      </div>

      {/* 🧘 YOGA PANEL */}
      <div className="list-section">
        <h2>🧘 Yoga Time</h2>
        {["Tadasana", "Vrikshasana", "Bhujangasana", "Balasana"].map(
          (pose, i) => (
            <div key={i} className="list-item">
              <input
                type="checkbox"
                checked={yoga[i]}
                onChange={() => toggleYoga(i)}
              />
              <span>{pose}</span>
            </div>
          )
        )}
        <div className="small-progress">{yogaCount}/4 Completed</div>
      </div>

      {/* 🏃 EXERCISE PANEL */}
      <div className="list-section green">
        <h2>🏃 Exercise</h2>
        {["Jumping", "Skipping", "Running", "Stretching"].map(
          (item, i) => (
            <div key={i} className="list-item">
              <input
                type="checkbox"
                checked={exercise[i]}
                onChange={() => toggleExercise(i)}
              />
              <span>{item}</span>
            </div>
          )
        )}
        <div className="small-progress">{exerciseCount}/4 Completed</div>
      </div>

      {waterCount === 8 && yogaCount === 4 && exerciseCount === 4 && (
        <div className="victory">
          🎉 YOU COMPLETED TODAY'S MISSION! 🏆
        </div>
      )}
    </div>
  );
};

export default HealthTracker;