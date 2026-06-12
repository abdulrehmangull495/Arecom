import React from 'react'
import "./Forget.css"
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
const Forget = () => {
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
        <h5>Forget Password</h5>
        <div className='createaccountdiv'>
              <div className='googlediv'>
            <button className='google'>  <img className='goo' src="google.png" alt="" />Sign up with Google</button>
              </div>
          <div>
            <button className='mail'> <img className='ma' src="mail.png" alt="" />Sign up with Mail</button>
          </div>
          
        </div>
        <div className='or'><h6>OR</h6></div>
        
       <div className="inputfields">
  <div className="row">
    <input type="text" placeholder="Enter First Name" required />
    <input type="text" placeholder="Enter Last Name" required />
  </div>

  <div className="row">
    <input type="email" placeholder="Enter Email" />
    <input type="text" placeholder="Enter Phone Number" />
  </div>
</div>

<div className="createbtn">
  
  <button className='createaccount'><NavLink to="/Confirmation">Send Confirmation Code</NavLink></button>
  <div className='alreadyhave'>
    <p className='alreadytext'>Already have an account?  </p>
       <NavLink to="/Signin" className="loginbtnforget">Login</NavLink>
  </div>
</div>
      </div>
    </div>
   
   </>
  )
}

export default Forget
