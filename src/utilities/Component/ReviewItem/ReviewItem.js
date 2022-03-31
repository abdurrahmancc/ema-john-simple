import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { handleRemoveProduct, product } = props;
  const { id, img, name, price, quantity } = product;
  return (
    <div className="carts-container">
      <div className="">
        <img className="cart-img" src={img} alt="" />
      </div>
      <div className="carts-details-container">
        <div className="cart-details">
          <p title={name} className="cart-title">
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price: <span className="shopping-charge">{"$" + price}</span>
          </p>
          <p>
            Shopping charge: <span className="shopping-charge">$5</span>
          </p>
          <p>Quantity: {quantity}</p>
        </div>
        <div>
          <button onClick={() => handleRemoveProduct(product)} className="delete-btn">
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
