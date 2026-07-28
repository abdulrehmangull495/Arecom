import React from "react";
import "./Signin.css";
import { Form, NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import { motion } from "framer-motion";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("Please enter your password");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      alert("form submited");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <>
      <div className="leftrightsigupdiv">
        <motion.div
          className="leftsignupside"
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="leftsignupsideimg"
            src="blackclassicshirt.png"
            alt=""
          />
        </motion.div>
        <motion.div
          className="rightsignupside"
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Arecom</h1>
          <h5>Sign in to Arecom</h5>
          <div className="createaccountdiv">
            <div className="googlediv">
              <button className="google">
                {" "}
                <img className="goo" src="google.png" alt="" />
                Sign up with Google
              </button>
            </div>
            <div>
              <button className="mail">
                {" "}
                <img className="ma" src="mail.png" alt="" />
                Sign up with Mail
              </button>
            </div>
          </div>
          <div className="or">
            <h6>OR</h6>
          </div>

          <form onSubmit={handlesubmit} noValidate>
            <div className="row">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="firstemailerror">{emailError}</p>}
            </div>
            <div className="row">
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="firstemailerror">{passwordError}</p>
              )}
            </div>
            <button type="submit" className="signinbtn">
              Sign In
            </button>
          </form>
          <div className="createbtn">
            {/* <button className='registernowbtn '>Register Now</button> */}
            <NavLink to="/signup">
              <button className="registernowbtn">Register Now</button>
            </NavLink>
          </div>

          <div className="forgot">
            <ul>
              <li>
                <NavLink to="/Forget">Forget Your Password</NavLink>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Signin;
