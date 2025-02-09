import { useForm } from "react-hook-form";
import { Product, useProduct } from "../../../context/ProductContext";

const ProductForm = ({ product, onClose }: { product?: Product; onClose: () => void }) => {
  const { addProduct, updateProduct } = useProduct();
  const { register, handleSubmit } = useForm<Product>({ defaultValues: product || { name: "", price: 0, stock: 0, description: "", image: "" } });

  const onSubmit = (data: Product) => {
    if (product) {
      updateProduct(product.id, data);
    } else {
      addProduct(data);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white shadow rounded">
      <input {...register("name")} placeholder="Product Name" className="w-full p-2 border rounded mb-2" required />
      <input type="number" {...register("price")} placeholder="Price" className="w-full p-2 border rounded mb-2" required />
      <input type="number" {...register("stock")} placeholder="Stock" className="w-full p-2 border rounded mb-2" required />
      <textarea {...register("description")} placeholder="Description" className="w-full p-2 border rounded mb-2" />
      <input {...register("image")} placeholder="Image URL" className="w-full p-2 border rounded mb-2" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
      <button onClick={onClose} className="ml-2 text-red-500">Cancel</button>
    </form>
  );
};

export default ProductForm;
