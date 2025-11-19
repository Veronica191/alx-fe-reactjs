import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  return (
    <div className="app-container p-5 font-sans">
      <header className="mb-5">
        <h1 className="text-3xl font-bold mb-2">GitHub User Search</h1>
        <nav>
          <Link to="/" className="mr-4 text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-blue-600 hover:underline">
            About
          </Link>
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
