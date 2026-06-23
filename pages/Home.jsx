import React from "react"; 
import { useNavigate } from "react-router-dom";
 
 function Home() {
  const navigate = useNavigate();

  return (
    <div className="content">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>☕ Boutique Coffee Made Simple</h1>
        <p>
          Discover premium coffee experiences crafted for simplicity, quality,
          and everyday enjoyment.
        </p>

        <button className="primary-btn" onClick={() => navigate("/products")}>
          Shop Now
        </button>
      </section>

      {/* INTRO SECTION */}
      <section className="section">
        <h2>About Our Brand</h2>
        <p>
          We are a modern boutique coffee platform focused on making premium
          coffee accessible for everyone...
        </p>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section">
        <h2>Featured Products</h2>

        <div className="card-container">

          <div className="card">
            <h3>☕ Arabica Beans</h3>
            <p>Premium quality beans with smooth rich flavor.</p>
            <button onClick={() => navigate("/products")} className="primary-btn">
              View
            </button>
          </div>

          <div className="card">
            <h3>⚙️ Coffee Grinder</h3>
            <p>Perfect grind for perfect coffee every morning.</p>
            <button onClick={() => navigate("/products")} className="primary-btn">
              View
            </button>
          </div>

          <div className="card">
            <h3>☕ Espresso Kit</h3>
            <p>Everything you need for a café-style espresso.</p>
            <button onClick={() => navigate("/products")} className="primary-btn">
              View
            </button>
          </div>

        </div>
      </section>

      {/* NAVIGATION SECTION */}
      <section className="section">
        <h2>Explore More</h2>

        <div className="card-container">

          <div className="card">
            <h3>About Us</h3>
            <button onClick={() => navigate("/about")} className="primary-btn">
              Go
            </button>
          </div>

          <div className="card">
            <h3>Shop</h3>
            <button onClick={() => navigate("/products")} className="primary-btn">
              Go
            </button>
          </div>

          <div className="card">
            <h3>Contact</h3>
            <button onClick={() => navigate("/contact")} className="primary-btn">
              Go
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
export default  Home;