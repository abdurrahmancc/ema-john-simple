import { useEffect, useState } from "react";
import { getShoppingId } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  // console.log(" select cartssss", cart);
  useEffect(() => {
    const storeCart = getShoppingId();
    const saveCart = [];
    for (const id in storeCart) {
      const addedProduct = products.find((product) => product.id == id);
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);
  return [cart, setCart];
};

export default useCart;
