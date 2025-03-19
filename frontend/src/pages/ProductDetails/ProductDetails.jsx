import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import "./ProductDetailc.css";
import RelatedProduct from "../../components/RelatedProduct/RelatedProduct";

const ProductDetails = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(
    () => {
      fetchProductData();
    },
    productId,
    products
  );

  return productData ? (
    <div>
      <div className="product-container">
        <div className="product-content">
          <div className="product-images">
            <div className="thumbnail-container">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  className="thumbnail"
                  src={item}
                  key={index}
                  alt="your choise"
                />
              ))}
            </div>
            <div className="main-image-container">
              <img src={image} alt="your choise" className="main-image" />
            </div>
          </div>
          <div className="product-info">
            <h1 className="product-name">{productData.name}</h1>
            <hr className="product-devider" />
            <p className="product-price">
              {currency}
              {productData.price}
            </p>
            <p className="product-description">{productData.description}</p>
            <div className="size-selector">
              <p>Select size</p>
              <div className="size-bottoms">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`size-button ${
                      item === size ? "active-size" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <hr className="product-devider" />
            <div className="product-policy">
              <p>Free Delivery</p>
              <p>Seamless and secure payment</p>
              <p>Several payment option available</p>
            </div>
            <button
              onClick={() => addToCart(productData._id, size)}
              className="add-to-cart-btn"
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="description-sect">
          <div className="tabs">
            <b className="tab active">Description</b>
            <p className="tab">Reviews</p>
          </div>
          <div className="description-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam
              exercitationem similique odio aperiam. Voluptate voluptas qui ex
              libero voluptatibus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vel
              sed perspiciatis facere doloremque dolor.
            </p>
          </div>
        </div>
        <RelatedProduct category={productData.category} />
      </div>
    </div>
  ) : (
    <div>No product matches with the product id</div>
  );
};

export default ProductDetails;
