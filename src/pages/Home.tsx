import PBanner from '../components/HeroBanner'
import ProductListing from '../components/product/ProductListing'
import Testimonials from '../components/Testimonials'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Home = ({ addToCart, addToWishList }: { addToCart: (product: Product) => void; addToWishList: (product: Product) => void }) => {

  const slides = [
    { id: 1, image: '/Hero1-TheBand.jpg', alt: 'Featured Product 1' },
    { id: 2, image: '/Hero2-TheBand.jpg', alt: 'Featured Product 2' },
    { id: 3, image: '/Hero3-TheBand.jpg', alt: 'Featured Product 3' },
    { id: 4, image: '/Hero4-TheBand.jpg', alt: 'Featured Product 4' },
    { id: 5, image: '/Hero5-TheBand.jpg', alt: 'Featured Product 5' }
  ];

  return (
    <>
      <PBanner slides={slides} />
      <ProductListing addToCart={addToCart} addToWishList={addToWishList} />
      <Testimonials />
    </>
  );
};

export default Home;
