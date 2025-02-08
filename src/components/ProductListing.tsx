import { useState } from "react";
import ProductCard from "./ProductCard";
import FilterSection from "./Filters";
import SortDropdown from "./Sorting";
import Pagination from "./Pagination";

const allProducts = [
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

const ProductListing = () => {
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

  const filteredProducts = allProducts.filter((p) =>
    filter.length ? filter.includes(p.category) : true
  );
  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sort === "price-asc"
      ? a.price - b.price
      : sort === "price-desc"
      ? b.price - a.price
      : 0
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between text-base sm:text-2xl mb-4">
          <FilterSection
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            filter={filter}
            handleFilterChange={handleFilterChange}
          />
          <SortDropdown handleSortChange={(e) => setSort(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedProducts
            .slice(
              (currentPage - 1) * productsPerPage,
              currentPage * productsPerPage
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductListing;
