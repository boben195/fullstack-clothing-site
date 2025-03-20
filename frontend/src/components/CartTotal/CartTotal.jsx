import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartTotal = () => {
  const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);
  return (
    <div>
      <div className="cart-total-container">
        <div className="cart-title">
          <h2>CART TOTAL</h2>
        </div>
        <div className="cart-total-details">
          <div className="cart-row">
            <p>Subtotal</p>
            <p>
              {currency}
              {getCartAmount()}
            </p>
            <p></p>
          </div>
          <hr className="cart-devider" />
          <div className="cart-row">
            <p>Shipping Fee</p>
            <p>
              {currency}
              {delivery_fee}
            </p>
          </div>
          <div className="cart-row cart-total">
            <b>Total</b>
            <b>
              {currency}
              {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
