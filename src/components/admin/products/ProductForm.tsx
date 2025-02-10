import { useForm } from "react-hook-form";
import { Product, useProduct } from "../../../context/ProductContext";
import { useEffect } from "react";

interface ProductFormProps {
  product?: Product;
  onClose: () => void;
}

const ProductForm = ({ product, onClose }: ProductFormProps) => {
  const { addProduct, updateProduct } = useProduct();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Product>({
    defaultValues: product || {
      name: "",
      price: 0,
      stock: 0,
      description: "",
      image: "",
      numberOfRatings: 0,
      rating: 0,
      category: "",
    },
  });

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("price", product.price);
      setValue("stock", product.stock);
      setValue("description", product.description);
      setValue("image", product.image);
      setValue("numberOfRatings", product.numberOfRatings);
      setValue("rating", product.rating);
      setValue("category", product.category);
    }
  }, [product, setValue]);

  const onSubmit = (data: Product) => {
    if (product) {
      updateProduct(product.id, data);
    } else {
      addProduct(data);
    }
    onClose(); // Close the form after submitting
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white shadow rounded">
      <div className="mb-4">
        <input
          {...register("name", { required: "Product name is required" })}
          placeholder="Product Name"
          className="w-full p-2 border rounded"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>

      <div className="mb-4">
        <input
          {...register("price", { required: "Product price is required" })}
          placeholder="Product Price"
          type="number"
          className="w-full p-2 border rounded"
        />
        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
      </div>

      <div className="mb-4">
        <input
          {...register("stock", { required: "Product stock is required" })}
          placeholder="Product Stock"
          type="number"
          className="w-full p-2 border rounded"
        />
        {errors.stock && <span className="text-red-500 text-sm">{errors.stock.message}</span>}
      </div>

      <div className="mb-4">
        <input
          {...register("description", { required: "Product description is required" })}
          placeholder="Product Description"
          className="w-full p-2 border rounded"
        />
        {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}

      </div>

      <div className="mb-4">
        <input
          {...register("image", { required: "Product image is required" })}
          placeholder="Product Image URL"
          className="w-full p-2 border rounded"
        />
        {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
      </div>

      <div className="mb-4">
        <input
          {...register("numberOfRatings", { required: "Number of ratings is required" })}
          placeholder="Number of Ratings"
          type="number"
          className="w-full p-2 border rounded"
        />
        {errors.numberOfRatings && <span className="text-red-500 text-sm">{errors.numberOfRatings.message}</span>}
      </div>

      <div className="mb-4">
        <input
          {...register("rating", { required: "Product rating is required" })}
          placeholder="Product Rating"
          type="number"
          className="w-full p-2 border rounded"
        />
        {errors.rating && <span className="text-red-500 text-sm">{errors.rating.message}</span>}
      </div>

      <div className="mb-4">
        <input
          {...register("category", { required: "Product category is required" })}
          placeholder="Product Category"
          className="w-full p-2 border rounded"
        />
        {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
      </div>

      

      <div className="flex justify-between mt-4">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          {product ? "Update Product" : "Add Product"}
        </button>
        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
