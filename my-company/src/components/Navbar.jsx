import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px"
      }}
    >
      <Link
        to="/"
        style={{
          margin: "0 15px",
          color: "black",
          textDecoration: "none"
        }}
      >
        Home
      </Link>

      <Link
        to="/about"
        style={{
          margin: "0 15px",
          color: "black",
          textDecoration: "none"
        }}
      >
        About
      </Link>

      <Link
        to="/services"
        style={{
          margin: "0 15px",
          color: "black",
          textDecoration: "none"
        }}
      >
        Services
      </Link>

      <Link
        to="/contact"
        style={{
          margin: "0 15px",
          color: "black",
          textDecoration: "none"
        }}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
