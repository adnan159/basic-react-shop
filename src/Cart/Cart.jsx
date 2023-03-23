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
  const totalPrice = cartItems.reduce((sum, current) => sum+current.price, 0);
  return (
    <div className='demo-product-cart'>
      <h4>Cart Items</h4>
      <div className="cart-items">
          {cartItems.map(item=> <CartItems {...item} key={item.id}/>)}
          <div className="cart-item">
            <div className="info">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
      </div>
    </div>
  )
}
