import { IoMdArrowDropdown } from "react-icons/io";

type FilterSectionProps = {
  showFilter: boolean;
  setShowFilter: (value: boolean) => void;
  filter: string[];
  handleFilterChange: (category: string) => void;
};

const FilterSection: React.FC<FilterSectionProps> = ({
  showFilter,
  setShowFilter,
  filter,
  handleFilterChange,
}) => {
  return (
    <div className="min-w-60">
      <p
        onClick={() => setShowFilter(!showFilter)}
        className="my-2 text-xl flex items-center cursor-pointer gap-2"
      >
        CATEGORIES
        <IoMdArrowDropdown className={`h-8 ${showFilter ? "rotate-180" : ""}`} />
      </p>

      <div className={`border border-gray-300 pl-5 py-5 mt-6 ${showFilter ? "" : "hidden"} block`}>
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
  );
};

export default FilterSection;
