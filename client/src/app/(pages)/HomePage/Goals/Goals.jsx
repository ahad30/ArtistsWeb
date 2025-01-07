"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import BBC from "../../../../../public/bbc.png";
// import BMW from "../../../../../public/bmw.png";
// import Costa from "../../../../../public/costa.png";

export default function Goals() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column */}
          <div className="flex-1">
            <motion.h2 
              className="text-xl md:text-5xl font-semibold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
             Let our experienced team
             elevate your digital goals
            </motion.h2>

            <motion.div 
              className="py-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-7xl font-semibold mb-4">250</h3>
                  <p className="text-xl text-gray-600">Five-Star Reviews</p>
                </div>
                <div className="text-center">
                  <h3 className="text-7xl font-semibold mb-4">10</h3>
                  <p className="text-xl text-gray-600">In-House Experts</p>
                </div>
              </div>
            </motion.div>

          
          </div>

          {/* Right Column - Stats */}
          <div className="flex-1 flex flex-col justify-end">
          <motion.p 
              className="text-2xl text-gray-600 max-w-[600px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
            We have successfully completed over 300+
projects from a variety of industries. In our team,
designers work alongside developers and digital
strategists, we believe this is our winning recipe for
creating digital products that make an impact.
            </motion.p>
         
          </div>
        </div>
      </div>
    </section>
  );
} 