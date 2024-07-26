import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:bg-[url('/abstract14.svg')] bg-no-repeat bg-[length:70%] bg-left-bottom">
        <div className="w-full md:order-2">
          <Image src="/Hero.png" alt="hero" width={500} height={500} />
        </div>
        <div className="w-full bg-[url('/abstract14.svg')] bg-no-repeat bg-[length:100%] bg-left-top md:bg-none">
          <h1 className="md:text-8xl text-6xl font-bold md:leading-[5.25rem] md:mb-4 ">
            Empowering Sustainable Energy for the Future
          </h1>
          <p className="md:text-xl text-md text-gray-600">
            At Adaro, we are committed to leading the way in sustainable energy
            solutions. Explore our innovative businesses, dedicated to creating
            a brighter, greener tomorrow. Join us on our journey to transform
            the energy landscape for future generations.
          </p>
        </div>
      </div>
    </>
  );
}
