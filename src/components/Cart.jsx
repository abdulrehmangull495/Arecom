import React from 'react'
import './Cart.css';
import { NavLink } from 'react-router-dom';
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
          <img src="camelcoat.png" className="camelcoat" alt="" />
        </div>
        <div className="subsdiv">
          <h5 className="news">Subscribe To Our Newsletter</h5>
          <p className="amet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Neque iure dignissimos illum, vero, error reiciendis amet magni
             explicabo assumenda corporis, eos eius.</p>
             <p>abdulrehmangull495@gmail.com</p>
             <div>
              <button className="subsnow">Subscribe Now</button>
             </div>

        </div>
        <div>
          <img src="darkgreycoat.png" className="darkgreycoat" alt="" />
        </div>
      </div>

      
      <footer class="footer">
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
</footer>
    
    </>
  )
}

export default Cart
