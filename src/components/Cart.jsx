import React from 'react'
import './Cart.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import { useCart } from './Cartcontext';  
const Cart = () => {
const { cartItems, removeFromCart, updateQty } = useCart();   {/* ← ye line add karein */}
const total = cartItems.reduce((sum, item) => sum + item.qty * Number(item.price.replace(/[^0-9]/g, "")), 0);

  return (
    <>
      <div className="titlediv">
        <h1>Shoping Cart</h1>
        <div className='shopingcart'>
          <li><NavLink to="/">Home</NavLink></li>
          <p className='m-0'><img className='nxtbtimg' src="nextbt.png" alt="" />Your Shoping Cart</p>
        </div>
      </div>

      
      <div style={{ padding: "30px 60px" }}>
  {cartItems.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.alt} />
          <div className="cart-item-info">
            <h6>{item.title}</h6>
            <p>{item.price}</p>
          </div>
          <div className="qty-control">
            <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
          </div>
          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        <span>Total: PKR {total}</span>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </>
  )}
</div>
      {/* ↑↑↑ naya section yahan khatam ↑↑↑ */}

      <div className="lastsectionscubs">
        {/* baqi sab bilkul wesa hi hai */}
        ...
      </div>
      <Footer/>
    </>
  )
}

export default Cart
