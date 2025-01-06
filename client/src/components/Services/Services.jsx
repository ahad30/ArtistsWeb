"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Website Design",
    image: "/services/website-design.jpg",
    hoverImage: "/services/website-design-hover.jpg",
  },
  {
    id: 2,
    title: "Digital Products",
    image: "/services/digital-products.jpg",
    hoverImage: "/services/digital-products-hover.jpg",
  },
  {
    id: 3,
    title: "Brand Identities",
    image: "/services/brand-identities.jpg",
    hoverImage: "/services/brand-identities-hover.jpg",
  },
  {
    id: 4,
    title: "Brand Identities",
    image: "/services/brand-identities.jpg",
    hoverImage: "/services/brand-identities-hover.jpg",
  },
];

export function Services() {
  return (
    <section className="bg-black text-white py-32">
      <div className="container mx-auto px-4">
      <h2 className="text-xl md:text-xl mb-8 font-semibold  relative overflow-hidden">
               
      Our team of experts can help you with...
            
              </h2>
        {/* Services List */}
        <div className="space-y-12  ">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
           
              <h2 className="text-6xl md:text-5xl font-semibold mb-4 relative overflow-hidden">
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-10">
                  {service.title}
                </span>
               
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Agency Info */}
        <div className="mt-32 space-y-8 flex gap-10">
         <div className="flex-1">
         <motion.h3 
            className="text-5xl md:text-6xl text-[#6366F1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Creative Agency
          </motion.h3>
          
          <motion.p 
            className="text-xl md:text-xl max-w-[800px] mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We're an award-winning creative agency based in London, focused on E-Commerce, 
            Web Design London, Digital Products, Branding and SEO.
          </motion.p>
         </div>

       <div className="flex-1">
           {/* Stats */}
           <motion.div 
            className="flex gap-8 mt-16 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="rounded-full border border-[#6366F1] px-8 py-4">
              <span className="text-xl">300+ Projects</span>
            </div>
            <div className="rounded-full border border-[#6366F1] px-8 py-4">
              <span className="text-xl">15 Awards</span>
            </div>
          </motion.div>
       </div>
        </div>
      </div>
    </section>
  );
} 