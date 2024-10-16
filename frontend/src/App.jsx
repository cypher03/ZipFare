/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import LandingPage from "./components/landingPage.jsx";
import SignIn from "./components/login.jsx";
import SignUp from "./components/signup.jsx";
import Home from "./components/home.jsx";
import UberStylePage from "./components/RideRequest.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/uber-style" element={<UberStylePage />} />
      </Routes>
    </Router>
  );
}

export default App;
