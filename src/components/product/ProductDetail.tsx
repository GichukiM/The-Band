import { useParams } from "react-router-dom";
import allProducts from "../context/Data";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ProductDetailProps {
  addToCart: (product: { id: number; name: string; price: number; image: string; description: string; rating: number; numberOfRatings: number; category: string }) => void;
  addToWishList: (product: { id: number; name: string; price: number; image: string; description: string; rating: number; numberOfRatings: number; category: string }) => void;
}

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

const ProductDetail = ({ addToCart, addToWishList }: ProductDetailProps) => {
  const { id } = useParams<{ id: string }>(); // Ensure correct parameter name
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-red-500">Product not found</h1>
    );
  }

  // Filter products by different category and limit to 4
  const recommendedProducts = allProducts
    .filter((p) => p.category !== product.category)
    .slice(0, 4);

  return (
    <div className=" p-6">
      {/* Product Details Section */}
      <section className="py-8 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            {/* Left: Product Image */}
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full dark:hidden rounded-lg shadow-lg"
              />
              <img
                src={product.image}
                alt={product.name}
                className="w-full hidden dark:block rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Product Details */}
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                {product.name}
              </h1>

              {/* Price & Rating */}
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                  ${product.price}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm text-gray-600">
                    ({product.rating.toFixed(1)}) ({product.numberOfRatings})
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-900">{product.description}</p>

              {/* Buttons */}
              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-red-700 hover:bg-red-400 rounded-lg"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => addToWishList(product)}
                  className="flex items-center justify-center py-2.5 px-5 mt-4 sm:mt-0 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 rounded-lg focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Add to Wishlist
                </button>
              </div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-8 antialiased md:py-12">
        <div className="px-4 2xl:px-0">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Recommended Products
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 pt-10">
            {recommendedProducts.slice(0, 4).map((recommendedProduct) => (
              <div
                key={recommendedProduct.id}
                className="border border-gray-200 bg-white p-2 shadow-sm"
              >
                {/* Product Image */}
                <Link to={`/product/${recommendedProduct.id}`}>
                <div className="h-56 w-full">
                  <img
                    src={recommendedProduct.image}
                    alt={recommendedProduct.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="pt-6">
                  {/* Product Name */}
                  <a
                    href="#"
                    className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
                  >
                    {recommendedProduct.name}
                  </a>

                  {/* Product Category */}
                  <p className="mt-2 text-sm text-gray-500">
                    {recommendedProduct.category}
                  </p>

                  {/* Product Rating */}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex">
                      {renderStars(recommendedProduct.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({recommendedProduct.rating.toFixed(1)}) (
                      {recommendedProduct.numberOfRatings})
                    </span>
                  </div>

                  {/* Price and Add to Cart Button */}
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-extrabold leading-tight text-gray-900">
                      Ksh. {recommendedProduct.price}
                    </p>

                    <button
                      onClick={() => addToCart(recommendedProduct)}
                      className="inline-flex items-center rounded-lg bg-red-700 px-2 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
