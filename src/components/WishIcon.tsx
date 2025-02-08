import { FaHeart } from "react-icons/fa6";

const WishIcon = () => {
  return (
    <div className="relative cursor-pointer">
      <FaHeart className="text-2xl text-gray-700" />
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
        0
      </span>
    </div>
  );
};

export default WishIcon;
