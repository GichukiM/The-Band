import PBanner from '../components/PBanner'
import ProductListing from '../components/ProductListing'
import Testimonials from '../components/Testimonials'

const Home = () => {

    const slides = [
        { id: 1, image: '/Hero1-TheBand.jpg', alt: 'Featured Product 1' },
        { id: 2, image: '/Hero2-TheBand.jpg', alt: 'Featured Product 2' },
        { id: 3, image: '/Hero3-TheBand.jpg', alt: 'Featured Product 3' },
        { id: 4, image: '/Hero4-TheBand.jpg', alt: 'Featured Product 4' },
        { id: 5, image: '/Hero5-TheBand.jpg', alt: 'Featured Product 5' }
      ];

      const testimonials = [
        {
          id: 1,
          name: 'John Doe',
          image: '/customer1.jpg',
          review: "This product is amazing! It exceeded my expectations.",
          rating: 5
        },
        {
          id: 2,
          name: 'Jane Smith',
          image: '/customer2.jpg',
          review: "Good quality, fast delivery, and great customer service.",
          rating: 4
        },
        {
          id: 3,
          name: 'Mark Lee',
          image: '/customer3.jpg',
          review: "A great product at an even better price.",
          rating: 5
        },
        {
          id: 4,
          name: 'Alice Johnson',
          image: '/customer4.jpg',
          review: "Absolutely love it! Will definitely buy again.",
          rating: 5
        },
        {
          id: 5,
          name: 'Chris Brown',
          image: '/customer5.jpg',
          review: "Satisfied with the purchase, but delivery took a while.",
          rating: 3
        },
        {
          id: 6,
          name: 'Sophia Wilson',
          image: '/customer6.jpg',
          review: "Superb customer support and quality product.",
          rating: 4
        },
        {
          id: 7,
          name: 'Daniel Martinez',
          image: '/customer7.jpg',
          review: "Highly recommend! 100% worth the price.",
          rating: 5
        },
        {
          id: 8,
          name: 'Olivia Taylor',
          image: '/customer8.jpg',
          review: "Good, but I wish they had more color options.",
          rating: 4
        },
        {
          id: 9,
          name: 'Michael Clark',
          image: '/customer9.jpg',
          review: "Best purchase I've made this year!",
          rating: 5
        }
      ];

  return (
    <>
      <PBanner slides={slides} />
      <ProductListing />
      <Testimonials testimonials={testimonials} />
    </>
  )
}

export default Home
