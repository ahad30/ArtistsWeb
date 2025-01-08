"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TeamImage from "../../../../../public/team.jpg";

import BBC from "../../../../../public/bbc.png";
import BMW from "../../../../../public/bmw.png";
import Costa from "../../../../../public/costa.png";    
import ITV from "../../../../../public/itv.png";

export function Team() {


  return (
    <section className="" >
      {/* Parallax Image Section */}
      <motion.div 
        className="px-16"
      >
        <Image
          src={TeamImage}
          alt="Our Team"
          
          className="object-cover mx-auto lg:w-[1200px] lg:h-[500px] rounded-xl"
          
        />
      </motion.div>

      {/* Content Section */}
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <motion.h2
            className="text-xl md:text-5xl font-semibold mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            From ambitious startups to global companies, we partner with great businesses and industry leaders.
          </motion.h2>

          {/* Company Logos */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {[
              { src: BBC, alt: "Jaeger-LeCoultre" },
              { src: BMW, alt: "TGA" },
              { src: Costa, alt: "Luxe Collective" },
              { src: ITV, alt: "Richemont" },

            ].map((logo, index) => (
              <motion.div
                key={index}
                className="w-full flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[110px] h-[100px] grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 