import React, { useContext } from "react";
import ProductList from "./ProductList";
import ThemeContext from "../ThemeContext";

export default function Products({ products, addCartItem }) {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`demo-product-list ${dark ? 'demo-product-list-dark' : 'demo-product-list'}`}>
      {products.map((product) => (
        <ProductList {...product} key={product.id} addCartItem={addCartItem} />
      ))}
    </div>
  );
}
