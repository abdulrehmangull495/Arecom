import React from "react";
import { useState } from "react";
import "./shop.css";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Shopproductcart from "./Shopproductcart";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
const shopproduct=[
  {image:"roundedredhat.png", alt:"roundedredhat",title:"Rounded Red Hat", price:"PKR 1000", className:"btnalldiv" },
  {image:"LinenblendShirt.png", alt:"LinenblendShirt",title:"Linen-blend Shirt", price:"PKR 1000", className:"btnalldiv" },
  {image:"longsleevecoat.png", alt:"longsleevecoat",title:"Long Sleeve Coat", price:"PKR 5000", className:"btnalldiv" },
  {image:"denimhat.png", alt:"denimhat",title:"Denim Hat", price:"PKR 1000", className:"btnalldiv" },
  {image:"oversizedtshirt.png", alt:"oversizedtshirt",title:"Oversized T-shirt", price:"PKR 3000", className:"btnalldiv" },
  {image:"rockstarjacket.png", alt:"rockstarjacket",title:"Rockastar Jacket", price:"PKR 10000", className:"btnalldiv" },
  {image:"dottedblackdress.png", alt:"dottedblackdress",title:"Dotted Black Dress", price:"PKR 4,000", className:"btnalldiv" }
];
const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = shopproduct.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <motion.div className="fashiondiv"
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}>
        <h1>Fashion</h1>
        <div className="homefashion">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <p className="m-0">
            <img className="nxtbtimg" src="nextbt.png" alt="" />
            Fashion
          </p>
        </div>
      </motion.div>
      <div className="leftrightdiv">
        <motion.div className="myleftside" 
        initial={{opacity:0, x:-150}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.19}}>
          <h3>Filters</h3>
          <h3 className="size">Size</h3>
          <div className="box">
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
          </div>
          <div className="prices">
            <h3 className="price">Prices</h3>
            <p>0-999</p>
            <p>1000-1999</p>
            <p>2000-2900</p>
            <p>3000-3999</p>
            <p>4000-4999</p>
          </div>
          <label className="brandlabel" for="Brands">
            Choose a Brand:
          </label>
          <select id="Brand" name="Brand">
            <option value="Minimog">Minimog</option>
            <option value="Learts">Learts</option>
            <option value="Abby">Abby</option>
            <option value="Vagabond">Vagabond</option>
          </select>
          <div className="collection">
            <h3 className="collections">Collections</h3>
            <p>All Products</p>
            <p>Best Sellers</p>
            <p>New Arrivals</p>
            <p>Accessories</p>
          </div>
          <div className="tags">
            <h3>Tags</h3>
            <div className="tagsdiv">
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
        </motion.div>
        <div className="right">
          <motion.div className="searchbar"
          initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}>
  <input
  type="text"
  className="search-input"
  placeholder="Search products..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}/>
