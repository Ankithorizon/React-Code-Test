import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/home";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />         
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;