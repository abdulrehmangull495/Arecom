import React from 'react'
import { NavLink } from 'react-router-dom'
import "./contactus.css"
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
const Contactus = () => {
  return (
    <>
    <div className='contactus'>
      <h1>Contact Us</h1>
      <p>Get in touch with us</p>
    
    </div>
    <div className='leftrightcontactusdiv'>
          <div className="leftcontactusside">
            <img className='leftcontactussideimg' src="blackclassicshirt.png" alt="" />
          </div>
          <div className="rightcontactusside">
<div className="contact-wrapper">
  <div className="contact-form">
    <form action="">
      <div className="group-form">
        <label htmlFor="Name">Name</label>
        <input type="text" id='name' />
      </div>
      <div className="group-form">
        <label htmlFor="email">Email</label>
        <input type="email" id='email' />
      </div>
      <div className="group-form">
        <label htmlFor="Message">Message</label>
        <textarea name="" id="" className='textarea'></textarea>
      </div>
      <div className="buttonsubmit">
        <button type='submit' className='send'>Send Message</button>
      </div>
    </form>
    <div className="contact-info">
      <h6>Gulistan Colony no 1 near awan chowk fsd</h6>
      <p>abdulrehmangull495@gmail.com</p>
      <p>03141458867</p>
    </div>
  </div>
</div>
          </div>
        </div>
        
    </>
  )
}

export default Contactus
