import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Case } from "./pages/caseStudy";
import Navbar from "./component/navbar";

export function App() {
  return (
    <Router>
      <div className="w-[100vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movApp" element={<Case />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
