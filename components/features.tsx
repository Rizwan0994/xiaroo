"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Square, Circle, Triangle, Hexagon } from "lucide-react";

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -25% 0px",
  });

  const services = [
    {
      icon: <Square className="w-6 h-6" />,
      title: "Web Application Development",
      description:
        "Custom web applications built with modern frameworks, scalable architecture, and AI integration for optimal performance and user experience.",
    },
    {
      icon: <Circle className="w-6 h-6" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with cutting-edge features and seamless user interfaces.",
    },
    {
      icon: <Triangle className="w-6 h-6" />,
      title: "AI Solutions Integration",
      description:
        "Custom AI implementations including machine learning models, chatbots, automation, and intelligent data processing solutions.",
    },
    {
      icon: <Hexagon className="w-6 h-6" />,
      title: "Product Development",
      description:
        "End-to-end product development from concept to deployment, ensuring scalable, maintainable, and future-ready solutions.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 12,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 15,
        mass: 0.85,
        duration: 0.7,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-4 mt-20 sm:mt-0 sm:py-24 relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-dark-light"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-brand-orange"></div>
            <div className="text-xs uppercase tracking-widest text-brand-orange">
              Our Services
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Digital Solutions
            <br />
            <span className="text-white/70">For Modern Businesses</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
            
              className="border-2 border-brand-orange/20 bg-gradient-to-br from-brand-orange/8 to-brand-orange/3 backdrop-blur-sm p-8 hover:border-brand-orange/50 hover:bg-gradient-to-br hover:from-brand-orange/12 hover:to-brand-orange/6 transition-all duration-300 group rounded-sm shadow-lg hover:shadow-xl"
           
            >
              <div className="mb-6 text-white/80 group-hover:text-white transition-colors">
                <div className="bg-brand-orange/10 p-3 inline-block rounded-sm group-hover:bg-brand-orange/20 transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-20 right-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-brand-orange/3 rounded-full blur-3xl"></div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
    </section>
  );
}
