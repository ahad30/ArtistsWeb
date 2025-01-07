"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image1 from "../../../../../public/img-1.jpeg"
import Image2 from "../../../../../public/img-2.jpg"
import Image3 from "../../../../../public/img-3.jpg"
import Image4 from "../../../../../public/img-4.jpg"


const services = [
  {
    id: 1,
    title: "Website Design",
    image: Image1,
    link: "/services/website-design",
    navtitle: "Alveena Casa",
    isLatest: true,
  },
  {
    id: 2,
    title: "E-commerce",
    image: Image2,
      link: "/services/e-commerce",
    navtitle: "Romans & Partners",
    isLatest: true,
  },
  {
    id: 3,
    title: "Digital Products",
    image: Image3,
    link: "/services/digital-products",
    navtitle: "Re-Core Pilates",
    isLatest: true,
  },
  {
    id: 4,
    title: "Brand Identities",
    image: Image4,
    link: "/services/brand-identities",
    navtitle: "Fudli App",
    isLatest: true,
  },
];

export function Services() {
  return (
    <section className="bg-black text-white py-28">
      <div className="container mx-auto px-4">
        {/* Latest Case Study */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Our team of experts can help you with...</h2>
        
        </div>

        {/* Services List */}
        <div className="space-y-20">
          {services.map((service) => (
            <Link href={service.link} key={service.id}>
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Service Title */}
                <div className="flex items-center justify-between">
                  <h2 className="text-6xl font-semibold mb-4 mt-5 relative">
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 40 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {service.title}
                    </motion.span>
                  </h2>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3">
                      <ArrowRight className="w-16 h-16" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute right-[145px] top-1/2 -translate-y-1/2 w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {
                  service.isLatest && (
                    <p className="text-gray-500 text-center text-base">Latest Case Study</p>
                  )
                }
                  <p className="text-white text-center text-xl">
                  {service.navtitle}

                  </p>
                </div>
                

                {/* Hover Image */}
                <div className="absolute right-[80px] top-1/2 -translate-y-1/2 w-[70px] h-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Agency Info */}
        <div className="mt-32 flex justify-between items-center">
          <div className="max-w-[600px]">
            <motion.h3 
              className="text-6xl text-[#6366F1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Creative Agency
            </motion.h3>
            
            <motion.p 
              className="text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We're an award-winning creative agency based in London, focused on E-Commerce, 
              Web Design London, Digital Products, Branding and SEO.
            </motion.p>
          </div>

         <div className="flex flex-col justify-end">
          <div className="flex gap-6">
            <motion.div 
              className="rounded-full border border-[#6366F1] px-8 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-xl">300+ Projects</span>
            </motion.div>
            <motion.div 
              className="rounded-full border border-[#6366F1] px-8 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-xl">15 Awards</span>
            </motion.div>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
} 