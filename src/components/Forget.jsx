import React from "react";
import "./Forget.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Forget = () => {
  const [firstname, setFirstName] = useState("");
  const [firstnameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    if (firstname === "") {
      setFirstNameError("First name is required");
      isValid = false;
    } else if (firstname[0] !== firstname[0].toUpperCase()) {
      setFirstNameError("First alphabet must be capital");
      isValid = false;
    } else {
      setFirstNameError("");
    }
    if (lastName === "") {
      setLastNameError("Last name is required");
      isValid = false;
    } else {
      setLastNameError("");
    }
    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (phone === "") {
      setPhoneError("Phone Number is required");
      isValid = false;
    } else if (phone.length < 11) {
      setPhoneError("phone number must be 11 digits");
      isValid = false;
    } else {
      setPhoneError("");
    }
    if (isValid) {
      alert("Send Confirmation");
      navigate("/Confirmation");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    }
  };
  return (
    <>
      <div className="leftrightsigupdiv">
        <motion.div
          className="leftsignupside"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
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
          <h5>Forget Password</h5>
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
          {/* <form className="inputfields" onSubmit={handlesubmit} noValidate>
            <div className="row">
              <div className="field">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {firstnameError && <p className="error">{firstnameError}</p>}
              </div>

              <div className="field">
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {lastNameError && <p className="error">{lastNameError}</p>}
              </div>
            </div>
            <div className="row">
              <div className="field">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error">{emailError}</p>}
              </div>

              <div className="field">
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {phoneError && <p className="error">{phoneError}</p>}
              </div>
            </div>
            <button type="submit" className="createaccount">
              Send Confirmation Code
            </button>
          </form> */}
          <form className="inputfields" onSubmit={handlesubmit} noValidate>
  <div className="field">
    <label htmlFor="email">Email Address</label>
    <input
      id="email"
      name="email"
      type="email"
      placeholder="Enter your email"
      autoComplete="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    {emailError && (
      <p className="error" role="alert">
        {emailError}
      </p>
    )}
  </div>

  <button type="submit" className="createaccount">
    Send Confirmation Code
  </button>
</form>
          <div className="createbtn">
            <div className="alreadyhave">
              <p className="alreadytext">Already have an account? </p>
              <NavLink to="/Signin" className="loginbtnforget">
                Login
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Forget;
