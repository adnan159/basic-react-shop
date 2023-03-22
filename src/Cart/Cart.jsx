import React from 'react';



const CartItems = ( {title, price} ) => {
  return (
    <div className="cart-item">
      <button>x</button>
      <div className="info">
        <span>{title}</span>
        <span>${price}</span>
      </div>
    </div>
  )
}


export default function Cart({cartItems}) {

  return (
    <div className='demo-product-cart'>
      <h4>Cart Items</h4>
      <div className="cart-items">
          {cartItems.map(item=> <CartItems {...item} key={item.id}/>)}
      </div>
    </div>
  )
}
