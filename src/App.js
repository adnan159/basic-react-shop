import { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import Products from "./ProductList/Products";
import Cart from "./Cart/Cart";
import data from "./data";
import useCart from "./Hooks/useCart"
import ThemeContext from "./ThemeContext";

import "./App.css";

function App() {
  const [products, setProducts] = useState([...data]);
  const [keyword, setKeyword] = useState("");
  const [dark, setDark] = useState(false);
  const {
    cartItems,
    addCartItem,
    removeCartItem,
    clearCart
  } = useCart([], products);

  const toggoleDark = () => {
    setDark(prevState => !prevState);
  }

  useEffect(() => {
    const filterProduct = data.filter((product) => {
      let tempTitle = product.title.toLowerCase();
      if (tempTitle.includes(keyword.toLowerCase())) {
        return product;
      } else {
        return "";
      }
    });
    setProducts(filterProduct);
  }, [keyword]);


  return (
    <ThemeContext.Provider value={{ dark: dark, toggole: toggoleDark }}>
      <div className={`App ${dark ? 'app-dark' : 'app-light'}`}>
        <NavBar setKeyword={setKeyword} />
        <Products products={products} addCartItem={addCartItem} />
        <Cart
          cartItems={cartItems}
          removeCartItem={removeCartItem}
          clearCart={clearCart}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
