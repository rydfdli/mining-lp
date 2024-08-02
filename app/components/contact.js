"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import MapComponent from "./items/map";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function Contact() {
  return (
    <ParallaxProvider>
      <div className="relative w-full md:h-[700px] h-[1000px] overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-70 mt-28">
        <Parallax
          speed={-10}
          tag="figure"
          className="w-full md:h-[700px] h-[1000px] overflow-hidden object-cover relative"
        >
          <Image src="/Hero-bg.jpg" alt="bg" fill />
        </Parallax>
        <div className="absolute container text-white top-20 left-1/2 transform -translate-x-1/2 text-center z-50">
          <h1
            className={`text-5xl text-white font-semibold ${playfair.className} mb-2`}
          >
            Kontak Kami
          </h1>
          <p>Mitra Terpercaya Anda dalam Industri Tambang Batu Bara</p>
          <div className="w-full mt-11 grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="bg-white rounded-md text-start lg:py-9 lg:px-14 py-5 px-8">
              <h3 className="text-md text-green-500 font-semibold mb-5">
                Contact Info
              </h3>
              <div className="text-gray-900 text-sm lg:text-md">
                <ul className="mb-4">
                  <li className="font-semibold">Our Location</li>
                  <li>
                    Jalan Pupuk Raya No.17-19, Balikpapan, Kalimantan Timur,
                    76113, Indonesia
                  </li>
                </ul>
                <ul className="mb-4">
                  <li className="font-semibold">Quick Contact</li>
                  <li>
                    Call us: (0542) 761595
                    Email : ptsedaun@energi.co
                  </li>
                </ul>
                <ul className="mb-4">
                  <li className="font-semibold">Opening Hours</li>
                  <li>
                    Monday - Friday
                    09:00 AM - 06:00 PM
                  </li>
                </ul>

                <h3 className="text-md text-gray-900 font-semibold mt-2">
                    Do You Have Any Question, Just Contact Us To Get Help!
                </h3>

                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-5 md:py-5 md:px-10 w-full rounded mt-8">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="bg-green-500 max-h-72 rounded-md">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
