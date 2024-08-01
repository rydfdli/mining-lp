import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

const formatCaption = (caption) => {
  const words = caption.split(" ");
  const formattedWords = words.map((word, index) => {
    if (index === words.length - 1) {
      return `<span class="text-green-500">${word}</span>`;
    } else if ((index + 1) % 3 === 0) {
      return `${word}<br/>`;
    } else {
      return word;
    }
  });
  return formattedWords.join(" ");
};

export default function Hero({ activeIndex, number, caption, text, image }) {
  const formattedCaption = formatCaption(caption);
  return (
    <div className="relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-70">
      <div className="relative w-full h-[550px]">
        <Image src={image} alt="logo" fill className="object-cover"/>
      </div>
      <div className="absolute top-1/2 left-1/2 container transform -translate-x-1/2 -translate-y-1/2 z-50">
        {activeIndex === number && (
          <>
            <motion.h1
              className={`md:text-7xl text-6xl text-white mb-8 font-semibold ${playfair.className}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              dangerouslySetInnerHTML={{ __html: formattedCaption }}
            ></motion.h1>

            <motion.p
              className={`text-sm md:text-lg text-gray-200 max-w-[700px] line-clamp-3`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              {text}
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
              className={`bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-5 md:py-5 md:px-10 rounded mt-8`}
            >
              Kontak Kami
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
}
