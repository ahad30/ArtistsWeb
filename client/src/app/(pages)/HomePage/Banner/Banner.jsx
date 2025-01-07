"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with diagonal stripes */}
      <div className="absolute inset-0 bg-[#f5f5f5]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url('/download.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 h-full flex justify-center items-center">
        <div className="max-w-[1000px]">
          <motion.h1 
            className="text-[3rem] md:text-[5.5rem] lg:text-[5rem] leading-[1.1]  font-medium"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting digital{" "}
            <motion.span 
              className="text-[#6366F1] block ms-[100px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              experiences
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              since 2004
            </motion.span>
          </motion.h1>
        </div>
      </div>

   
    </section>
  );
};

export default Banner;