import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import FilterSection from "../filters/Filters";
import SortDropdown from "../filters/Sorting";
import Pagination from "../filters/Pagination";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  category: string;
  image: string;
  description: string;
  numberOfRatings: number;
}

interface ProductListingProps {
  addToCart: (product: { id: number; name: string; price: number; category: string }) => void;
  addToWishList: (product: { id: number; name: string; price: number; category: string }) => void;
}

const ProductListing = ({ addToCart, addToWishList }: ProductListingProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [sort, setSort] = useState("");
  const productsPerPage = 8;

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (category: string) => {
    setFilter((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter((p) =>
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
              <ProductCard key={product.id} product={product} addToCart={addToCart} addToWishList={addToWishList} />
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
