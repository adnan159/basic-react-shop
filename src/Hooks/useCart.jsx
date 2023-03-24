import { useState } from "react";
import data from "../data";

const useCart = (init) => {
  const [cartItems, setCartItems] = useState(init);

  const addCartItem = (id) => {
    const item = data.find((product) => product.id === id);
    setCartItems((items) => {
      const itemIndex = items.findIndex((currentItem) => currentItem.id === id);
      if (itemIndex === -1) {
        return [
          ...items,
          {
            ...item,
            quantity: 1,
          },
        ];
      } else {
        return items.map((currentItem) =>
          currentItem.id === id
            ? {
                ...item,
                quantity: parseInt(currentItem.quantity) + 1,
              }
            : currentItem
        );
      }
    });
  };

  const removeCartItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    const response = window.confirm("Are you sure to clear the cart!");
    if (response === true) {
      setCartItems([]);
    }
  };

  return {
    cartItems,
    addCartItem,
    removeCartItem,
    clearCart,
  };
};

export default useCart;
