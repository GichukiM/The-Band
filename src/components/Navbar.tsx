import { useState, useEffect } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="bg-white py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-red-600">
        <Link to="/">The Band Store</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg">
        <li>
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-red-600 transition">Products</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-red-600 transition">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
        </li>
      </ul>

      {/* Cart Icon & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <FaShoppingCart className="text-2xl text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
            0
          </span>
        </div>
        <div className="relative cursor-pointer">
          <FaHeart className="text-2xl text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
            0
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden">
          <FaBars className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-2xl text-gray-700"
        >
          <FaTimes />
        </button>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col items-start gap-6 text-lg p-8 mt-16">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-red-600 transition">Home</Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-red-600 transition">Products</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-red-600 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-red-600 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
