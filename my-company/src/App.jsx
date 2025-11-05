import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <Router>
      {/* Navigation bar appears on all pages */}
      <Navbar />

      {/* Routes to different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
