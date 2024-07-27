"use client";
import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Header from "./motion";
import Motions from "./motion";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const pagination = {
    clickable: true,
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
      onSlideChange={handleSlideChange}
    >
      <SwiperSlide>
        <Image
          src="/Carousel-1.png"
          alt="logo"
          width={5000}
          height={500}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 container transform -translate-x-1/2 -translate-y-1/2">
          {
            activeIndex === 0 && (
              <>
                <Motions />
              </>
            )
          }
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Carousel-1.png"
          alt="logo"
          width={5000}
          height={500}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 container transform -translate-x-1/2 -translate-y-1/2">
          {activeIndex === 1 && (
            <>
              <Motions />
            </>
          )}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Carousel-1.png"
          alt="logo"
          width={5000}
          height={500}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 container transform -translate-x-1/2 -translate-y-1/2">
          {activeIndex === 2 && (
            <>
              <Motions />
            </>
          )}
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
