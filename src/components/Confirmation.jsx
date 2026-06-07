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
        
       <div className="inputfields">
  <div className="row">
    <input type="text" placeholder="Enter Confirmation Code" required />
  </div>


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
   <Footer/>
   </>
  )
}

export default Confirmation
