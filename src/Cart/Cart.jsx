import React from 'react';



const CartItems = ( {id, title, price, quantity, removeCartItem} ) => {
  return (
    <div className="cart-item">
      <button onClick={() => removeCartItem(id)}>x</button>
      <div className="info">
        <span>{title} x {quantity}</span>
        <span>${price * quantity}</span>
      </div>
    </div>
  )
}


export default function Cart({cartItems, removeCartItem, clearCart}) {
  const totalPrice = cartItems.reduce((sum, current) => sum + (current.price * current.quantity), 0);
  return (
    <div className='demo-product-cart'>
      <h4>Cart Items</h4>
      <div className="cart-items">
          
          {cartItems.length === 0 &&
              <div className="cart-item">
                <div className="info">
                  <span>Cart is empty! Add some item in cart.</span>
                </div>
              </div>
          }

          {cartItems.map(item=> <CartItems {...item} key={item.id} removeCartItem={removeCartItem}/>)}
          
          {cartItems.length !== 0 &&
          <>
            <div className="cart-item">
              <div className="info">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            <div className="cart-item">
              <div className="info">
                <button onClick={clearCart} className='clear-cart'>Cancle</button>
                <button className='product-checkout'>Checkout</button>
              </div>
            </div>
          </>}

      </div>
    </div>
  )
}
