import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="herosection">
        <div className="container herosectiondiv">
          <div>
            <div className="firstboy">
              <img className="firstboyimg" src="image228.png" alt="" />
            </div>
          </div>
          <div className="ultimatesection">
            <img className="girlsimg" src="images.png" alt="" />
            <h1 className="ulti">ULTIMATE</h1>
            <h1 className="sale">SALE</h1>
            <h1 className="newcollection">New Collection</h1>
            <button className="btnshopnow">Shop Now</button>
            <img className="girlsimgpink" src="image.png" alt="" />
          </div>
          <div>
            <div className="brownboy">
              <img className="brownboyimg" src="img227.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="logosection">
        <img src="chanellogo.png" alt="" />
        <img src="louislogo.png" alt="" />
        <img src="pradalogo.png" alt="" />
        <img src="denim.png" alt="" />
        <img src="calvinklein.png" alt="" />
      </div>
      <div className="lastdatesection">
        <div>
          <h3 className="dealsof">Deals Of The Month</h3>
          <p className="lorem">
           Exclusive deals of the month. Shop now and enjoy special prices before they’re gone.
          </p>
          <button className="buynow">Buynow</button>
          <h3 className="hurry">Hurry, Before It’s Too Late!</h3>
        </div>
        <div className="mixgirlimg">
          <img className="blackgirlimg" src="blackgirl.png" alt="" />
          <img className="bluegirlimg" src="bluegirl.png" alt="" />
          {/* <img className='whiteshirtgirlimg' src="whiteshirtgirl.png" alt="" /> */}
        </div>
        {/* <div className='prenexdiv'>
              <img className='previousimg' src="previous.png" alt="" />
              <img className='nextimg' src="next.png" alt="" />
            </div> */}
        {/* <div>
                
            </div> */}
      </div>

      <div className="newarrivalsection">
        <div className="newarrivals">
          <h1 className="newarrival">New Arrivals</h1>
          <p className="lor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin{" "}
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
        <p className="sit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
        <div className="followsecimg">
          <img  className="browncoat" src="brown coat.png" alt="" />
          <img  className="blueheel" src="blueheel.png" alt="" />
          <img  className="greydress" src="greydress.png" alt="" />
          <img  className="redpant" src="red pant.png" alt="" />
          <img  className="blackcoat" src="black coat.png" alt="" />
          <img  className="blackgirl" src="blackgirl.png" alt="" />
          <img  className="redfull" src="redfull.png" alt="" />
          {/* <img  className="redfull" src="redfull.png" alt="" /> */}
          {/* <img  className="redfull" src="redfull.png" alt="" /> */}
        </div>
      </div>
      <div className="thisissection">
        <h6 className="is">This Is What Our Customers Say</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
        <div className="cardbox">
          <div className="card1">
            <div className="d-flex blacktshirtsec p-5">
              <img className="blacktshirt" src="blacktshirt.png" alt="" />
            
                 {/* <div className="">
                  <h3>James K.</h3>
                 <p>Traveler</p>
                 </div>
               
                 <hr className="hrcard1"/> */}
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
              <img className="blacktshirt" src="yellowshirt.png" alt="" />
            
                 
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
          <h5 className="news">Subscribe To Our Newsletter</h5>
          <p className="amet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Neque iure dignissimos illum, vero, error reiciendis amet magni
             explicabo assumenda corporis, eos eius.</p>
             <p>abdulrehmangull495@gmail.com</p>
             <div>
              <button className="subsnow">Subscribe Now</button>
             </div>

        </div>
        <div>
          <img src="darkgreycoat.png" className="darkgreycoat" alt="" />
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

export default Home;
