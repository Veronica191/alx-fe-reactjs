import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";


function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
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
    </div>
  );
}

export default App;
