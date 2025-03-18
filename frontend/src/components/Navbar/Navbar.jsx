import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCart, BiUser } from "react-icons/bi";
import { FaCentos } from "react-icons/fa";
import "./Navbar.css";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const { updateSearchTerm } = useContext(ShopContext);

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    navigate(path);
  };

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    updateSearchTerm(searchInput);
  };

  return (
    <div>
      {loading && (
        <div className="loader-container">
          <div className="loader">
            <FaCentos className="loader-icon" />
          </div>
        </div>
      )}
      <nav className="navbar">
        <div className="nav-top">
          <Link to="/">
            <h2>Stylewave</h2>
          </Link>
          <div className="search-bar">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              className="search-input"
              placeholder="Search for products..."
            />
            <button onClick={handleSearch} className="search-btn">
              SEARCH
            </button>
          </div>
          <div className="icons">
            <div className="profile-group">
              <BiUser className="icon" />
              <div className="dropdoun-menu">
                <Link to="/login">
                  <p className="dropdoun-item">Account</p>
                </Link>
                <p className="dropdoun-item">Logout</p>
              </div>
            </div>
            <div
              className="cart-icon"
              onClick={() => handleNavigation("/cart")}
            >
              <BiCart className="icon" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-container">
            <div
              onClick={() => handleNavigation("/category/Men")}
              className="navbar-link"
            >
              Men
            </div>
            <div
              onClick={() => handleNavigation("/category/Women")}
              className="navbar-link"
            >
              Women
            </div>
            <div
              onClick={() => handleNavigation("/category/Kids")}
              className="navbar-link"
            >
              Kids
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
