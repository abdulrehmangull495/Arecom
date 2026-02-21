import React from 'react'
import "./Forget.css"
import { NavLink } from 'react-router-dom'
const Forget = () => {
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
    <input type="text" placeholder="Enter First Name" />
    <input type="text" placeholder="Enter Last Name" />
  </div>

  <div className="row">
    <input type="email" placeholder="Enter Email" />
    <input type="text" placeholder="Enter Phone Number" />
  </div>


</div>

<div className="createbtn">
  <button className='createaccount'>Send Confirmation Code</button>
  <div className='already'>
    <p className='alreadytext'>Already have an account? <ul><li><NavLink to="/Signin">Login</NavLink></li></ul>
      
      </p>
  </div>
</div>



      </div>
    </div>
   </>
  )
}

export default Forget
