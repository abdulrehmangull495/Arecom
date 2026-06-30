import { useState, useEffect } from "react";
import "./ScrollToTop.css"
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      className={`scroll-btn ${visible ? "show" : ""}`}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;