import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  numberOfRatings: number;
  category: string;
}

interface ProductDetailProps {
  addToCart: (product: Product) => void;
  addToWishList: (product: Product) => void;
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
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);

        // Fetch recommended products
        const resAll = await fetch("http://localhost:5000/products");
        const allProducts: Product[] = await resAll.json();
        setRecommendedProducts(
          allProducts
            .filter((p) => p.category !== data.category)
            .slice(0, 4)
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h1 className="text-center mt-10 text-gray-500">Loading...</h1>;
  }

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-red-500">Product not found</h1>
    );
  }

  return (
    <div className="p-6">
      {/* Product Details Section */}
      <section className="py-8 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            {/* Left: Product Image */}
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Product Details */}
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                {product.name}
              </h1>

              {/* Price & Rating */}
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
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
                  className="py-2.5 px-5 text-sm font-medium text-white bg-red-700 hover:bg-red-400 rounded-lg"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => addToWishList(product)}
                  className="py-2.5 px-5 mt-4 sm:mt-0 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 rounded-lg"
                >
                  Add to Wishlist
                </button>
              </div>

              <hr className="my-6 md:my-8 border-gray-200" />

              <p className="mb-6 text-gray-500">{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-8 antialiased md:py-12">
        <div className="px-4 2xl:px-0">
          <h2 className="text-2xl font-semibold text-gray-900">
            Recommended Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 pt-10">
            {recommendedProducts.map((recommendedProduct) => (
              <div
                key={recommendedProduct.id}
                className="border border-gray-200 bg-white p-2 shadow-sm"
              >
                <Link to={`/product/${recommendedProduct.id}`}>
                  <div className="h-56 w-full">
                    <img
                      src={recommendedProduct.image}
                      alt={recommendedProduct.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="pt-6">
                    <p className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
                      {recommendedProduct.name}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      {recommendedProduct.category}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex">
                        {renderStars(recommendedProduct.rating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({recommendedProduct.rating.toFixed(1)}) (
                        {recommendedProduct.numberOfRatings})
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900">
                        Ksh. {recommendedProduct.price}
                      </p>
                      <button
                        onClick={() => addToCart(recommendedProduct)}
                        className="inline-flex items-center rounded-lg bg-red-700 px-2 py-2.5 text-sm font-medium text-white hover:bg-red-800"
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
