import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Arabica Coffee Beans",
    price: 20,
    category: "Beans",
    desc: "Smooth, rich, premium quality beans.",
  },
  {
    id: 2,
    name: "Robusta Beans",
    price: 15,
    category: "Beans",
    desc: "Strong flavor with high caffeine content.",
  },
  {
    id: 3,
    name: "French Press",
    price: 35,
    category: "Equipment",
    desc: "Classic brewing tool for rich coffee.",
  },
  {
    id: 4,
    name: "Espresso Machine",
    price: 120,
    category: "Equipment",
    desc: "Barista-level coffee at home.",
  },
  {
    id: 5,
    name: "Coffee Grinder",
    price: 45,
    category: "Accessories",
    desc: "Fresh grind for perfect aroma.",
  },
  {
    id: 6,
    name: "Milk Frother",
    price: 25,
    category: "Accessories",
    desc: "Perfect foam for cappuccino & latte.",
  },
];

function Products() {
  const [products] = useState(initialProducts);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState([]);

  // FILTER
  let filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  // SORT
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // ADD TO CART (UI ONLY)
  const addToCart = (product) => {
    setCart([cart, product]);
    alert(`${product.name} added to cart 🛒`);
  };

  return (
    <div className="content">

      {/* HEADER */}
      <header className="section">
        <h1>🛒 Coffee Shop</h1>
        <p>Explore premium coffee products and brewing tools.</p>
      </header>
      {/* FILTER + SORT */}
      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Beans")}>Beans</button>
        <button onClick={() => setFilter("Equipment")}>Equipment</button>
        <button onClick={() => setFilter("Accessories")}>Accessories</button>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {/* PRODUCT GRID */}
      <div className="card-container product-grid">

        {filteredProducts.map((p) => (
          <div className="card product-card" key={p.id}>

            {/* IMAGE PLACEHOLDER */}
            <div className="product-img">
              ☕
            </div>

            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <h4>${p.price}</h4>

            <button
              className="primary-btn"
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}
export default  Products;