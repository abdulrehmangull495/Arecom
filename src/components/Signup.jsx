import React from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
const Signup = () => {
  const [firstName, SetFirstName] = useState("");
  const [firstNameError, SetFirstNameError] = useState("");
  const [lastName, SetLastName] = useState("");
  const [lastNameError, SetLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [phoneNumberError, setphoneNumberError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const handlename = (e) => {
    e.preventDefault();
    let isValid = true;

    if (firstName === "") {
      SetFirstNameError("First name is required");
      isValid = false;
    } else if (firstName[0] !== firstName[0].toUpperCase()) {
      SetFirstNameError("first alphabet should be capital");
      isValid = false;
    } else {
      SetFirstNameError("");
    }

    if (lastName === "") {
      SetLastNameError("Last name is required");
      isValid = false;
    } else {
      SetLastNameError("");
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

    if (phoneNumber === "") {
      setphoneNumberError("Phone number is required");
      isValid = false;
    } else if (phoneNumber.length < 11) {
      setphoneNumberError("Phone number must contain 11 digits");
      isValid = false;
    } else {
      setphoneNumberError("");
    }
    if (password === "") {
      setPasswordError("password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (confirmPassword === "") {
      setConfirmPasswordError("confirm password is required");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } 
    else {
      setConfirmPasswordError("");
    }
    if (isValid) {
      alert("Form Submitted");
      SetFirstName("");
      SetFirstNameError("");
      SetLastName("");
      SetLastNameError("");
      setEmail("");
      setEmailError("")
      setphoneNumber("");
      setphoneNumberError("");
      setPassword("");
      setPasswordError("");
      setConfirmPassword("");
      setConfirmPasswordError("");
      
    }
  };

  return (
    <>
      <div className="leftrightsigupdiv">
        <div className="leftsignupside">
          <img
            className="leftsignupsideimg"
            src="blackclassicshirt.png"
            alt=""
          />
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

          <form className="inputfields" onSubmit={handlename} noValidate>
            {/* <div className="row">
              <input
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => SetFirstName(e.target.value)}
              />
              {firstNameError && (
                <p className="firstnameerror">{firstNameError}</p>
              )}

              <input
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => SetLastName(e.target.value)}
              />
              {lastNameError && (
                <p className="firstnameerror">{lastNameError}</p>
              )}
            </div>

            <div className="row">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error">{emailError}</p>}
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
              {phoneNumberError && (
                <p className="firstnameerror">{phoneNumberError}</p>
              )}
            </div>

            <div className="row">
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="firstnameerror">{passwordError}</p>
              )}
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError && (
                <p className="firstnameerror">{confirmPasswordError}</p>
              )}
            </div> */}

            <div className="row">
  <div className="field">
    <input
      type="text"
      placeholder="Enter First Name"
      value={firstName}
      onChange={(e) => SetFirstName(e.target.value)}
    />
    {firstNameError && <p className="error">{firstNameError}</p>}
  </div>

  <div className="field">
    <input
      type="text"
      placeholder="Enter Last Name"
      value={lastName}
      onChange={(e) => SetLastName(e.target.value)}
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
      value={phoneNumber}
      onChange={(e) => setphoneNumber(e.target.value)}
    />
    {phoneNumberError && <p className="error">{phoneNumberError}</p>}
  </div>
</div>
<div className="row">
  <div className="field">
    <input
      type="password"
      placeholder="Enter Your Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    {passwordError && <p className="error">{passwordError}</p>}
  </div>

  <div className="field">
    <input
      type="password"
      placeholder="Confirm Password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
    {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
  </div>
</div>
            <div className="createbtn">
              <button className="createaccount">Create Account</button>
            </div>
          </form>

          <div className="lastcreatebtn">
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
