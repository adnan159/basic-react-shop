import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

export default function ProductDetails() {
      const { productId } = useParams();
      const product = (data.find(p => p.id === parseInt(productId)));
      return (
            <div className="product">
                  <div className="product-image">
                        <img src={product.img_url} alt="Product Image"/>
                  </div>
                  <div className="product-info">
                        <h1 className="title">{product.title}</h1>
                        <h2 className="brand">{product.brand}</h2>
                        <p className="price">${product.price}</p>
                        <p className="details">{product.description}</p>
                        <button className="add-to-cart">Add to Cart</button>
                  </div>
            </div>
      );
}
