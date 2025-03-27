import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../../App";

const List = () => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl);
    } catch (error) {}
  };

  return (
    <div>
      <p className="product-title">Product List</p>
      <div className="product-list-container">
        <div className="product-table-title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="action-title">Action</b>
        </div>
      </div>
    </div>
  );
};

export default List;
