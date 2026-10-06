import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar classy-navbar">
      <div className="container-fluid px-5">
        <Link to="/dashboard" className="classy-logo">
          SHOPÉ
        </Link>

        <div className="classy-menu">
          <Link to="/dashboard" className="classy-link">
            Home
          </Link>

          <Link to="/products" className="classy-link">
            Shop
          </Link>

          <Link to="/about" className="classy-link">
            About
          </Link>

          <Link to="/contact" className="classy-link">
            Contact
          </Link>
        </div>

        <div className="classy-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="classy-actions">
          <Link to="/wishlist" className="classy-icon">
            <FiHeart />
          </Link>

          <Link to="/cart" className="classy-icon">
            <FiShoppingCart />
          </Link>

          <Link to="/" className="classy-login">
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
