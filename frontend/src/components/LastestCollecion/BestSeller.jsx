import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]);

  return (
    <div>
      <div className="product-container">
        <div className="list-header">
          <h1>Best Collection</h1>
          <hr className="devider" />
        </div>
        <div className="product-grid">
          {bestSeller.length > 0 ? (
            bestSeller.map((product) => (
              <div className="product-cart" key={product._id}>
                <div className="product-image">
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image[0]} alt="your clothes" />
                  </Link>
                </div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>No product is found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
