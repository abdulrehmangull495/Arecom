import React from 'react'
import "./Signin.css"
import { NavLink } from 'react-router-dom'
const Signin = () => {
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
        <h5>Sign in to Arecom</h5>
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
    <input type="email" placeholder="Email" />
    
  </div>

  <div className="row">
    <input type="password" placeholder="Enter Your Password" />
    
  </div>
</div>

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
