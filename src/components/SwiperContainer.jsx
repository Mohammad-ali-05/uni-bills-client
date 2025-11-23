import React from "react";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperContainer = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation>
        <SwiperSlide><img className="w-full" src="/public/electricity provider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src="/public/gas provider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src="/public/water provider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src="/public/internet provider.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
