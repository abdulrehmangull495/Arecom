import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
const MotionNavLink = motion(NavLink);
const products = [
  {
    image: "shinydress.png",
    alt: "Shiny Dress",
    title: "Shiny Dress",
    price: "PKR 4999",
    className: "shinydressdiv",
  },
  {
    image: "longdress.png",
    alt: "Long Dress",
    title: "Long Dress",
    price: "PKR 4599",
    className: "longdressdiv",
  },
  {
    image: "fullsweater.png",
    alt: "Full Sweater",
    title: "Full Sweater",
    price: "PKR 3999",
    className: "fullsweaterdiv",
  },
  {
    image: "whitedress.png",
    alt: "whitedress",
    title: "White Dress",
    price: "PKR 3999",
    className: "whitedressdiv",
  },
  {
    image: "colorfulldress.png",
    alt: "colorfulldress",
    title: "Colorful Dress",
    price: "PKR 3999",
    className: "colorfulldressdiv",
  },
  {
    image: "whiteshirt.png",
    alt: "whiteshirt",
    title: "White Shirt",
    price: "PKR 3999",
    className: "whiteshirtdiv",
  },
];
const Home = () => {
  return (
    <>
      <main>
        <div className="herosection">
          <div className="container herosectiondiv">
            <div>
              <motion.div
                className="firstboy"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}>
                <img className="firstboyimg" src="image228.png" alt="" />
              </motion.div>
            </div>
            <div className="ultimatesection">
              <motion.img
                className="girlsimg"
                src="images.png"
                alt=""
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}/>
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                ULTIMATE SALE
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}>
                New Collection
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}>
                <NavLink to="/shop" className="btnshopnow">
                  Shop Now
                </NavLink>
              </motion.div>
              <motion.img
                className="girlsimgpink"
                src="image.png"
                alt="girlimg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}/>
            </div>
            <motion.div
              className="brownboy"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <img className="brownboyimg" src="img227.png" alt="boy" />
            </motion.div>
          </div>
        </div>
        <motion.div className="logosection">
          
          <motion.div
            className="logosection"
            animate={{
              x: ["100%", "-100%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <img src="chanellogo.png" alt="chanellogo" />
            <img src="louislogo.png" alt="louislogo" />
            <img src="pradalogo.png" alt="pradalogo" />
            <img src="denim.png" alt="denim" />
            <img src="calvinklein.png" alt="calvinklein" />
          </motion.div>
        </motion.div>

        <motion.div className="lastdatesection">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }} >
            <div className="dealssection">
              <h3 className="dealsof">Deals Of The Month</h3>
              <p className="exc">
                Don't miss this month's exclusive offers. Shop now and enjoy
                special prices for a limited time.
              </p>
              <div>
                <NavLink to="/shop" className="btnshopnow">
                  Shop Now
                </NavLink>
              </div>
              <h3 className="hurry">Hurry, Before It's Too Late!</h3>
            </div>
          </motion.div>
          <motion.div
            className="mixgirlimg"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}>
            <img className="blackgirlimg" src="blackgirl.png" alt="blackgirl" />
            <img className="bluegirlimg" src="bluegirl.png" alt="bluegirl" />
          </motion.div>
        </motion.div>
        <motion.div className="newarrivalsection">
          <motion.div className="newarrivals"
           initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}>
            <h1 className="newarrival">New Arrivals</h1>
            <p className="justdropped">
              New arrivals just dropped! Shop now and be the first to get the
              latest products.
            </p>
          </motion.div>
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
                }}>
              View More
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="peakysectionhome"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}>
          <div>
            <img className="girlside" src="girlsidepose.png" alt="girlside" />
          </div>
          <div className="Peakyblinders">
            <h6 className="womencollection mb-0">Women Collection</h6>
            <h4 className="Peakyblinders mb-0">Peaky Blinders</h4>
            <h6 className="desc mb-0">DESCRIPTION</h6>
            <p className="ourpeaky mb-0">
              Shop our Peaky Blinders Women Collection and elevate your wardrobe
              with exclusive, stylish pieces.
            </p>
            <div className="sizediv">
              <p>Size:</p>
              <p className="m">M</p>
            </div>
            <p className="hundred">$100.00</p>
            <NavLink to="/shop" className="btnshopnow">
              Shop Now
            </NavLink>
          </div>
        </motion.div>
        <motion.div
          className="fouritemsdiv"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}>
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
        </motion.div>
        <motion.div
          className="lastsection"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}>
          <div>
            <img src="camelcoat.png" className="camelcoatpic" alt="camelcoat" />
          </div>
          <div className="subsdiv">
            <h6 className="subscribeto">Subscribe To Our Newsletter</h6>
            <p className="getthe">
              Be the first to know about new products, offers and discounts.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"/>
            <div>
              <button className="subsnow">Subscribe Now</button>
            </div>
          </div>
          <div>
            <img
              src="darkgreycoat.png"
              className="darkgreycoatpic"
              alt="darkgreycoat"/>
          </div>
        </motion.div>
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default Home;
