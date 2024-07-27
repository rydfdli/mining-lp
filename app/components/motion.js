import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function Motions() {
  return (
    <>
      <motion.h1
        className={`md:text-7xl text-6xl text-white mb-8 font-semibold ${playfair.className}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        Pasokan energi <br />
        yang <span className="text-green-500">andal</span>
      </motion.h1>

      <motion.p
        className={`text-sm md:text-lg text-gray-400`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        Memberikan batu bara berkualitas tinggi <br />
        untuk kebutuhan industri global.
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
  );
}
