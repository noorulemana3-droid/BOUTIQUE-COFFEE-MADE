import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Employees from "./pages/Employees";

import "./App.css";
import React from 'react'

 function App() {
  return (
    <Router>

      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Boutique Coffee Made Simple
      </footer>

    </Router>
  );
}
export default  App;