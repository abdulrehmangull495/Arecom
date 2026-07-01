import React from 'react'
import { NavLink } from 'react-router-dom'
import "./contactus.css"
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { useState } from 'react'

const Contactus = () => {
  const [email, setEmail]= useState("");
  const [emailError, setEmailError]= useState("");
  const [name, setName] = useState("");
  const[textarea, setTextArea]=useState("")
  // const[textareaError, setTextAreaError]=useState("")

  const handlesubmit=(e)=>{

     e.preventDefault();
      let isValid = true;
    //  if(!email.includes("@")){
     
    //   alert("please enter a valid email address")
    //  }
//     if (email === "") {
//   alert("Email is required");
// } else if (!email.includes("@")) {
//   alert("Please enter a valid email address");
// }
if (email === "") {
    setEmailError("Email is required");
  } else if (!email.includes("@")) {
    setEmailError("@ is missing");
  } else {
    setEmailError("");
    alert("Form Submitted");
  }
  if (isValid){
      setName("");
  setEmail("");
  setTextArea("");
      setName("");
setEmail("");
setMessage("");
  }
  
  }
  return (
    <>
    <div className='contactus'>
      <h1>Contact Us</h1>
      <p>Get in touch with us</p>
    
    </div>
    <div className='leftrightcontactusdiv'>
          <div className="leftcontactusside">
            <img className='leftcontactussideimg' src="blackclassicshirt.png" alt="Black classic shirt" />
          </div>
          <div className="rightcontactusside">
<div className="contact-wrapper">
  <div className="contact-form">
    <form onSubmit={handlesubmit} noValidate>
      <div className="group-form">
        <label htmlFor="Name">Name</label>
        <input type="text" id='name'  value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="group-form">
        <label htmlFor="email">Email</label>
        <input type="email" id='email'  value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div className="group-form">
        <label htmlFor="message">Message</label>
        <textarea name="" id="message" className='textarea' value={textarea} onChange={(e)=>setTextArea(e.target.value)}></textarea>
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
