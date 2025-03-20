import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./component/navbar";
import { Home } from "./pages/home";
import { Case } from "./pages/caseStudy";
import Artikel from "./pages/artikel/Artikel";
import HTML from "./pages/artikel/HTML";
import Javascript from "./pages/artikel/Javascript";
import CSS from "./pages/artikel/CSS";

export function App() {
  return (
    <Router>
      <div className="w-[100vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movApp" element={<Case />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel/html" element={<HTML />} />
          <Route path="/artikel/javascript" element={<Javascript />} />
          <Route path="/artikel/css" element={<CSS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
