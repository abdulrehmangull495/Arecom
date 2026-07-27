import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ProductCard from "./ProductCard";

const products = [
  { image: "shinydress.png", alt: "Shiny Dress", title: "Shiny Dress", price: "PKR 4999", className: "shinydressdiv" },
  { image: "longdress.png", alt: "Long Dress", title: "Long Dress", price: "PKR 4599", className: "longdressdiv" },
  { image: "fullsweater.png", alt: "Full Sweater", title: "Full Sweater", price: "PKR 3999", className: "fullsweaterdiv" },
  { image: "whitedress.png", alt: "whitedress", title: "White Dress", price: "PKR 3999", className: "whitedressdiv" },
  { image: "colorfulldress.png", alt: "colorfulldress", title: "Colorful Dress", price: "PKR 3999", className: "colorfulldressdiv" },
  { image: "whiteshirt.png", alt: "whiteshirt", title: "White Shirt", price: "PKR 3999", className: "whiteshirtdiv" },
];

const Home = () => {
  return (
    <>
      <main>
        <div className="herosection">
          <div className="container herosectiondiv">
            <div>
              <div className="firstboy">
                <img className="firstboyimg" src="image228.png" alt="" />
              </div>
            </div>
            <div className="ultimatesection">
              <img className="girlsimg" src="images.png" alt="" />
              <h1 className="hero-title">ULTIMATE SALE</h1>
              <p className="hero-subtitle">New Collection</p>
              <NavLink to="/shop" className="btnshopnow">
                Shop Now
              </NavLink>
              <img className="girlsimgpink" src="image.png" alt="girlimg" />
            </div>
            <div>
              <div className="brownboy">
                <img className="brownboyimg" src="img227.png" alt="boy" />
              </div>
            </div>
          </div>
        </div>

        <div className="logosection">
          <img src="chanellogo.png" alt="chanellogo" />
          <img src="louislogo.png" alt="louislogo" />
          <img src="pradalogo.png" alt="pradalogo" />
          <img src="denim.png" alt="denim" />
          <img src="calvinklein.png" alt="calvinklein" />
        </div>

        <div className="lastdatesection">
          <div className="dealssection">
            <h3 className="dealsof">Deals Of The Month</h3>
            <p className="exc">
              Don't miss this month's exclusive offers. Shop now and enjoy special
              prices for a limited time.
            </p>
            <NavLink to="/shop" className="btnshopnow">
              Shop Now
            </NavLink>
            <h3 className="hurry">Hurry, Before It's Too Late!</h3>
          </div>
          <div className="mixgirlimg">
            <img className="blackgirlimg" src="blackgirl.png" alt="blackgirl" />
            <img className="bluegirlimg" src="bluegirl.png" alt="bluegirl" />
          </div>
        </div>

        <div className="newarrivalsection">
          <div className="newarrivals">
            <h1 className="newarrival">New Arrivals</h1>
            <p className="justdropped">
              New arrivals just dropped! Shop now and be the first to get the
              latest products.
            </p>
          </div>

          <div className="cards">
            <div className="card-row">
              {products.slice(0, 3).map((p) => (
                <ProductCard key={p.title} {...p} />
              ))}
            </div>
            <div className="card-row">
              {products.slice(3, 6).map((p) => (
                <ProductCard key={p.title} {...p} />
              ))}
            </div>
          </div>
          <div className="viewmorediv">
            <Button
              component={NavLink}
              to="/shop"
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #ff6a00, #ffb347)",
                color: "#fff",
                padding: "10px 22px",
                fontWeight: "bold",
                borderRadius: "12px",
                textTransform: "none",
                boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                "&:hover": {
                  background: "linear-gradient(45deg, #db895d, #d8a13a)",
                  boxShadow: "0 8px 22px rgba(0,0,0,0.3)",
                },
              }}
            >
              View More
            </Button>
          </div>
        </div>

        <div className="peakysectionhome">
          <div>
            <img className="girlside" src="girlsidepose.png" alt="girlside" />
          </div>
          <div className="Peakyblinders">
            <h6 className="womencollection mb-0">Women Collection</h6>
            <h4 className="Peakyblinders mb-0">Peaky Blinders</h4>
            <h6 className="desc mb-0">DESCRIPTION</h6>
            <p className="ourpeaky mb-0">
              Shop our Peaky Blinders Women Collection and elevate your wardrobe
              with exclusive, stylish pieces.</p>
            <div className="sizediv">
              <p>Size:</p>
              <p className="m">M</p>
            </div>
            <p className="hundred">$100.00</p>
            <NavLink to="/shop" className="btnshopnow">
              Shop Now
            </NavLink>
          </div>
        </div>
        <div className="fouritemsdiv">
          <div className="qualitydiv">
            <div>
              <img className="icon" src="support.png" alt="support" />
            </div>
            <div className="m-2">
              <p className="mb-0">High Quality</p>
              <p className="mb-0 crafted">crafted from top materials</p>
            </div>
          </div>
          <div className="warrentydiv">
            <div>
              <img className="icon" src="warrenty.png" alt="warrenty" />
            </div>
            <div className="m-2">
              <p className="mb-0">Warrany Protection</p>
              <p className="mb-0 over">Over 2 years</p>
            </div>
          </div>
          

          <div className="freediv">
            <div>
              <img className="icon" src="ship.png" alt="shipping" />
            </div>
            <div className="m-2">
              <p className="mb-0">Free Shipping</p>
              <p className="mb-0 order">Order over 150 $</p>
            </div>
          </div>
          <div className="calldiv">
            <div>
              <img className="icon" src="call.png" alt="call" />
            </div>
            <div className="m-2">
              <p className="mb-0">24 / 7 Support</p>
              <p className="mb-0 dedicated">Dedicated support</p>
            </div>
          </div>
        </div>
        <div className="lastsection">
          <div>
            <img src="camelcoat.png" className="camelcoatpic" alt="camelcoat" />
          </div>
          <div className="subsdiv">
            <h6 className="subscribeto">Subscribe To Our Newsletter</h6>
            <p className="getthe">
              Be the first to know about new products, offers and discounts.
            </p>
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <div>
              <button className="subsnow">Subscribe Now</button>
            </div>
          </div>
          <div>
            <img src="darkgreycoat.png" className="darkgreycoatpic" alt="darkgreycoat" />
          </div>
        </div>
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default Home;