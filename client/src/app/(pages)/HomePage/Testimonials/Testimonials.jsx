"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "We have worked with Artistsweb to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I'd highly recommend them.",
    author: "Steven Glibbery",
    company: "TGA Mobility",
    image: "/tga-logo.png"
  },
  {
    id: 2,
    quote: "Outstanding digital agency that consistently delivers exceptional results. Their creative approach and technical expertise transformed our online presence completely.",
    author: "Sarah Johnson",
    company: "Tech Innovate",
    image: "/tech-logo.png"
  },
  {
    id: 3,
    quote: "The team's attention to detail and innovative solutions helped us achieve our digital goals beyond expectations. Highly professional and responsive throughout.",
    author: "Michael Chen",
    company: "Global Systems",
    image: "/global-logo.png"
  },
  {
    id: 4,
    quote: "The team's attention to detail and innovative solutions helped us achieve our digital goals beyond expectations. Highly professional and responsive throughout.",
    author: "Michael Chen",
    company: "Global Systems",
    image: "/global-logo.png"
  },
  // Add more testimonials as needed
];

export function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["55%", "-60%"]);

  return (
    <section 
      ref={containerRef} 
      className="h-[300vh] relative bg-gradient-to-b from-blue-900 via-black to-black"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            className="text-white mb-12"
            style={{ y }}
          >
            <h2 className="text-5xl text-white font-bold mb-10">
            Client Feedback
              </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
              <h2 className="text-2xl font-bold">
                We're collaborators - We build tight-knit partnerships with our clients.
              </h2>
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 border-2 border-gray-300 rounded-full border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-gray-300 text-xl ">Keep Scrolling</p>
              </div>
            </div>
            
            <div className="space-y-20">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 p-8  rounded-3xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <p className="text-2xl font-light mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {testimonial.image && (
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-lg">{testimonial.author}</h4>
                      </div>
                    </div>
                    <p className="text-blue-400 ">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 