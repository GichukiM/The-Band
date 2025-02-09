import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Slide {
  id: number;
  image: string;
  alt: string;
}

interface PBannerProps {
  slides: Slide[];
}

const PBanner: React.FC<PBannerProps> = ({ slides }) => {
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
  );
}

export default PBanner;
