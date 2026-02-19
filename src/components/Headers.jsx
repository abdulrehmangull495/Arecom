
import { NavLink } from "react-router-dom";
import './header.css';
const Headers = () => {
  return (
    <header className="myheader">
      
      <nav className='header-nav'>
        <h1 className='m-0 arecom'>Arecom</h1>
        <ul>
          
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Deals">Deals</NavLink></li>
          <li><NavLink to="/Shop">Shop</NavLink></li>
          <li><NavLink to="/Newarrivals">New Arrivals</NavLink></li>
          <li><NavLink to="/">Packages</NavLink></li>
          <li><NavLink to="/Signin">Sign in</NavLink></li>
          {/* <li><NavLink to="/">Sign in</NavLink></li> */}
          <li><NavLink to="/Mycheckout">Checkout</NavLink></li>
          
          
         
        </ul>
        <div className='seacartdiv'>
          <ul>
          <li><NavLink to="/"><img src="search.png" alt="" className='m-0'/></NavLink></li>
          <li><NavLink to="/Cart"><img src="cart.png" alt="" className='m-0'/></NavLink></li>
          <li><NavLink to="/Signup"><img src="account.png" alt="" className='m-0'/></NavLink></li>
          <li><NavLink to="/Forget"><img src="forgeticon.jfif" alt="" className='m-0 forgetico'/></NavLink></li>

          </ul>
        </div>
     
        <button className='signup'>
          
          <ul>
            {/* <li><NavLink to="/Forget">Forget your Password</NavLink></li> */}
            <li><NavLink to="/Signup">Sign Up</NavLink></li>

          </ul>
          
          
         </button>
      </nav>
    </header>
  );
};

export default Headers;
