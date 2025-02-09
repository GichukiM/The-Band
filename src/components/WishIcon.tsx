import React from "react";
import { FaHeart } from "react-icons/fa6";

type WishIconProps = {
  wishCount: number;
  onClick: () => void;
};

const WishIcon: React.FC<WishIconProps> = ({ wishCount, onClick }) => {
  return (
    <div className="relative cursor-pointer">
      <FaHeart className="text-2xl text-gray-700" onClick={onClick} />
      {wishCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
          {wishCount}
        </span>
      )}
    </div>
  );
};

export default WishIcon;
