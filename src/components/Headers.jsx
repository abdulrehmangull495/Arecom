import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);
  const [search, setSearch] = useState("");
     const [dark, setDark] = useState(false);
     const { cartItems } = useCart();

  const toggleMode = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };


  return (
    <header className="header">
      <nav className="nav">       
        <h1 className="logo">Arecom</h1>       
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
  <li><NavLink to="/" onClick={handleLinkClick} >Home</NavLink></li>
  <li><NavLink to="/Shop" onClick={handleLinkClick}>Shop</NavLink></li>
  <li><NavLink to="/Mycheckout" onClick={handleLinkClick}>Checkout</NavLink></li>
  <li><NavLink to="/Contactus" onClick={handleLinkClick}>Contact Us</NavLink></li>
  <li><NavLink to="/Signin" onClick={handleLinkClick}>Sign In</NavLink></li>
  {/* <li><NavLink to="/Cart" onClick={handleLinkClick}><img src="cart.png" alt="cart" /></NavLink></li> */}
  <li>
  <NavLink to="/Cart" onClick={handleLinkClick} style={{ position: "relative" }}>
    <img src="cart.png" alt="cart" />
    {cartItems.length > 0 && (
      <span
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          background: "#ff6a00",
          color: "#fff",
          fontSize: "11px",
          fontWeight: "bold",
          borderRadius: "50%",
          width: "18px",
          height: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cartItems.length}
      </span>
    )}
  </NavLink>
</li>

  <li>
    {/* <input
    type="text"
    placeholder="Search products..."
  /> */}
  {/* <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search products..."
/> */}
     {/* <button className="mic-btn">
    🎤
  </button> */}

    <NavLink to="/Signup" className="signup-btn" onClick={handleLinkClick}>
      Sign Up
    </NavLink>

  </li>
  <li>
        <button className="theme-btn" onClick={toggleMode}>
         {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>

  </li>
</ul>
      </nav>
    </header>
  );
};

export default Header;
