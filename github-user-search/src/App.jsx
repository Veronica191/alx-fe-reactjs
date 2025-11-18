import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  return (
    <div className="app-container" style={{ padding: 20, fontFamily: "system-ui" }}>
      <header style={{ marginBottom: 20 }}>
        <h1>GitHub User Search</h1>
        <nav>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
