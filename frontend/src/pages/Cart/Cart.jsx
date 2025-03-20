import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { product } from "../../assets/assets";
import { MdDelete } from "react-icons/md";
import CartTotal from "../../components/CartTotal/CartTotal";
import "./Cart.css";

const Cart = () => {
  const { products, currency, updateQuantity, cartItems } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length === 0) return;
    if (!cartItems || typeof cartItems !== "object") {
      setCartData([]);
      return;
    }
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
              <div className="cart-item-info">
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
              <input
                type="number"
                className="quantity-input"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === 0
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
              />
              <MdDelete
                className="delete-icon"
                onClick={() => updateQuantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>
      <div className="checkout-container">
        <div className="checkout-box">
          <CartTotal />
          <div className="checkout-btn-container">
            <button className="checkout-btn">PROCCED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
