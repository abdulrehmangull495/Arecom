// import React from 'react'
// import './Cart.css';
// import { NavLink } from 'react-router-dom';
// import Footer from './Footer';
// const Cart = () => {
//   return (
//     <>
//    <div className="titlediv">
//        <h1>Shoping Cart</h1>
//        <div className='shopingcart'>
//            <li><NavLink to="/">Home</NavLink></li>
//            <p className='m-0'><img className='nxtbtimg' src="nextbt.png"  alt="" />Your Shoping Cart</p></div>
       
//       </div>
      
//       <div className="lastsectionscubs">
//         <div>
//           <img src="camelcoat.png" className="camelcoatpic" alt="" />
//         </div>
//         <div className="subsdiv">
//           <h5 className="newsletter">Subscribe To Our Newsletter</h5>
//           <p className="getthe">Be the first to know about new products, offers and discounts.</p>
//              <p>abdulrehmangull495@gmail.com</p>
//              <div>
//               <button className="subsnow">Subscribe Now</button>
//              </div>

//         </div>
//         <div>
//           <img src="darkgreycoat.png" className="darkgreycoatpic" alt="" />
//         </div>
//       </div>

      
      
// <Footer/>
    
//     </>
//   )
// }

// export default Cart
import React from 'react'
import './Cart.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import { useCart } from './CartContext';   {/* ← ye import add karein */}

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

      {/* ↓↓↓ ye poora naya section add karein ↓↓↓ */}
      {/* <div style={{ padding: "30px" }}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
                <img src={item.image} alt={item.alt} style={{ width: "80px" }} />
                <div style={{ flex: 1 }}>
                  <h6>{item.title}</h6>
                  <p>{item.price}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <h4>Total: PKR {total}</h4>
          </>
        )}
      </div> */}
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
