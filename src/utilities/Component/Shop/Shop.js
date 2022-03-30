import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { addToDb, getShoppingId } from "../../fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);
  const heandelAddToCart = (selectProduct) => {
    // console.log("product id", selectProduct);
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
  useEffect(() => {
    const storedCart = getShoppingId();
    // console.log("storedCart", storedCart);
    const saveCart = [];
    for (const id in storedCart) {
      // console.log(ids);
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        console.log("quantity", quantity);

        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
        // console.log(addedProduct);
        setCart(saveCart);
      }
    }
  }, [products]);

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
