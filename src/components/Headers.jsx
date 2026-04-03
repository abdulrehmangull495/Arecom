import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);
  return (
    <header className="header">
      <nav className="nav">       
        <h1 className="logo">Arecom</h1>       
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
  <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
  <li><NavLink to="/Shop" onClick={handleLinkClick}>Shop</NavLink></li>
  <li><NavLink to="/Mycheckout" onClick={handleLinkClick}>Checkout</NavLink></li>
  <li><NavLink to="/Contactus" onClick={handleLinkClick}>Contact Us</NavLink></li>
  <li><NavLink to="/Signin" onClick={handleLinkClick}>Sign In</NavLink></li>
  <li><NavLink to="/Cart" onClick={handleLinkClick}><img src="cart.png" alt="cart" /></NavLink></li>
  <li>
    <NavLink to="/Signup" className="signup-btn" onClick={handleLinkClick}>
      Sign Up
    </NavLink>
  </li>
</ul>
      </nav>
    </header>
  );
};

export default Header;
