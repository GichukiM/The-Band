import { useState } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

const ProductManagement = () => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <button onClick={() => setIsAdding(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
        + Add Product
      </button>
      {isAdding && <ProductForm onClose={() => setIsAdding(false)} />}
      <ProductList />
    </div>
  );
};

export default ProductManagement;
