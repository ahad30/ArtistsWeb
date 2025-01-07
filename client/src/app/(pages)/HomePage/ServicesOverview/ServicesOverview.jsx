"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ServicesOverview = () => {
  const services = [
    { title: "E-Commerce", link: "/services/e-commerce" },
    { title: "Website Design", link: "/services/website-design" },
    { title: "Web Development", link: "/services/web-development" },
    { title: "Digital Products", link: "/services/digital-products" },
    { title: "Brand Identities", link: "/services/brand-identities" },
    { title: "SEO Optimisation", link: "/services/seo" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Services List */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-medium mb-5"
            >
              We're good at
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mb-10"
            >
              Services
            </motion.p>

            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={service.link}>
                    <motion.h3
                      className="text-3xl font-medium hover:text-[#6366F1] transition-colors duration-300"
                      whileHover={{ x: 20 }}
                    >
                      {service.title}
                    </motion.h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:flex lg:flex-col lg:justify-end items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#6366F1] text-white p-12 rounded-3xl"
            >
              <h3 className="text-4xl font-medium mb-8 leading-tight">
                Let's start with a conversation about how we can help you! Get in touch, we're a nice bunch.
              </h3>

              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium"
                  >
                    Let's talk
                  </motion.button>
                </Link>
                
                <Link href="tel:02071128285">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium"
                  >
                    0207 112 82 85
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;