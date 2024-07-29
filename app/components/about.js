import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function About() {
  return (
    <div className="container md:text-center text-pretty py-28">
      <h1 className={`text-5xl ${playfair.className} mb-7`}>
        Tentang <span className="text-green-600">Kami</span>
      </h1>
      <p className="text-sm md:text-md text-gray-500">
        Kami adalah sebuah perusahaan tambang batu bara yang berdedikasi untuk
        menghadirkan solusi energi yang bertanggung jawab dan berkelanjutan.
        Dengan pengalaman lebih dari 15 tahun di industri, kami memimpin dalam
        praktik penambangan yang inovatif dan ramah lingkungan. Kami
        memprioritaskan keberlanjutan, keselamatan kerja, serta kesejahteraan
        komunitas sekitar tambang kami. Melalui teknologi canggih dan tim yang
        terlatih, kami menghasilkan batu bara berkualitas tinggi sambil menjaga
        keseimbangan ekologi. Bergabunglah dengan kami dalam membangun masa
        depan energi yang berkelanjutan
      </p>
    </div>
  );
}
