"use client";
import Header from "./items/header";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import Blog from "./items/blog";

const data = [

  {
    image: "/blogs/blog-1.png",
    title: "Komitmen Kami dalam Keberlanjutan: Membangun Masa Depan yang Lebih Baik Melalui Program Donasi",
  },
  {
    image: "/blogs/blog-2.png",
    title: "Inovasi Berkelanjutan: Penggunaan Teknologi Hijau untuk Mengurangi Jejak Karbon di Industri Tambang Batu Bara",
  },
  {
    image: "/blogs/blog-3.png",
    title: "Mendukung Pengembangan Ekonomi Lokal Melalui Kemitraan dengan UMKM"
  },

]



const Blogs = () => {
  return (
    <>
      <div className="container mt-15">
        <Header caption="Blogs" />
      </div>
      <div className="pl-8 md:container">
        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          spaceBetween={30}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 10,
              freeMode: true,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Blog image={item.image} title={item.title} link={"/"} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Blogs;
