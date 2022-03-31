import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useProducts from "../../../hooks/useProducts";
import { addToDb, getShoppingId } from "../../fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  const heandelAddToCart = (selectProduct) => {
    console.log(" select cart", cart);
    let newCart = [];
    const exises = cart.find((product) => product.id === selectProduct.id);
    console.log("pro", exises);
    if (!exises) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product.id !== exises);
      exises.quantity = exises.quantity + 1;
      newCart = [...rest, exises];
    }

    setCart(newCart);
    addToDb(selectProduct.id);
    // console.log(newCart);
  };
  /* useEffect(() => {
    const storedCart = getShoppingId();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]); */

  return (
    <div className="shop-container">
      <div className="product-content">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              heandelAddToCart={heandelAddToCart}
              product={product}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          {/* <Link to="/orders"> */}
          <button onClick={() => navigate("/orders")}>Review Orders</button>
          {/* <button onClick={() => navigate("/orders/" + cart[0].id)}>Review Orders</button> */}
          {/* </Link> */}
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
