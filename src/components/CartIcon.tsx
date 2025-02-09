import { FaShoppingCart } from 'react-icons/fa';

type CartIconProps = {
  cartCount: number;
  onClick: () => void;
};

const CartIcon: React.FC<CartIconProps> = ({ cartCount, onClick }) => {
  return (
    <div className="relative cursor-pointer">
      <FaShoppingCart className="text-2xl text-gray-700" onClick={onClick} />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
