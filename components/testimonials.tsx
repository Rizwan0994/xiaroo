"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "XIAROO transformed our fintech platform with AI-powered fraud detection that caught 99.8% of suspicious transactions. Their Gen Z team understood modern tech stacks and delivered a scalable solution that handles millions of transactions daily. Best investment we've made.",
      author: "David Martinez",
      role: "CTO, FinTech Innovations",
      company: "USA",
    },
    {
      quote:
        "Working with XIAROO was a game-changer for our healthcare app. They integrated AI diagnostics that improved accuracy by 40% while maintaining HIPAA compliance. Their agile approach and modern development practices exceeded all our expectations.",
      author: "Dr. Sarah Williams",
      role: "CEO, HealthTech Solutions",
      company: "UK",
    },
    {
      quote:
        "The e-commerce platform XIAROO built for us increased our revenue by 250% in just 6 months. Their AI recommendation engine is incredibly accurate, and the performance optimization reduced our page load time by 65%. Simply outstanding work.",
      author: "James Thompson",
      role: "Founder, RetailNext",
      company: "Australia",
    },
    {
      quote:
        "XIAROO's AI-powered learning platform revolutionized our EdTech business. Their innovative approach to personalized learning paths and real-time analytics helped us achieve 90% student completion rates. The Gen Z perspective brought fresh ideas we never considered.",
      author: "Fatima Khan",
      role: "Director, EduVision",
      company: "Pakistan",
    },
  ]

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-dark-lighter to-brand-dark">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-brand-orange"></div>
            <div className="text-xs uppercase tracking-widest text-brand-orange">Testimonials</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Client Success
            <br />
            <span className="text-white/70">Stories Worldwide</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">Real results from real clients across USA, UK, Pakistan, and Australia who trusted XIAROO to transform their businesses with AI-powered solutions.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-2 border-brand-orange/30 p-8 md:p-12 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 backdrop-blur-sm shadow-2xl">
            <div className="absolute top-6 right-8 text-white/10 opacity-60">
              <Quote size={120} />
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[200px] flex flex-col"
                >
                  <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed text-white">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <div className="mt-auto flex items-center">
                    <div className="w-12 h-px bg-brand-orange mr-4"></div>
                    <div>
                      <div className="font-bold text-white">{testimonials[activeIndex].author}</div>
                      <div className="text-white/70 text-sm">{testimonials[activeIndex].role}</div>
                      <div className="text-brand-orange text-xs mt-1">{testimonials[activeIndex].company}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination indicator */}
            <div className="mt-8 flex items-center">
              <div className="text-white/60 text-sm mr-4">
                {activeIndex + 1} / {testimonials.length}
              </div>
              <div className="flex-1 h-px bg-brand-orange/20 relative">
                <motion.div 
                  className="h-px bg-brand-orange absolute top-0 left-0"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </div>

            <div className="flex justify-end mt-8 gap-4">
              <button 
                onClick={prev} 
                className="p-2 border-2 border-brand-orange/20 hover:border-brand-orange/60 hover:bg-brand-orange/5 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-300 group-hover:text-brand-orange transition-colors" />
              </button>
              <button 
                onClick={next} 
                className="p-2 border-2 border-brand-orange/20 hover:border-brand-orange/60 hover:bg-brand-orange/5 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-orange transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual accent elements */}
      <div className="absolute top-40 right-20 w-56 h-56 border border-brand-orange/5"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-brand-orange/10"></div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
    </section>
  )
}
