import React from 'react'
import './shop.css';

import { NavLink } from 'react-router-dom';
const Shop = () => {
  return (
    <>
   <div className="fashiondiv">
    <h1>Fashion</h1>
    <div className='homefashion'>
        <li><NavLink to="/">Home</NavLink></li>
        <p className='m-0'><img className='nxtbtimg' src="nextbt.png"  alt="" />Fashion</p></div>
    
   </div>
<div className='leftrightdiv'>
  <div className="myleftside">
    <h3>Filters</h3>
    
    <h3 className='size'>Size</h3>

    <div className="box">
      <span>S</span>
      <span>M</span>
      <span>L</span>
      <span>XL</span>
    </div>
    <div className="prices">
      <h3 className='price'>Prices</h3>
      <p>0-999</p>
      <p>1000-1999</p>
      <p>2000-2900</p>
      <p>3000-3999</p>
      <p>4000-4999</p>
    </div>
    <label className='brandlabel' for="Brands">Choose a Brand:</label>
<select id="Brand" name="Brand">
  <option value="Minimog">Minimog</option>
  <option value="Learts">Learts</option>
  <option value="Abby">Abby</option>
  <option value="Vagabond">Vagabond</option>
</select>

 <div className="collection">
      <h3 className='collections'>Collections</h3>
      <p>All Products</p>
      <p>Best Sllers</p>
      <p>New Arrivals</p>
      <p>Accessories</p>
      
    </div>

    <div className="tags">
      <h3>Tags</h3>
      <div className='tagsdiv'>
      <span>Fashion</span>
      <span>Hats</span>
      <span>Sandals</span>
      <span>Belt</span>
      <span>Bags</span>
      <span>Sneaker</span>
      <span>Denim</span>
      <span>Beachwear</span>
      </div>
      
      
    </div>
  </div>
   <div className="right">
    <h6>Best selling</h6>
    <div className="imgssec">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <img src="roundedredhat.png" alt="" />
          <p className='imgtitle'>Rounded Red Hat</p>
          
          <p>1000 pkr</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <img src="LinenblendShirt.png" alt="" />
          <p className='imgtitle'>Linen-blend Shirt</p>
          <p>1000 pkr</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <img src="longsleevecoat.png" alt="" />
          <p className='imgtitle'>Long Sleeve Coat</p>
          <p>1000 pkr</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <img src="denimhat.png" alt="" />
          <p className='imgtitle'>Denim Hat</p>
          <p>1000 pkr</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <img src="oversizedtshirt.png" alt="" />
          <p className='imgtitle'>Oversized T-shirt</p>
          <p>1000 pkr</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <img src="rockstarjacket.png" alt="" />
          <p className='imgtitle'>Rockastar Jacket</p>
          <p>1000 pkr</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <img src="dottedblackdress.png" alt="" />
          <p className='imgtitle'>Dotted Black Dress</p>
          <p>1000 pkr</p>
        </div>

      </div>
    </div>
    
    
   </div>
   
</div>
 

 <div className="peakysection">
        <div>
          <img className="girlside" src="girlsidepose.png" alt="" />
        </div>
        <div className="Peakyblinders">
          <h6 className="womencollection mb-0">Women Collection</h6>
          <h4 className="Peakyblinders  mb-0">Peaky Blinders</h4>
          <h6 className="desc mb-0">DESCRIPTION</h6>
          <p className="ipsum mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Scelerisque duis.
          </p>
          <div className="sizediv">
            <p>Size:</p>
            <p className="m">M</p>
          </div>
          <p className="hundred">$100.00</p>
          <button className="buy">Buy Now</button>
        </div>
      </div>
       <div className="fouritemsdiv">
        <div className="qualitydiv">
          <div>
            <img className="icon" src="support.png" alt="" />
          </div>

          <div className="m-2">
            <p className="mb-0">High Quality</p>
            <p className="mb-0 crafted">crafted from top materials</p>
          </div>
        </div>
        <div className="warrentydiv">
          <div>
            <img className="icon" src="warrenty.png" alt="" />
          </div>

          <div className="m-2">
            <p className="mb-0">Warrany Protection</p>
            <p className="mb-0 over">Over 2 years</p>
          </div>
        </div>
        <div className="freediv">
          <div>
            <img className="icon" src="ship.png" alt="" />
          </div>

          <div className="m-2">
            <p className="mb-0">Free Shipping</p>
            <p className="mb-0 order">Order over 150 $</p>
          </div>
        </div>
        <div className="calldiv">
          <div>
            <img className="icon" src="call.png" alt="" />
          </div>

          <div className="m-2">
            <p className="mb-0 ">24 / 7 Support</p>
            <p className="mb-0 dedicated">Dedicated support</p>
          </div>
        </div>
      </div>

      <div className="follow">
        <h6>Follow Us On Instagram</h6>
        <p className="stay">
      Stay updated with our latest products and offers.
        </p>
        <div className="followsecimg">
          <img  className="browncoat" src="brown coat.png" alt="" />
          <img  className="blueheel" src="blueheel.png" alt="" />
          <img  className="greydress" src="greydress.png" alt="" />
          <img  className="redpant" src="red pant.png" alt="" />
          <img  className="blackcoat" src="black coat.png" alt="" />
          <img  className="blackgirl" src="blackgirl.png" alt="" />
          <img  className="redfull" src="redfull.png" alt="" />
          
        </div>
      </div>
      <div className="thisissection">
        <h6 className="is">This Is What Our Customers Say</h6>
        <p>Hear from our satisfied customers and see why our products are loved by many.</p>
        <div className="cardbox">
          <div className="card1">
            <div className="d-flex blacktshirtsec p-5">
              <img className="blacktshirt" src="blacktshirt.png" alt="" />
            
                 
            </div>
            <div>
                <p className="you">"You won't regret it. I would like to personally thank you for
                 your outstanding product. Absolutely wonderful!"</p>
                 <h3>James.k</h3>
                 <p>Traveler</p>
            </div>
            <div>
              
            </div>
          </div>
          <div className="card2">
            <div className="d-flex blacktshirtsec p-5">
              <img className="yellowshirt" src="yellowshirt.png" alt="" />
            
                 
            </div>
            <div>
                <p className="you">"Just saw i was looking for .Thank you for making it painless,pleasent and most of all hassle Free.
                  All Products are Great"</p>
                 <h3>Megen.W</h3>
                 <p>UI Designer</p>
            </div>
            <div>
              
            </div>
          </div>
         
          
        </div>
         <div className="d-flex btndiv">
             <button><img  className="previousbtn" src="previous.png" alt="" /></button>
          <button><img className="nextbtn" src="nextbt.png" alt="" /></button>
          </div>
      </div>
      <div className="lastsectionscubs">
        <div>
          <img src="camelcoat.png" className="camelcoat" alt="" />
        </div>
        <div className="subsdiv">
          <h6 className="subscribeto">Subscribe To Our Newsletter</h6>
          <p className="getthe">Get the best deals and product updates delivered straight to your inbox.</p>
             <p>abdulrehmangull495@gmail.com</p>
             <div>
              <button className="subsnow">Subscribe Now</button>
             </div>

        </div>
        <div>
          <img src="darkgreycoat.png" className="darkgreycoat" alt="" />
        </div>
      </div>

 
      
      <footer className="footer">
        <div className="d-flex ftdiv">
  <div class="footer-box">
    
    <p className="m-0 arecom">Arecom</p>
  </div>

  <div class="footer-box">
  

    <a href="#">Support Center</a>
    <a href="#">Invoicing</a>
    <a href="#">Contract</a>
    <a href="#">Career</a>
    <a href="#">Blog</a>
  </div>
  </div>
  <div className="copydiv">
    <p className="copy">Copyright © 2026 arecom. All Rights Reseved.</p>
  </div>
</footer>

    </>
  )
}

export default Shop
