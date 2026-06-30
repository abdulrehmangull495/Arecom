import React from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
const Signup = () => {
  return (
    <>
      <div className="leftrightsigupdiv">
        <div className="leftsignupside">
          <img className="leftsignupsideimg" src="blackclassicshirt.png" alt="" />
        </div>
        <div className="rightsignupside">
          <h1>Arecom</h1>
          <h5>Create Account</h5>
          <div className="createaccountdiv">
            <div className="googlediv">
              <button className="google">
                
                <img className="goo" src="google.png" alt="" />
                Sign up with Google
              </button>
            </div>
            <div>
              <button className="mail">
                
                <img className="ma" src="mail.png" alt="" />
                Sign up with Mail
              </button>
            </div>
          </div>
          <div className="or">
            <h6>OR</h6>
          </div>

          <form className="inputfields">
            <div className="row">
              <input type="text" placeholder="Enter First Name" required />
              <input type="text" placeholder="Enter Last Name" required />
            </div>

            <div className="row">
              <input type="email" placeholder="Enter Email" required />
              <input type="text" placeholder="Enter Phone Number" required />
            </div>

            <div className="row">
              <input type="password" placeholder="Enter Your Password" required />
              <input type="password" placeholder="Confirm Password" required />
            </div>
          </form>

          <div className="lastcreatebtn">
            <div className="createbtn">
              <button className="createaccount">Create Account</button>
            </div>
            <div className="already">
              <p className="alreadytext">
                Already have an account?
                <ul>
                  <li>
                    <NavLink to="/Signin">Login</NavLink>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default Signup;
