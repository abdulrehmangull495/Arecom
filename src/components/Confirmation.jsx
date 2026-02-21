import React from 'react'
import "./Confirmation.css"
import { NavLink } from 'react-router-dom'
const Confirmation = () => {
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
        <h6 className='enterthe'>Enter The Confirmation Code</h6>
        {/* <div className='createaccountdiv'>
              <div className='googlediv'>
            <button className='google'>  <img className='goo' src="google.png" alt="" />Sign up with Google</button>
              </div>
          <div>
            <button className='mail'> <img className='ma' src="mail.png" alt="" />Sign up with Mail</button>
          </div>
          
        </div>
        <div className='or'><h6>OR</h6></div> */}
        
       <div className="inputfields">
  <div className="row">
    <input type="text" placeholder="Enter Confirmation Code" required />
    {/* <input type="text" placeholder="Enter Last Name" required /> */}
  </div>

  {/* <div className="row">
    <input type="email" placeholder="Enter Email" />
    <input type="text" placeholder="Enter Phone Number" />
  </div> */}


</div>

<div className="createbtn">
    
  <button className='createaccount'>Recover Account</button>
  <div className='resenddiv'>
    <p className='Dont'>Don't Receive Confirmation Code? </p>
        <NavLink to="/Resend" className="resendbtn">Resend</NavLink>
      
      
  </div>
</div>



      </div>
    </div>
   
   </>
  )
}

export default Confirmation
