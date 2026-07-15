import React from 'react';
import Button from "@mui/material/Button";
const cardButtonStyle = {
  background: "linear-gradient(45deg, #ff6a00, #ffb347)",
  color: "#fff",
  padding: "10px 22px",
  fontWeight: "bold",
  borderRadius: "12px",
  textTransform: "none",
  boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
  "&:hover": {
    background: "linear-gradient(45deg, #ff5a00, #ffa500)",
    boxShadow: "0 8px 22px rgba(0,0,0,0.3)",
  },
};
const Shopproductcart = ({image, alt, title, price, className, onAddToCart}) => {
  return (
    <>
    <div className='product-card'>
        <div className='className'>
        <img className={className.replace("div","")} src={image} alt={alt} />
        {/* <img className={className.replace("div", "")} src={image} alt={alt} /> */}
        <h6 className='imgtitle'>{title}</h6>
        <h6 className='price'>{price}</h6>
         <Button variant="contained" sx={cardButtonStyle} onClick={onAddToCart}>
          Add to Cart
        </Button>
</div>
    </div>

    
    </>
  );
}

export default Shopproductcart;
