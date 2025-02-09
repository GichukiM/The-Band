import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import WishIcon from "./WishIcon";
import CartModal from "./CartModal";
import WishListModal from "./WishListModal";

interface NavbarProps {
  cart: any[];
  wishList: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  setWishList: React.Dispatch<React.SetStateAction<any[]>>;
}

const Navbar = ({ cart, setCart, wishList, setWishList }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWishListModalOpen, setIsWishListModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const removeFromWishList = (id: number) => {
    setWishList((prevWishList) => prevWishList.filter((item) => item.id!== id));
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleWishListModal = () => {
    setIsWishListModalOpen((prev) =>!prev);
  };

  const openCartModal = () => {
    setIsModalOpen(true); // Opens the cart modal
  };

  const openWishListModal = () => {
    setIsWishListModalOpen(true); // Opens the wishlist modal
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 0);
      setIsVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`transition-all duration-300 ${
            hasScrolled ? "shadow-md bg-white" : "shadow-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              className={`flex items-center bg-white justify-between py-4 font-medium`}
            >
              {/* Logo */}
              <div className="text-2xl font-bold text-red-600">
                <Link to="/">The Band Store</Link>
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex gap-6 text-lg">
                <li>
                  <Link to="/" className="hover:text-red-600 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="hover:text-red-600 transition">
                    Admin
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-red-600 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-red-600 transition">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Cart Icon & Mobile Menu Button */}
              <div className="flex items-center gap-4">
                <CartIcon cartCount={cart.length} onClick={openCartModal} />
                <WishIcon wishCount={wishList.length} onClick={openWishListModal}/>

                {/* Mobile Menu Button */}
                <button onClick={() => setMenuOpen(true)} className="md:hidden">
                  <FaBars className="text-2xl text-gray-700" />
                </button>
              </div>
            </nav>
          </div>
        </div>
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
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-600 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-600 transition"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-600 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Cart Modal */}
      {isModalOpen && (
        <CartModal
          cartItems={cart}
          removeFromCart={removeFromCart}
          closeModal={toggleModal}
        />
      )}
      {/* Cart Modal */}
      {isWishListModalOpen && (
        <WishListModal
          wishListItems={wishList}
          removeFromWishList={removeFromWishList}
          closeWishListModal={toggleWishListModal}
        />
      )}
    </>
  );
};

export default Navbar;
