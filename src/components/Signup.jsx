import React from 'react'
import "./Signup.css"
import { NavLink } from 'react-router-dom'
const Signup = () => {
  return (
    <>
    <div className='leftrightsigupdiv'>
      <div className="leftsignupside">
        <img className='leftsignupsideimg' src="brown coat.png" alt="" />
      </div>
      <div className="rightsignupside">
        <h1>
          Arecom
        </h1>
        <h5>Create Account</h5>
        <div className='createaccountdiv'>
              <div className='googlediv'>
            <h6 className='google'>  <img className='goo' src="google.png" alt="" />Sign up with Google</h6>
              </div>
          <div>
            <h6 className='mail'> <img className='ma' src="mail.png" alt="" />Sign up with Mail</h6>
          </div>
          
        </div>
        <div className='or'><h6>OR</h6></div>
        
        <div className="inputfields">
  <div className="row">
    <input type="text" placeholder="Enter First Name" />
    <input type="text" placeholder="Enter Last Name" />
  </div>

  <div className="row">
    <input type="email" placeholder="Enter Email" />
    <input type="text" placeholder="Enter Phone Number" />
  </div>

  <div className="row">
    <input type="password" placeholder="Enter Your Password" />
    <input type="password" placeholder="Confirm Password" />
  </div>
</div>

<div className="createbtn">
  <button className='createaccount'>Create Account</button>
</div>
<div className='already'>
  <p className='alreadytext'>Already have an account? <ul><li><NavLink to="/Signin">Login</NavLink></li></ul>
    
    </p>
</div>

      </div>
    </div>
</>
  )
}

export default Signup
