import { useState } from "react";
import ProductCard from "./ProductCard";
import FilterSection from "./Filters";
import SortDropdown from "./Sorting";
import Pagination from "./Pagination";
import  allProducts  from "../context/Data";

interface ProductListingProps {
  addToCart: (product: any) => void;
  addToWishList: (product: any) => void;
}

const ProductListing = ({ addToCart, addToWishList }: ProductListingProps) => {
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
