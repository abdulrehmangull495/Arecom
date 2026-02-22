import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Resend.css"
const Resend = () => {
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
        <h6 className='enterthe'>Enter Your New Password</h6>
        
        
       <div className="inputfields">
  <div className="row">
    <input type="text" placeholder="New Password" required />
    {/* <input type="text" placeholder="Enter Confirmation Code" required /> */}
    {/* <input type="text" placeholder="Enter Last Name" required /> */}
  </div>

  <div className="row">
    <input type="text" placeholder="Confirm New Password" />
    {/* <input type="text" placeholder="Enter Phone Number" /> */}
  </div>


</div>

<div className="createbtn">
    
  <button className='createaccount'>Submit</button>
  
</div>



      </div>
    </div>
    </>
  )
}

export default Resend
