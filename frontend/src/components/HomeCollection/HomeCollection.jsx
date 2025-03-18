import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const HomeCollection = () => {
  const { products } = useContext(ShopContext);
  const [homeProduct, setHomeProducts] = useState([]);

  useEffect(() => {
    setHomeProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div>
      <div className="product-container">
        <div className="list-header">
          <h1>Our Collection</h1>
          <hr className="devider" />
        </div>
        <div className="product-grid">
          {homeProduct.length > 0 ? (
            homeProduct.map((product) => (
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

export default HomeCollection;
