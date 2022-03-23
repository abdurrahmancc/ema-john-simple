import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart);
  let total = 0;
  let sopping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * quantity;
    sopping += product.shipping;
  }
  const tax = total * 0.1;
  const sum = total + sopping + tax;
  return (
    <div className="cart">
      <h1>Order summary</h1>
      <h4>Select cart: {quantity}</h4>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${sopping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: ${sum}</h5>
    </div>
  );
};

export default Cart;
