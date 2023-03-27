import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

export default function ProductDetails() {
      const { productId } = useParams();
      const product = (data.find(p => p.id === parseInt(productId)));
      return (
            <div class="product">
                  <div class="product-image">
                        <img src={product.img_url} alt="Product Image"/>
                  </div>
                  <div class="product-info">
                        <h1 class="title">{product.title}</h1>
                        <h2 class="brand">{product.brand}</h2>
                        <p class="price">${product.price}</p>
                        <p class="details">{product.description}</p>
                        <button class="add-to-cart">Add to Cart</button>
                  </div>
            </div>
      );
}
