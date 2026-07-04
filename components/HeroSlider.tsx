"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="h-[420px] rounded-3xl"
    >
      <SwiperSlide>
        <div className="h-96 bg-red-300"></div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-96 bg-blue-300"></div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-96 bg-green-300"></div>
      </SwiperSlide>
    </Swiper>
  );
}