</motion.div>
          <motion.h6 className="bestselling"
          initial={{opacity:0, x:950}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.5}}
          >Best selling</motion.h6>
          <div className="imgssec">
            <div className="row">
              {/* <div className="col-lg-4 col-md-6 col-12 btnalldiv">
                <img src="roundedredhat.png" alt="" />
                <p className="imgtitle">Rounded Red Hat</p>

                <p>Rs.1,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", 
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", 
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "#ff6a00",
                      color: "#ffffff",
                      boxShadow: "0 8px 20px rgba(255, 106, 0, 0.25)",
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="col-lg-4 col-md-6 col-12 btnalldiv">
                <img src="LinenblendShirt.png" alt="" />
                <p className="imgtitle">Linen-blend Shirt</p>
                <p>Rs.1,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", 
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", 
                    cursor: "pointer",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      background: "#ff6a00",
                      color: "#ffffff",
                      boxShadow: "0 8px 20px rgba(255, 106, 0, 0.25)",
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="col-lg-4 col-md-6 col-12 btnalldiv">
                <img src="longsleevecoat.png" alt="" />
                <p className="imgtitle">Long Sleeve Coat</p>
                <p>Rs.1,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", 
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", 
                    cursor: "pointer",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      background: "#ff6a00",
                      color: "#ffffff",
                      boxShadow: "0 8px 20px rgba(255, 106, 0, 0.25)", 
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="col-lg-4 col-md-6 col-12 btnalldiv">
                <img src="denimhat.png" alt="" />
                <p className="imgtitle">Denim Hat</p>
                <p>Rs.1,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", 
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      background: "#ff6a00",
                      color: "#ffffff",
                      boxShadow: "0 8px 20px rgba(255, 106, 0, 0.25)", 
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="col-lg-4 col-md-6 col-12 btnalldiv">
                <img src="oversizedtshirt.png" alt="" />
                <p className="imgtitle">Oversized T-shirt</p>
                <p>Rs.1,500</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", 
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", 
                    cursor: "pointer",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      background: "#ff6a00",
                      color: "#ffffff",
                      boxShadow: "0 8px 20px rgba(255, 106, 0, 0.25)", 
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="col-lg-4 col-md-6 col-12 btnalldiv">
                <img src="rockstarjacket.png" alt="" />
                <p className="imgtitle">Rockastar Jacket</p>
                <p>Rs.10,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", 
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", 
                    cursor: "pointer",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      background: "#ff6a00",
                      color: "#ffffff",
                      boxShadow: "0 8px 20px rgba(255, 106, 0, 0.25)", // Soft clean glow sirf hover par
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="col-lg-4 col-md-6 col-12 btnalldiv">
                <img src="dottedblackdress.png" alt="" />
                <p className="imgtitle">Dotted Black Dress</p>
                <p>Rs.4,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", 
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", 
                    cursor: "pointer",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      background: "#ff6a00",
                      color: "#ffffff",
                      boxShadow: "0 8px 20px rgba(255, 106, 0, 0.25)", // Soft clean glow sirf hover par
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </div> */}
              {/* <div className="shop-page"> 
                {shopproduct.map((p)=>{
                  <ProductCard key={p.title}  {...p}/>
                })}
              </div> */}
              
              {/* <div className="shop-page">
              {shopproduct.map((p) => (
            <ProductCard key={p.title} {...p} />
            ))}
            
           
              </div> */}

              {/* <div className="shop-page">
                {shopproduct.map((p)=>(
                  <ProductCard key={p.title} {...p}/>
                    ))}

              </div> */}
              {/* <div className="shop-page">
  {filteredProducts.map((p) => (
    <ProductCard key={p.title} {...p} />
  ))}
</div> */}
      
     <div className="shop-page">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((p, index) => (
      <motion.div
        key={p.title}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}>
        <ProductCard {...p} />
      </motion.div>
    ))
  ):(
    <p className="no-results">No products found.</p>
  )}
</div>
               {/* {...p} iska seedha matlab hai: "p dabbay ke andar jitni bhi cheezein hain,
             sab automatically props bana do." Ek hi line mein sab kuch chala jata hai. */}
            </div>
          </div>
        </div>
      </div>

      <motion.div className="itsmypeakysection"
       initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}>
        <div>
          <img className="girlside" src="girlsidepose.png" alt="girlsidepose" />
        </div>
        <div className="Peakyblinders">
          <h6 className="womencollection mb-0">Women Collection</h6>
          <h4 className="Peakyblinders  mb-0">Peaky Blinders</h4>
          <h6 className="desc mb-0">DESCRIPTION</h6>
          <p className="shopover mb-0">
            Shop our Peaky Blinders Women Collection and elevate your wardrobe
            with exclusive, stylish pieces.
          </p>
          <div className="sizediv">
            <p>Size:</p>
            <p className="m">M</p>
          </div>
          <p className="hundred">$100.00</p>
          <NavLink to="/shop" className="btnshopnow" target="blank">
                           Shop Now
                     </NavLink>
        </div>
      </motion.div>
      <motion.div className="fouritemsdiv"
        initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
      >
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
            <img className="icon" src="ship.png" alt="shipicon" />
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
            <p className="mb-0 ">24 / 7 Support</p>
            <p className="mb-0 dedicated">Dedicated support</p>
          </div>
        </div>
      </motion.div>
      <div className="follow">
        <h6>Follow Us On Instagram</h6>
        <p className="stay">Stay updated with our latest products and offers.</p>
        <div className="followsecimg">
          <img className="browncoat" src="brown coat.png" alt="browncoat" />
          <img className="blueheel" src="blueheel.png" alt="blueheel" />
          <img className="greydress" src="greydress.png" alt="greydress" />
          <img className="redpant" src="red pant.png" alt="redpant" />
          <img className="blackcoat" src="black coat.png" alt="blackcoat" />
          <img className="blackgirl" src="blackgirl.png" alt="blackgirl" />
        </div>
      </div>
      <motion.div className="lastsectionscubs"
        initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }} >
        <div>
          <img src="camelcoat.png" className="camelcoatpic" alt="camelcoatpic" />
        </div>
        <div className="subsdiv">
          <h6 className="subscribeto">Subscribe To Our Newsletter</h6>
          <p className="getthe">Be the first to know about new products, offers and discounts.</p>
          <p>abdulrehmangull495@gmail.com</p>
          <div>
            <button className="subsnow">Subscribe Now</button>
          </div>
        </div>
        <div>
          <img src="darkgreycoat.png" className="darkgreycoatpic" alt="darkgreycoatpic" />
        </div>
      </motion.div>
 <ScrollToTop/>
      <Footer />
    </>
  );
};

export default Shop;
