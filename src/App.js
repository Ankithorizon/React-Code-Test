import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/home";
import Header from "./components/Header/header";
import Counter from './components/Counter/counter';
import RemoteApi from "./components/RemoteApi/remoteapi";
function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/remote-api" element={<RemoteApi />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
