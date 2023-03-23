import React from 'react';



const CartItems = ( {id, title, price, quantity, removeCartItem} ) => {
  return (
    <div className="cart-item">
      <button onClick={() => removeCartItem(id)}>x</button>
      <div className="info">
        <span>{title} x {quantity}</span>
        <span>${price}</span>
      </div>
    </div>
  )
}


export default function Cart({cartItems, removeCartItem}) {
  const totalPrice = cartItems.reduce((sum, current) => sum+current.price, 0);
  return (
    <div className='demo-product-cart'>
      <h4>Cart Items</h4>
      <div className="cart-items">
          {cartItems.map(item=> <CartItems {...item} key={item.id} removeCartItem={removeCartItem}/>)}
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
