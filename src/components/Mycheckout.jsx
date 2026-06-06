import React from 'react'
import "./checkout.css"

const Mycheckout = () => {
  return (
    <>
    <div className="title">
        <h3>Arecom Demo Checkout</h3>
      </div>
      <div className="left">
<div className='leftcontent'>
        <div className="contact">
        <h4>Contact</h4>
        <h6>Have an account?<span className='create'>Create Account</span></h6>
       
        
        </div>
         <div className='emaildiv'>
        <input className='email' type="email" name="" id="" placeholder='Email Address' required />
        </div>
        <div className='Deliverydiv'>
          <h4>Delivery</h4>
        
        <div className="custom-dropdown">
  <select defaultValue="">
    <option className='Country' value="" disabled>Country / Region</option>
    <option value="pk">Pakistan</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
</div>
<div className='firstlastname'>
<input className='first' type="text" name="" id="" placeholder='Enter First Name'/>
<input className='last' type="text" name="" id="" placeholder='Enter Last Name'/>
</div>

<div className='classdiv'>
  <input className='address' type="text" name="" id="" placeholder='Enter Address'/>
</div>
<div className='citypostaldiv'>
<input className='city' type="text" name="" id="" placeholder='Enter City'/>
<input className='postal' type="text" name="" id="" placeholder='Enter Postal Code' />
</div>
<div className="save">
  <input className='checkbox' type="checkbox" name="" id="" />
  <p className='mb-0 this'>Save This Info for future</p>
</div>

<div className="payment">
  
  <h4 className='mypay'>Payment</h4>
  <div className='paymentdiv'>
  <div className='crddiv'>
    <input className='carddetails' type="text" name="" id=""  placeholder='Credit Card'/>
    
  </div>
  <div className='cardnodiv'>
<input type="text"  placeholder='Enter Card Number' className='cardno'/>
  </div>
  <div className='expcvcdiv'>
 <input className='expiry'  type="text"  placeholder='Expiry Date'/>
  <input className='cvc' type="text"  placeholder='CVC'/>
  </div>
 <div className='cardnodiv'>
 <input className='cardno' type="text"  placeholder='Enter Card Number'/>
 </div>
 <div className="save">
  <input className='checkbox' type="checkbox" name="" id="" />
  <p className='mb-0 this'>Save This Info for future</p>
</div>
</div>
<div className='paydiv'>
  <button className='pay'>Pay Now</button>
</div>
 <div className="copydiv">
    <p className="copy">Copyright © 2026 arecom. All Rights Reseved.</p>
  </div>
</div>

        </div>
        </div>
      </div>
       <div className="lastsectionscubs">
        <div>
          <img src="camelcoat.png" className="camelcoatpic" alt="" />
        </div>
        <div className="subsdiv">
          <h6 className="subscribeto">Subscribe To Our Newsletter</h6>
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

      
      <footer className="footer">
        <div className="d-flex ftdiv">
  <div class="footer-box">
    
    <p className="m-0 arecom">Arecom</p>
  </div>

  <div className="footer-box">
  

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

export default Mycheckout
