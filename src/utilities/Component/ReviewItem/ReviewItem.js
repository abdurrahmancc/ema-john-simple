import React from "react";

const ReviewItem = (props) => {
  const { id, img, name, price, quantity } = props.product;
  return (
    <div>
      <h1>this is our ReviewItem {name}</h1>
    </div>
  );
};

export default ReviewItem;
