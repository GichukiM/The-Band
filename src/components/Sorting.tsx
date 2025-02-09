type SortDropdownProps = {
    handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  };
  
  const SortDropdown: React.FC<SortDropdownProps> = ({ handleSortChange }) => {
    return (
      <select
        onChange={handleSortChange}
        className="border-2 border-gray-300 text-md px-2 sm:px-2 py-4 sm:py-2 sm:text-sm"
      >
        <option value="">Sort by: Price</option>
        <option value="price-asc">Sort by: Low to High</option>
        <option value="price-desc">Sort by: High to Low</option>
      </select>
    );
  };
  
  export default SortDropdown;
  