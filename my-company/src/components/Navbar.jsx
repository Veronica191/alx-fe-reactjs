import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "20px", backgroundColor: "#333", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>About</Link>
      <Link to="/services" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Services</Link>
      <Link to="/contact" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
