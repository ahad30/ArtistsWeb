"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import BBC from "../../../../../public/bbc.png";
// import BMW from "../../../../../public/bmw.png";
// import Costa from "../../../../../public/costa.png";

export function Partner() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column */}
          <div className="flex-1">
            <motion.h2 
              className="text-6xl md:text-7xl font-semibold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Your Digital Partner
            </motion.h2>

            <motion.p 
              className="text-2xl text-gray-600 max-w-[600px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We partner with companies of all sizes to solve 
              complex business challenges and define their 
              digital strategies and objectives that deliver 
              results. We help bring ideas to life and create 
              brands, websites & digital products that work.
            </motion.p>

            {/* Trusted Brands */}
            <motion.div 
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
             
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center p-3">
                   BBC
                </div>
                <div className="w-16 h-16 -ml-10 rounded-full text-white bg-black flex items-center justify-center p-3">
                  BMW
                </div>
                <div className="w-16 h-16  -ml-10 rounded-full text-white bg-black flex items-center justify-center p-3">
                  Costa
                </div>
                <h3 className="text-2xl text-gray-500">Brands who've trusted us...</h3>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="flex-1 flex flex-col justify-end">
            <motion.div 
              className="bg-gray-100 rounded-3xl p-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-7xl font-semibold mb-4">20</h3>
                  <p className="text-xl text-gray-600">Years on the market</p>
                </div>
                <div className="text-center">
                  <h3 className="text-7xl font-semibold mb-4">500</h3>
                  <p className="text-xl text-gray-600">Satisfied Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 