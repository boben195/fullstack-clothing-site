import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { product } from "../../assets/assets";

const Cart = () => {
  const { products, currency, updateQuantity, cartItems } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length === 0) return;
    const tempData = Object.entries(cartItems).flatMap(([itemId, sizes]) =>
      Object.entries(sizes)
        .filter(([, quantity]) => quantity > 0)
        .map(([size, quantity]) => ({
          _id: itemId,
          size,
          quantity,
        }))
    );
    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div>
      <div className="cart-content-container">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div key={index} className="cart-item">
              <img
                src={productData.image[0]}
                alt="your product"
                className="product-cart-image"
              />
              <div className="product-details-cart">
                <p className="cart-product-name">{productData.name}</p>
                <div className="product-price-size">
                  <p>
                    {currency}
                    {productData.price}
                  </p>
                  <p className="size">{productData.size}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkout-container"></div>
    </div>
  );
};

export default Cart;
