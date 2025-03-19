import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const RelatedProduct = ({ category }) => {
  const { products } = useContext(ShopContext);

  const [relatedProduct, setRelatedProduct] = useState([]);
  const related = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  useEffect(() => {
    setRelatedProduct(related.slice(0, 4));
  }, []);

  return (
    <div>
      <div className="product-container">
        <div className="list-header">
          <h1>Related Products</h1>
          <hr className="devider" />
        </div>
        <div className="product-grid">
          {relatedProduct.length > 0 ? (
            relatedProduct.map((product) => (
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

export default RelatedProduct;
