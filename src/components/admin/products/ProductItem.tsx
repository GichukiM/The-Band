import { Product, useProduct } from "../../../context/ProductContext";
import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";

const ProductItem = ({ product }: { product: Product }) => {
  const { deleteProduct } = useProduct();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  return (
    <div className="border p-4 rounded-lg shadow">
      {isEditing ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            <ProductForm product={updatedProduct} onClose={() => setIsEditing(false)} />
          </div>
        </div>
      ) : (
        <>
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
          <h3 className="text-lg font-bold mt-2">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-gray-600">Rating: {product.rating}</p>
          <p className="text-gray-600">Category: {product.category}</p>
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
