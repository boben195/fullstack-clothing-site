import React from "react";
import { FaCentos } from "react-icons/fa";
import { MdAddShoppingCart, MdFormatListBulletedAdd } from "react-icons/md";
import { IoIosLogOut, IoMdAddCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = ({ setToken }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <FaCentos className="side-logo" />
        <h2>Stylewave</h2>
      </div>
      <div className="sidebar-links">
        <NavLink className="sidebar-link" to="/add">
          <IoMdAddCircleOutline className="sidebar-icon" />
          <p className="sidebat-text">Add Product</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/list">
          <MdFormatListBulletedAdd className="sidebar-icon" />
          <p className="sidebat-text">List Product</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/orders">
          <MdAddShoppingCart className="sidebar-icon" />
          <p className="sidebat-text">Orderrs</p>
        </NavLink>
        <button onClick={() => setToken("")} className="sidebar-link">
          <IoIosLogOut className="sidebar-icon" />
          <p className="sidebat-text">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
