import React from 'react';
import "./Footer.css"
const Footer = () => {
  return (
    <>
     
      <footer className="footer">
        <div className="d-flex ftdiv">
  <div className="footer-box">
    <p className="m-0 arecom">Arecom</p>
  </div>
  <div className="footer-box">
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
}

export default Footer;
