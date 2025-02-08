type PaginationProps = {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
  };
  
  const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setCurrentPage }) => {
    return (
      <div className="flex justify-center mt-6">
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num + 1}
            className={`px-3 py-1 mx-1 ${currentPage === num + 1 ? "bg-red-600 text-white" : "bg-gray-200"} rounded`}
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  