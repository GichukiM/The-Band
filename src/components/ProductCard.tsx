import { FaHeart, FaShareAlt, FaStar, FaRegStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: number;
    rating: number;
    category: string;
    image: string;
    description: string;
    numberOfRatings: number;
  };
  addToCart: (product: any) => void;
};

// Helper function to render star ratings
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const partialStar = rating - fullStars;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i === fullStars + 1 && partialStar > 0) {
      stars.push(
        <div key={i} className="relative inline-block">
          <FaRegStar className="text-yellow-500" />
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: `${partialStar * 100}%` }}
          >
            <FaStar className="text-yellow-500" />
          </div>
        </div>
      );
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }

  return stars;
};

// Helper function to truncate description
const truncateDescription = (description: string): string => {
  const words = description.split(" ");
  return words.slice(0, 5).join(" ") + (words.length > 5 ? "..." : "");
};

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="p-4 shadow-2xl">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 p-0"
        />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-700">Ksh. {product.price.toFixed(2)}</p>
        <p className="text-gray-600 text-sm">
          {truncateDescription(product.description)}
        </p>
        <div className="flex items-center mt-2 space-x-2">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-sm text-gray-600">
            ({product.rating.toFixed(1)}) ({product.numberOfRatings})
          </span>
        </div>
      </Link>
      <div className="flex justify-between mt-4">
        <div className="flex space-x-4">
          <div className="h-8 w-8 rounded-full p-2 bg-gray-100">
            <FaHeart className="text-red-500 cursor-pointer" />
          </div>
          <div className="h-8 w-8 rounded-full p-2 bg-gray-100">
            <FaShoppingCart className="text-blue-950 cursor-pointer" onClick={() => addToCart(product)} />
          </div>
        </div>
        <div className="h-8 w-8 rounded-full p-2 bg-gray-100">
          <FaShareAlt className="text-blue-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
