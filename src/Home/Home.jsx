import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import data from "../data";
import useCart from "../Hooks/useCart";
import Products from "../ProductList/Products";

export default function Home({ keyword }) {
  const [products, setProducts] = useState([...data]);
  const { cartItems, addCartItem, removeCartItem, clearCart } = useCart(
    [],
    products
  );

  useEffect(() => {
    const filterProduct = data.filter((product) => {
      let tempTitle = (product.title || "").toLowerCase();
      if (tempTitle.includes((keyword || "").toLowerCase())) {
        return product;
      } else {
        return "";
      }
    });
    setProducts(filterProduct);
  }, [keyword]);

  return (
    <>
      <Products products={products} addCartItem={addCartItem} />
      <Cart
        cartItems={cartItems}
        removeCartItem={removeCartItem}
        clearCart={clearCart}
      />
    </>
  );
}
