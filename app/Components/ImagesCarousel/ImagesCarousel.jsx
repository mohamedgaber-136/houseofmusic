"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./carousel.css";
import { FreeMode, Pagination } from "swiper/modules";
const ImagesCarousel = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={50}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper mt-4"
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
};
export default ImagesCarousel;
