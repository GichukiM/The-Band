import { FaHeart, FaShareAlt, FaStar, FaRegStar } from "react-icons/fa";

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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4 shadow-2xl">
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
      <div className="flex justify-between mt-4">
        <FaHeart className="text-red-500 cursor-pointer" />
        <FaShareAlt className="text-blue-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ProductCard;
