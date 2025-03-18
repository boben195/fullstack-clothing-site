import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

import women_wear from "../../assets/women-banner.png";
import men_wear from "../../assets/men-wear.png";
import kid_wear from "../../assets/kid-banner.png";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const { category } = useParams();

  const filteredProduct = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  const bannerImages = {
    Men: men_wear,
    Women: women_wear,
    Kids: kid_wear,
  };
  return (
    <div>
      <div className="banner">
        {bannerImages[category] ? (
          <img src={bannerImages[category]} alt="banner img" />
        ) : (
          <p>No image matches category</p>
        )}
      </div>
      <div className="product-grid">
        {filteredProduct.length > 0 ? (
          filteredProduct.map((product) => (
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
  );
};

export default Collection;
