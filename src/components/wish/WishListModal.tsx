import React from 'react';
import { FaTimes } from 'react-icons/fa';

type wishListModalProps = {
  wishListItems: { id: number; name: string; image: string; price: number }[];
  removeFromWishList: (id: number) => void;
  closeWishListModal: () => void;
};

const wishListModal: React.FC<wishListModalProps> = ({ wishListItems, removeFromWishList, closeWishListModal }) => {
  return (
    <div className="fixed top-0 right-0 bg-white w-3/4 sm:w-1/4 md:w-1/2 h-full shadow-lg p-4 z-50">
      <button
        onClick={closeWishListModal}
        className="absolute top-4 cursor-pointer right-4 text-xl text-gray-700"
      >
        <FaTimes />
      </button>
      <h2 className="text-xl font-bold mb-4">Your Wish List</h2>
      <div className="space-y-4">
        {wishListItems.length === 0 ? (
          <p className="text-center text-gray-600">Your Wish List is empty.</p>
        ) : (
          wishListItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{item.name}</span>
                <span className="text-sm text-gray-600">Ksh. {item.price}</span>
              </div>
              <button
                onClick={() => removeFromWishList(item.id)}
                className="text-red-600 text-lg cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default wishListModal;
