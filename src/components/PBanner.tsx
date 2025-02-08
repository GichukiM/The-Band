import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  { id: 1, image: '/Hero1-TheBand.jpg', alt: 'Featured Product 1' },
  { id: 2, image: '/Hero2-TheBand.jpg', alt: 'Featured Product 2' },
  { id: 3, image: '/Hero3-TheBand.jpg', alt: 'Featured Product 3' },
  { id: 4, image: '/Hero4-TheBand.jpg', alt: 'Featured Product 4' },
  { id: 5, image: '/Hero5-TheBand.jpg', alt: 'Featured Product 5' }
];

const PBanner = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[350px] md:h-[450px] lg:h-[550px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover object-center" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PBanner