import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [wishList, setWishList] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  const addToWishList = (product: any) => {
    setWishList((prevWishList) => {
      const existingProduct = prevWishList.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevWishList;
      }
      return [...prevWishList, product];
    });
  };

  const companyInfo =
    "Leading e-commerce platform providing top-quality products at the best prices.";

  const contactInfo = {
    email: "support@example.com",
    phone: "+123 456 7890",
    address: "123 Street, City, Country",
  };

  const socialLinks = [
    { id: 1, icon: <FaFacebookF />, href: "https://facebook.com" },
    { id: 2, icon: <FaTwitter />, href: "https://twitter.com" },
    { id: 3, icon: <FaInstagram />, href: "https://instagram.com" },
    { id: 4, icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  ];

  return (
    <Router>
      <div className="w-full">
        <div className="px-3 sm:px-[4vw] md:px-[5vw] lg:px-[7vw]">
          <Navbar cart={cart} setCart={setCart} wishList={wishList} setWishList={setWishList} />
          <div className="h-24"></div>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} addToWishList={addToWishList} />} />
            <Route
              path="/products"
              element={<h1 className="text-center mt-10">Products Page</h1>}
            />
            <Route
              path="/about"
              element={<h1 className="text-center mt-10">About Us</h1>}
            />
            <Route
              path="/contact"
              element={<h1 className="text-center mt-10">Contact</h1>}
            />
          </Routes>
          <Footer
            companyInfo={companyInfo}
            contactInfo={contactInfo}
            socialLinks={socialLinks}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
