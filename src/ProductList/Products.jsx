import React from 'react';

const Product = ({ id, title, brand, price, img_url, addCartItem }) => {
  return(
    <div className="demo-product">
      <img src={img_url} alt={title}/>
      <div className="demo-product-title">
        <span>{title}</span>
        <span>Square</span>
      </div>
      <div className="demo-product-action">
        <span>${price}</span>
        <button onClick={()=>addCartItem(id)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default function Products( {products, addCartItem} ) {  
  return (
    <div className='demo-product-list'>
      {products.map(product=>(
        <Product {...product} key={product.id} addCartItem={addCartItem}/>
      ))}
    </div>
  )
}
