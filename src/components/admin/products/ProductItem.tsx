import { Product, useProduct } from "../../../context/ProductContext";
import { useState } from "react";
import ProductForm from "./ProductForm";

const ProductItem = ({ product }: { product: Product }) => {
  const { deleteProduct } = useProduct();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow">
      {isEditing ? (
        <ProductForm product={product} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
          <h3 className="text-lg font-bold mt-2">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-sm text-gray-500">Stock: {product.stock}</p>
          <div className="mt-3 flex justify-between">
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductItem;
