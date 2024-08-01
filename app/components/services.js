"use client";
import Header from "./items/header";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ServiceItem from "./items/service-item";

const services = [
    {
        title: "Coal Mining",
        image: "/service/data-1.png",
    },
    {
        title: "Mining Consultation",
        image: "/service/data-2.png",
    },
    {
        title: "Land Reclamation",
        image: "/service/data-3.png",
    },
    {
        title: "The Fallingwater House & Building & Interior",
        image: "/service/data-4.png",
    },
    {
      title: "Occupational Health",
      image: "/service/data-5.png",
  },
    {
        title: "General Exploration",
        image: "/service/data-6.png",
    },
    {
        title: "Mine Waste Management",
        image: "/service/data-7.png",
    },
    {
        title: "Energy Efficiency Audits",
        image: "/service/data-8.png",
    }
]

const Services = () => {
  return (
    <>
      <div className="container mt-15">
        <Header caption="Layanan Kami" />
      </div>
      <div className="pl-8 md:container">
        <Swiper
          slidesPerView={2}
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
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="w-full rounded-md">
                <ServiceItem title={service.title} image={service.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Services;
