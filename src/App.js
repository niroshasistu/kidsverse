// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";/

// Pages
import Dashboard from "./pages/Dashboard";
import LearningZone from "./pages/LearningZone";
import BrainGames from "./pages/BrainGames";
import StoryWorld from "./pages/StoryWorld";
import HealthTracker from "./pages/HealthTracker";
import CreativityStudio from "./pages/CreativityStudio";
import EcoZone from "./pages/EcoZone";
import TalentShowcase from "./pages/TalentShowcase";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar always visible */}
        <Navbar />

        {/* Page content */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learningzone" element={<LearningZone />} />
            <Route path="/braingames" element={<BrainGames />} />
            <Route path="/storyworld" element={<StoryWorld />} />
            <Route path="/healthtracker" element={<HealthTracker />} />
            <Route path="/creativitystudio" element={<CreativityStudio />} />
            <Route path="/ecozone" element={<EcoZone />} />
            <Route path="/talentshowcase" element={<TalentShowcase />} />
            {/* Optional: Add a 404 NotFound page */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>

        {/* Footer always visible */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;