"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const workItems = [
  {
    id: 1,
    title: "Romans & Partners",
    image: "/romans-partners.jpg",
    tags: ["UI/UX Design", "Property Portal"],
    isLatest: true,
    link: "/case-studies/romans-partners"
  },
  {
    id: 2,
    title: "Alveena Casa",
    image: "/alveena-casa.jpg",
    tags: ["UI/UX Design", "E-Commerce"],
    isLatest: false,
    link: "/case-studies/alveena-casa"
  },
  {
    id: 3,
    title: "Fudli App",
    image: "/fudli-app.jpg",
    tags: ["E-Commerce", "Digital Product"],
    isLatest: false,
    link: "/case-studies/fudli"
  },
  {
    id: 4,
    title: "Re-Core Pilates",
    image: "/recore-pilates.jpg",
    tags: ["UI/UX Design", "Development"],
    isLatest: false,
    link: "/case-studies/re-core-pilates"
  },
  {
    id: 5,
    title: "Tech SuperPowers",
    image: "/tech-superpowers.jpg",
    tags: ["UI/UX Design", "Development"],
    isLatest: false,
    link: "/case-studies/tech-superpowers"
  }
];

export function Work() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const scrollWidth = containerRef.current.scrollWidth;
      const viewportWidth = containerRef.current.offsetWidth;
      setWidth(scrollWidth - viewportWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -width]);

  return (
    <section className="h-screen overflow-hidden py-20 mb-16" ref={containerRef}>
      <div className="container mx-auto px-4 sticky top-0">
        {/* Header Section */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-6xl font-semibold">Work</h2>
              <div className="bg-black text-white w-[45px] h-[45px] rounded-full flex items-center justify-center">
                <span className="text-lg">13</span>
              </div>
            </div>
            <Link 
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
            >
              Case Studies
            </Link>
          </div>
          <p className="text-2xl text-gray-600 max-w-[600px]">
            A selection of our crafted work, built from scratch by our talented in-house team.
          </p>
        </div>

        {/* Horizontal Scrolling Section */}
        <motion.div 
          className="flex gap-6"
          style={{ x }}
        >
          {workItems.map((item) => (
            <motion.div
              key={item.id}
              className="min-w-[600px] h-[600px] relative rounded-3xl overflow-hidden flex-shrink-0"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
        
            >
              <Link href={item.link}>
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/50">
                    {/* Latest Badge */}
                    {item.isLatest && (
                      <div className="self-end">
                        <span className="bg-[#6366F1] text-white px-6 py-2 rounded-full">
                          Latest
                        </span>
                      </div>
                    )}

                    {/* Bottom Content */}
                    <div className="text-white">
                      <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
                      <div className="flex gap-3">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 rounded-full border border-white/50 text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* View More Card */}
          <div className="min-w-[400px] h-[600px] flex-shrink-0 flex flex-col items-center justify-center gap-6">
            <h3 className="text-4xl font-semibold">View More</h3>
            <Link 
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
            >
              Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 