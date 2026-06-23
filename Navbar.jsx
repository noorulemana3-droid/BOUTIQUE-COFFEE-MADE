
import { Link } from "react-router-dom";
import React from "react";

 function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">☕ BrewNest</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/employees">Team</Link>
      </div>

    </nav>
  );
}
export default  Navbar;