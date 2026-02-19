
import { NavLink } from "react-router-dom";
import './Newarrivals.css';
const Headers = () => {
  return (
    <>
    

    <div className="newarrivalsection">
        <div className="newarrivals">
          <h1 className="newarrival">New Arrivals</h1>
          <p className="lor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </div>
        <div className="menus">
          <h6>Men's Fashion</h6>
          <h6>Women's Fashion</h6>
          <h6>Women Accessories</h6>
          <h6>Men Accessories</h6>
          <h6>Discount Deals</h6>
        </div>
        
        <div className="cards">
          <div className="card-row">
            <div className="product-card">
              <div className="shinydressdiv">
                <img
                  className="shinydress"
                  src="shinydress.png"
                  alt="Shiny Dress"
                />
                <h6 className="imgtitle">Shiny Dress</h6>
                <h6>PKR 4999</h6>
              </div>
            </div>
            <div className="product-card">
              <div className="longdressdiv">
                <img
                  className="longdress"
                  src="longdress.png"
                  alt="Long Dress"
                />
                <h6 className="imgtitle">Long Dress</h6>
                <h6>PKR 4599</h6>
              </div>
            </div>
            <div className="product-card">
              <div className="fullsweaterdiv">
                <img
                  className="fullsweater"
                  src="fullsweater.png"
                  alt="Full Sweater"
                />
                <h6 className="imgtitle">Full Sweater</h6>
                <h6>PKR 3999</h6>
              </div>
            </div>
          </div>

          <div className="card-row">
            <div className="product-card">
              <div className="whitedressdiv">
                <img
                  className="whitedress"
                  src="whitedress.png"
                  alt="Full Sweater"
                />
                <h6 className="imgtitle">Full Sweater</h6>
                <h6>PKR 3999</h6>
              </div>
            </div>
            <div className="product-card">
              <div className="colorfulldressdiv">
                <img
                  className="colorfulldress"
                  src="colorfulldress.png"
                  alt="Full Sweater"
                />
                <h6 className="imgtitle">Full Sweater</h6>
                <h6>PKR 3999</h6>
              </div>
            </div>
            <div className="product-card">
              <div className="whiteshirtdiv">
                <img
                  className="whiteshirt"
                  src="whiteshirt.png"
                  alt="Full Sweater"
                />
                <h6 className="imgtitle">Full Sweater</h6>
                <h6>PKR 3999</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="viewmorediv">
          <button className="viewmore">viewmore</button>
        </div>
      </div>
      <footer class="footer">
        <div className="d-flex ftdiv">
  <div class="footer-box">
    
    <p className="m-0 arecom">Arecom</p>
  </div>

  <div class="footer-box">
  

    <a href="#">Support Center</a>
    <a href="/Checkout">Invoicing</a>
    
    <a href="#">Blog</a>
  </div>
  </div>
  <div className="copydiv">
    <p className="copy">Copyright © 2026 arecom. All Rights Reseved.</p>
  </div>
</footer>
      </>
  );
};

export default Headers;
