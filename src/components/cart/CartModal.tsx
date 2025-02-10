import React from 'react';
import { FaTimes } from 'react-icons/fa';

type CartModalProps = {
  cartItems: { id: number; name: string; price: number; image: string }[];
  removeFromCart: (id: number) => void;
  closeModal: () => void;
};

const CartModal: React.FC<CartModalProps> = ({ cartItems, removeFromCart, closeModal }) => {
  return (
    <div className="fixed top-0 right-0 bg-white w-3/4 sm:w-1/4 md:w-1/2 h-full shadow-lg p-4 z-50">
      <button
        onClick={closeModal}
        className="absolute top-4 cursor-pointer right-4 text-xl text-gray-700"
      >
        <FaTimes />
      </button>
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
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
                onClick={() => removeFromCart(item.id)}
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

export default CartModal;
