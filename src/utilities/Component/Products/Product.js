import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ heandelAddToCart, product }) => {
  // const { heandelAddToCart, product } = props;
  const { seller, img, name, price, ratings } = product;
  const sliceName = () => {
    if (name.length >= 20) {
      const remaining = name.slice(0, 20);
      const displayName = remaining + "...";
      return displayName;
    } else {
      return name;
    }
  };
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p title={name} className="product-name">
          {sliceName(name)}
        </p>
        <p>Price: ${price}</p>
        <div className="product-feedback">
          <p>
            <small>Seller: {seller}</small>
          </p>
          <p>
            <small>Ratings: {ratings}</small>
          </p>
        </div>
      </div>
      <button onClick={() => heandelAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
