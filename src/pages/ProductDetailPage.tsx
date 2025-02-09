import ProductDetail from "../components/product/ProductDetail";

interface ProductDetailPageProps {
  addToCart: (product: { id: number; name: string; price: number }) => void;
  addToWishList: (product: { id: number; name: string; price: number }) => void;
}

const ProductDetailPage = ({ addToCart, addToWishList }: ProductDetailPageProps) => {
  return <ProductDetail addToCart={addToCart} addToWishList={addToWishList} />;
};

export default ProductDetailPage;
