import { useState } from "react";
import { FaHeart, FaShareAlt, FaStar, FaRegStar } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

// Define the Product type
type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  category: string;
  image: string;
  description: string;
  numberOfRatings: number; // Added number of ratings
};

// Actual product data as JSON
const productsData: Product[] = [
  {
    id: 1,
    name: "Smartphone X",
    price: 799.99,
    rating: 4.5,
    category: "Electronics",
    image: "/TheBand-SmartPhone.jpg",
    description: "A high-end smartphone with advanced features.",
    numberOfRatings: 20,
  },
  {
    id: 2,
    name: "Laptop Pro",
    price: 1299.99,
    rating: 4.7,
    category: "Electronics",
    image: "/TheBand-Laptop.jpg",
    description: "Powerful laptop for professionals and gamers.",
    numberOfRatings: 15,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 199.99,
    rating: 4.3,
    category: "Electronics",
    image: "/TheBand-HeadPhones.jpg",
    description: "Noise-cancelling headphones with long battery life.",
    numberOfRatings: 30,
  },
  {
    id: 4,
    name: "Men's T-Shirt",
    price: 29.99,
    rating: 4.0,
    category: "Clothing",
    image: "/TheBand-MenTshirt.jpg",
    description: "Comfortable and stylish t-shirt for men.",
    numberOfRatings: 25,
  },
  {
    id: 5,
    name: "Women's Dress",
    price: 59.99,
    rating: 4.2,
    category: "Clothing",
    image: "/TheBand-WomenDress.jpg",
    description: "Elegant dress for women, perfect for any occasion.",
    numberOfRatings: 18,
  },
  {
    id: 6,
    name: "Leather Wallet",
    price: 49.99,
    rating: 4.4,
    category: "Accessories",
    image: "/TheBand-Wallet.jpg",
    description: "Premium leather wallet with multiple compartments.",
    numberOfRatings: 22,
  },
  {
    id: 7,
    name: "Smart Watch",
    price: 249.99,
    rating: 4.6,
    category: "Electronics",
    image: "/TheBand-SmartWatch.jpg",
    description: "Smartwatch with fitness tracking and notifications.",
    numberOfRatings: 28,
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 99.99,
    rating: 4.1,
    category: "Accessories",
    image: "/TheBand-Sunglasses.jpg",
    description: "Stylish sunglasses with UV protection.",
    numberOfRatings: 12,
  },
];

// Helper function to truncate description to 5 words
const truncateDescription = (description: string): string => {
  const words = description.split(" ");
  return words.slice(0, 5).join(" ") + (words.length > 5 ? "..." : "");
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

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [sort, setSort] = useState("");
  const productsPerPage = 8;

  const handleFilterChange = (category: string) => {
    setFilter((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  const filteredProducts = products.filter((p) =>
    filter.length ? filter.includes(p.category) : true
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* Product Grid */}
      <div className="flex-1">
        {/* Filters and Sort Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between text-base sm:text-2xl mb-4">
          {/* Filters Section */}
          <div className="min-w-60">
            <p
              onClick={() => setShowFilter(!showFilter)}
              className="my-2 text-xl flex items-center cursor-pointer gap-2"
            >
              FILTERS
              <IoMdArrowDropdown
                className={`h-8 ${showFilter ? "rotate-180" : ""}`}
              />
            </p>

            <div
              className={`border border-gray-300 pl-5 py-5 mt-6 ${
                showFilter ? "" : "hidden"
              } block`}
            >
              <p className="mb-3 text-sm font-medium">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {["Electronics", "Clothing", "Accessories"].map((category) => (
                  <p key={category} className="flex gap-2">
                    <input
                      type="checkbox"
                      className="flex gap-2"
                      value={category}
                      onChange={() => handleFilterChange(category)}
                      checked={filter.includes(category)}
                    />
                    {category}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Sort by Price Dropdown */}
          <select
            onChange={handleSortChange}
            className="border-2 border-gray-300 text-md px-2 sm:px-2 py-4 sm:py-2 sm:text-sm"
          >
            <option value="">Sort by: Relevant</option>
            <option value="price-asc">Sort by: Low to High</option>
            <option value="price-desc">Sort by: High to Low</option>
          </select>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-2xl">
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
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          {[
            ...Array(Math.ceil(sortedProducts.length / productsPerPage)).keys(),
          ].map((num) => (
            <button
              key={num + 1}
              className={`px-3 py-1 mx-1 ${
                currentPage === num + 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-200"
              } rounded`}
              onClick={() => setCurrentPage(num + 1)}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
