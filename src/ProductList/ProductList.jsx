import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../ThemeContext";

export default function ProductList({
  id,
  title,
  price,
  img_url,
  addCartItem,
}) {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={`demo-product ${dark ? "demo-product-dark" : "demo-product"}`}
    >
      <Link to={`/product/${id}`}>
        <img src={img_url} alt={title} />
        <div className="demo-product-title">
          <span>{title}</span>
          <span>Square</span>
        </div>
      </Link>
      <div className="demo-product-action">
        <span>${price}</span>
        <button onClick={() => addCartItem(id)}>Add to Cart</button>
      </div>
    </div>
  );
}
