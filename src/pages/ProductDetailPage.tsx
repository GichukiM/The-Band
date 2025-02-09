import ProductDetail from "../components/ProductDetail";

interface ProductDetailPageProps {
  addToCart: (product: any) => void;
  addToWishList: (product: any) => void;
}

const ProductDetailPage = ({ addToCart, addToWishList }: ProductDetailPageProps) => {
  return <ProductDetail addToCart={addToCart} addToWishList={addToWishList} />;
};

export default ProductDetailPage;
