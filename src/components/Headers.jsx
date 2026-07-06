import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);
  const [search, setSearch] = useState("");
     const [dark, setDark] = useState(false);

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
  <li><NavLink to="/Cart" onClick={handleLinkClick}><img src="cart.png" alt="cart" /></NavLink></li>
  <li>
    {/* <input
    type="text"
    placeholder="Search products..."
  /> */}
  <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search products..."
/>
     {/* <button className="mic-btn">
    🎤
  </button> */}

    <NavLink to="/Signup" className="signup-btn" onClick={handleLinkClick}>
      Sign Up
    </NavLink>

  </li>
  <li>
    {/* let button=document.querySelector(".btn")
button.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        button.innerText="light mode ☀️ "
    }
else{
    button.innerText="dark mode 🌙 "
}
}) */}
{/* <button class="btn">i am a button</button> */}
    {/* <button onClick={toggleMode}>
          {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button> */}
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
