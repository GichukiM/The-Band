import { useProduct } from "../../../context/ProductContext";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products } = useProduct();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
