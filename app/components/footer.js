
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaMedium } from "@react-icons/all-files/fa/FaMedium";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-green-600 text-white">
      <div className="container pt-11 mb-11">
        <Image
          src="/logo-white.png"
          alt="logo"
          width={338}
          height={72}
          className="object-contain max-w-56 mb-5"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 lg:gap-20 gap-11">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">Tentang Kami</h3>
            <p className="text-sm text-gray-200">
              Kami adalah sebuah perusahaan tambang batu bara yang berdedikasi
              untuk menghadirkan solusi energi yang bertanggung jawab dan
              berkelanjutan.
            </p>
            <div className="flex gap-3">
                <FaLinkedin />
                <FaMedium />
                <FaInstagram />
                <FaXTwitter />
                <FaFacebook />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">Office</h3>
            <p className="text-sm text-gray-200">
              Jalan Pupuk Raya No.17-19, Balikpapan, Kalimantan Timur, 76113
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">Kontak</h3>
              <ul className="text-sm text-gray-200 flex flex-col gap-2">
                <li>Call us : (0542) 761595</li>
                <li>Email : ptsedaun@energi.co</li>
              </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">Link</h3>
              <ul className="text-sm text-gray-200 flex flex-col gap-2">
                <li>Beranda</li>
                <li>Tentang Kami</li>
                <li>Layanan</li>
                <li>Blog</li>
                <li>Kontak</li>
              </ul>
          </div>
        </div>
      </div>

      <div className="container pb-3">
        <p className="text-xs text-gray-200 text-center">
          Copyright © 2022 Sedaunergi. All rights reserved.
        </p>
      </div>
    </div>
  );
}
