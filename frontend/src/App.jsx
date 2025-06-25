/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import LandingPage from "./components/landingPage.jsx";
import Home from "./components/home.jsx";
import UberStylePage from "./components/RideRequest.jsx";
import FareComparison from "./components/FareComparison.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <NavBar onThemeToggle={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/uber-style" element={<UberStylePage />} />
          <Route path="/compare-fares" element={<FareComparison />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
