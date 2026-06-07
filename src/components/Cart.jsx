import React from 'react'
import './Cart.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
const Cart = () => {
  return (
    <>
   <div className="titlediv">
       <h1>Shoping Cart</h1>
       <div className='shopingcart'>
           <li><NavLink to="/">Home</NavLink></li>
           <p className='m-0'><img className='nxtbtimg' src="nextbt.png"  alt="" />Your Shoping Cart</p></div>
       
      </div>
      
      <div className="lastsectionscubs">
        <div>
          <img src="camelcoat.png" className="camelcoatpic" alt="" />
        </div>
        <div className="subsdiv">
          <h5 className="newsletter">Subscribe To Our Newsletter</h5>
          <p className="getthe">Be the first to know about new products, offers and discounts.</p>
             <p>abdulrehmangull495@gmail.com</p>
             <div>
              <button className="subsnow">Subscribe Now</button>
             </div>

        </div>
        <div>
          <img src="darkgreycoat.png" className="darkgreycoatpic" alt="" />
        </div>
      </div>

      
      {/* <footer class="footer">
        <div className="d-flex ftdiv">
  <div class="footer-box">
    
    <p className="m-0 arecom">Arecom</p>
  </div>

  <div class="footer-box">
  

    <a href="#">Support Center</a>
    <a href="/Checkout">Invoicing</a>
    
    <a href="#">Blog</a>
  </div>
  </div>
  <div className="copydiv">
    <p className="copy">Copyright © 2026 arecom. All Rights Reseved.</p>
  </div>
</footer> */}
<Footer/>
    
    </>
  )
}

export default Cart
