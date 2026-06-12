import React from 'react'
import "./Signin.css"
import { Form, NavLink } from 'react-router-dom'
import Footer from './Footer'
const Signin = () => {
  return (
    <>
    <div className='leftrightsigupdiv'>
      <div className="leftsignupside">
        <img className='leftsignupsideimg' src="blackclassicshirt.png" alt="" />
      </div>
      <div className="rightsignupside">
        <h1>
          Arecom
        </h1>
        <h5>Sign in to Arecom</h5>
        <div className='createaccountdiv'>
              <div className='googlediv'>
            <button className='google'>  <img className='goo' src="google.png" alt="" />Sign up with Google</button>
              </div>
          <div>
            <button className='mail'> <img className='ma' src="mail.png" alt="" />Sign up with Mail</button>
          </div>
          
        </div>
        <div className='or'><h6>OR</h6></div>
        
        <form className="inputfields">
  <div className="row">
    <input type="email" placeholder="Email" />
    
  </div>
  <div className="row">
    <input type="password" placeholder="Enter Your Password" />
    
  </div>
</form>
<div className="createbtn">
  <button className='signinbtn'>Sign In</button>
  <button className='registernowbtn '>Register Now</button>
</div>

<div className='forgot'>
  
  <ul><li><NavLink to="/Forget">Forget Your Password</NavLink></li></ul>
  
</div>

      </div>
    </div>
</>
  )
}

export default Signin
