import React from "react";
import "./shop.css";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
const Shop = () => {
  return (
    <>
      <div className="fashiondiv">
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
      </div>
      <div className="leftrightdiv">
        <div className="myleftside">
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
            <p>Best Sllers</p>
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
        </div>
        <div className="right">
          <h6 className="bestselling">Best selling</h6>
          <div className="imgssec">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 btnalldiv">
                <img src="roundedredhat.png" alt="" />
                <p className="imgtitle">Rounded Red Hat</p>

                <p>Rs.1,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", // Border width ki wajah se padding 1px kam ki hai
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", // Full rounded pill-shape button
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
                <img src="LinenblendShirt.png" alt="" />
                <p className="imgtitle">Linen-blend Shirt</p>
                <p>Rs.1,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", // Border width ki wajah se padding 1px kam ki hai
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", // Full rounded pill-shape button
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
                <img src="longsleevecoat.png" alt="" />
                <p className="imgtitle">Long Sleeve Coat</p>
                <p>Rs.1,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", // Border width ki wajah se padding 1px kam ki hai
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", // Full rounded pill-shape button
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
                <img src="denimhat.png" alt="" />
                <p className="imgtitle">Denim Hat</p>
                <p>Rs.1,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", // Border width ki wajah se padding 1px kam ki hai
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", // Full rounded pill-shape button
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
                <img src="oversizedtshirt.png" alt="" />
                <p className="imgtitle">Oversized T-shirt</p>
                <p>Rs.1,500</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", // Border width ki wajah se padding 1px kam ki hai
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", // Full rounded pill-shape button
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
                <img src="rockstarjacket.png" alt="" />
                <p className="imgtitle">Rockastar Jacket</p>
                <p>Rs.10,000</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    color: "#ff6a00",
                    border: "2px solid #ff6a00",
                    padding: "11px 24px", // Border width ki wajah se padding 1px kam ki hai
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", // Full rounded pill-shape button
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
                    padding: "11px 24px", // Border width ki wajah se padding 1px kam ki hai
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "30px", // Full rounded pill-shape button
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
            </div>
          </div>
        </div>
      </div>

      <div className="itsmypeakysection">
        <div>
          <img className="girlside" src="girlsidepose.png" alt="" />
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
          <img className="browncoat" src="brown coat.png" alt="" />
          <img className="blueheel" src="blueheel.png" alt="" />
          <img className="greydress" src="greydress.png" alt="" />
          <img className="redpant" src="red pant.png" alt="" />
          <img className="blackcoat" src="black coat.png" alt="" />
          <img className="blackgirl" src="blackgirl.png" alt="" />
          <img className="redfull" src="redfull.png" alt="" />
        </div>
      </div>

      <div className="lastsectionscubs">
        <div>
          <img src="camelcoat.png" className="camelcoatpic" alt="" />
        </div>
        <div className="subsdiv">
          <h6 className="subscribeto">Subscribe To Our Newsletter</h6>
          <p className="getthe">
            Be the first to know about new products, offers and discounts.
          </p>
          <p>abdulrehmangull495@gmail.com</p>
          <div>
            <button className="subsnow">Subscribe Now</button>
          </div>
        </div>
        <div>
          <img src="darkgreycoat.png" className="darkgreycoatpic" alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
