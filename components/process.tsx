"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Discovery & AI Assessment",
      description: "We conduct deep-dive analysis of your business needs, technical requirements, and opportunities for AI integration. Our Gen Z team leverages modern tools to map your digital transformation journey.",
    },
    {
      number: "02",
      title: "Strategy & Architecture",
      description: "We design scalable, maintainable system architecture with AI-powered features. Our strategy includes tech stack selection, microservices planning, and cloud infrastructure design aligned with your growth goals.",
    },
    {
      number: "03",
      title: "UI/UX & AI Design",
      description: "We craft intuitive, modern interfaces with AI-enhanced user experiences. Our design process focuses on accessibility, performance, and seamless integration of intelligent features that users love.",
    },
    {
      number: "04",
      title: "Agile Development",
      description: "We build your product using cutting-edge technologies, AI/ML models, and industry best practices. Our agile sprints ensure rapid iteration, continuous integration, and regular client feedback loops.",
    },
    {
      number: "05",
      title: "Testing & Deployment",
      description: "We rigorously test across devices, optimize performance, and deploy to production with zero downtime. Our CI/CD pipelines ensure smooth launches with comprehensive monitoring and post-launch support.",
    },
  ]

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-dark-lighter">
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
            <div className="text-xs uppercase tracking-widest text-brand-orange">How We Work</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            AI-Integrated
            <br />
            <span className="text-white/90">Development Process</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">From discovery to deployment, our agile workflow combines Gen Z innovation with AI-powered efficiency to deliver scalable, maintainable solutions.</p>
        </motion.div>

        <div
          ref={ref}
          className="relative"
        >
          {/* Vertical line with improved visibility */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-brand-orange/30 md:left-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""} pl-24 md:pl-0`}>
                {/* Increase contrast of step numbers from 10% to 40% */}
                <div className={`text-5xl md:text-7xl font-bold text-white/40 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {step.number}
                </div>
                <h3 className={`text-2xl font-bold mb-2 text-white ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {step.title}
                </h3>
                {/* Increase contrast of descriptions from 70% to 85% */}
                <p className={`text-white/85 ${index % 2 === 0 ? "md:text-right md:ml-auto" : ""} ${
                  index % 2 === 0 ? "md:max-w-sm md:inline-block" : "max-w-sm"
                }`}>
                  {step.description}
                </p>
              </div>

              <div className="relative flex items-center justify-center z-10 absolute-vertical-center md:static">
                {/* Increase border contrast from 30% to 40% */}
                <div className="w-20 h-20 border-2 border-brand-orange/40 flex items-center justify-center bg-brand-dark group-hover:border-brand-orange/60 transition-all duration-300">
                  <div className="text-xl font-bold text-white">{step.number}</div>
                </div>
              </div>

              <div className="flex-1 hidden md:block">
                {/* Increase horizontal line contrast from 20% to 30% */}
                <div className="h-[2px] w-full bg-brand-orange/30"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-32 h-32 border border-brand-orange/10"></div>
      <div className="absolute bottom-60 left-20 w-40 h-40 border border-brand-orange/5"></div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>

      {/* Add custom styles for mobile positioning */}
      <style jsx>{`
        .absolute-vertical-center {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        
        @media (min-width: 768px) {
          .absolute-vertical-center {
            position: static;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
