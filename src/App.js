import React from "react";
import Home from "./pages/Home";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
