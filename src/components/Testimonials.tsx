import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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

const Testimonials = () => {
  return (
    <div className="w-full mx-auto my-12">
      <h2 className="text-2xl font-semibold text-center mb-8">Customer Reviews</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30} // Ensures proper spacing between testimonials
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        className="w-full m-4 h-52"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="border p-6 rounded-lg shadow-lg bg-white h-full">
              <div className="flex items-center gap-3 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full" />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
              <div className="text-yellow-400">
                {'⭐'.repeat(testimonial.rating)} {/* Dynamic Star Rating */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
