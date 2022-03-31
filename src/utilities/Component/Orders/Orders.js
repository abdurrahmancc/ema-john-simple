import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useProducts from "../../../hooks/useProducts";
import { removeFromDb } from "../../fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  // console.log(" select cart", cart);
  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className=" product-contents ">
        {/* <div className="products-container"> */}
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            handleRemoveProduct={handleRemoveProduct}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      {/* </div> */}
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to={"/inventory"}>
            <button>Proceed chackOut</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
