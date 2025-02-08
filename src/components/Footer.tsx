import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white rounded-t-[45px]">
      {/* Newsletter Subscription */}
      <div className="bg-gray-800 py-6 rounded-t-[45px] text-center mb-6">
        <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
        <p className="text-sm text-gray-300">
          Get updates on new products and special offers.
        </p>
        <div className="mt-4 flex flex-wrap justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 text-black rounded-l-md w-60"
          />
          <button className="bg-yellow-500 px-4 py-2 rounded-r-md hover:bg-yellow-600">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <p className="text-gray-300 text-sm">
            Leading e-commerce platform providing top-quality products at the
            best prices.
          </p>
        </div>

        {/* Column 2: Contact Details */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-300 text-sm">Email: support@example.com</p>
          <p className="text-gray-300 text-sm">Phone: +123 456 7890</p>
          <p className="text-gray-300 text-sm">
            Address: 123 Street, City, Country
          </p>
        </div>

        {/* Column 3: Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        <p>
          Designed by <span className="text-white">Gichuki Muchiri</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
