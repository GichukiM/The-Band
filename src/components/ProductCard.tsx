import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

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
  addToWishList: (product: any) => void;
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

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
  addToWishList,
}) => {
  return (
    <div className="border border-gray-200 bg-white p-2 shadow-sm">
      <Link to={`/product/${product.id}`}>
        {/* Product Image */}
        <div className="h-56 w-full">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="pt-6">
          {/* Product Name */}
          <h3 className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
            {product.name}
          </h3>

          {/* Product Price */}
          <p className="text-2xl font-extrabold leading-tight text-gray-900">
            Ksh. {product.price}
          </p>

          {/* Product Description */}
          <p className="text-gray-600 text-sm mt-2">
            {truncateDescription(product.description)}
          </p>

          {/* Product Rating */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-sm text-gray-600">
              ({product.rating.toFixed(1)}) ({product.numberOfRatings})
            </span>
          </div>
        </div>
      </Link>

      {/* Price and Add to Cart Button */}
      <div className="mt-4 flex items-center gap-6">
        <div className="bg-red-600 items-center flex justify-center h-8 w-8 rounded-full">
          <FaHeart
            onClick={() => addToWishList(product)}
            className="items-center justify-center text-white cursor-pointer"
          />
        </div>
        <div className="bg-red-600 items-center flex justify-center h-8 w-8 rounded-full">
          <FaShoppingCart
            onClick={() => addToCart(product)}
            className="items-center flex justify-center text-white cursor-pointer                                                                                                                                                                                                                                                                                                                                                                                                                                                  "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
