"use client";
import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Header from "./motion";
import Motions from "./motion";
import Hero from "./items/hero";

export default function Heroes() {
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
        <Hero activeIndex={activeIndex} number={0} caption={"Pasokan energi yang andal"} text={"Memberikan batu bara berkualitas tinggi untuk kebutuhan industri global."} image={"/Carousel-1.png"}/>
      </SwiperSlide>
      <SwiperSlide>
        <Hero activeIndex={activeIndex} number={1} caption={"Pengalaman lebih dari 15 tahun di industri"} text={"Kami memprioritaskan keberlanjutan, keselamatan kerja, serta kesejahteraan komunitas sekitar tambang kami."} image={"/Carousel-2.jpg"}/>
      </SwiperSlide>
      <SwiperSlide>
        <Hero activeIndex={activeIndex} number={2} caption={"Teknologi canggih dan tim yang terlatih"} text={"Bergabunglah dengan kami dalam membangun masa depan energi yang berkelanjutan"} image={"/Carousel-3.jpg"}/>
      </SwiperSlide>
    </Swiper>
  );
}
