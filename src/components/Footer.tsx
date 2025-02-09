
import { JSX } from "react";

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

interface SocialLink {
  id: number;
  icon: JSX.Element;
  href: string;
}

interface FooterProps {
  companyInfo: string;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ companyInfo, contactInfo, socialLinks }) => {
  return (
    <div className="absolute w-full bg-red-800 text-white left-0">
      {/* Newsletter Subscription */}
      <div className="bg-red-800 py-6 text-center mb-6">
        <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
        <p className="text-sm text-gray-300">Get updates on new products and special offers.</p>
        <div className="mt-4 flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 text-white border border-white  w-60"
          />
          <button className="bg-gray-900 px-4 py-2 border cursor-pointer hover:bg-gray-600">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <p className="text-gray-300 text-sm">{companyInfo}</p>
        </div>

        {/* Column 2: Contact Details */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-300 text-sm">Email: {contactInfo.email}</p>
          <p className="text-gray-300 text-sm">Phone: {contactInfo.phone}</p>
          <p className="text-gray-300 text-sm">Address: {contactInfo.address}</p>
        </div>

        {/* Column 3: Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex flex-row gap-4">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.href} className="text-gray-400 hover:text-white">
                {link.icon}
              </a>
            ))}
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
