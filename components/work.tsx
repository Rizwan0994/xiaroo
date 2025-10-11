"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0)

  const projects = [
    {
      title: "FINTECH PULSE",
      subtitle: "Advanced Financial Analytics",
      image: "/works/1.webp?height=600&width=800",
      year: "2024",
      description: "Enterprise fintech platform with real-time AI fraud detection, predictive analytics, and automated compliance monitoring. Built for scale with microservices architecture.",
      metrics: "300% ROI | 99.9% Uptime | 2M+ Transactions Daily",
      technologies: "React, Node.js, TensorFlow, AWS Lambda, PostgreSQL"
    },
    {
      title: "MEDTECH AI",
      subtitle: "Healthcare Intelligence Platform",
      image: "/works/2.webp?height=600&width=800",
      year: "2024",
      description: "HIPAA-compliant mobile health platform featuring AI-assisted diagnostics, telemedicine integration, and patient health monitoring with predictive care recommendations.",
      metrics: "75K+ Active Users | 96% Diagnostic Accuracy | 4.9★ Rating",
      technologies: "React Native, Python, ML Models, Azure Healthcare API"
    },
    {
      title: "RETAIL NEXUS",
      subtitle: "Intelligent E-Commerce Solution",
      image: "/works/3.webp?height=600&width=800",
      year: "2023",
      description: "Next-generation e-commerce platform with AI product recommendations, dynamic pricing engine, intelligent inventory management, and personalized shopping experiences.",
      metrics: "250% Revenue Growth | 3.2s Page Load | 85% Conversion Boost",
      technologies: "Next.js, GraphQL, AI/ML, Kubernetes, Redis, MongoDB"
    },
    {
      title: "LEARN AI PRO",
      subtitle: "Adaptive Learning Ecosystem",
      image: "/works/4.webp?height=600&width=800",
      year: "2023",
      description: "Advanced EdTech platform with adaptive personalized learning paths, real-time progress tracking, virtual tutors, and gamified student engagement features.",
      metrics: "25K+ Students | 90% Completion Rate | 40% Better Results",
      technologies: "Vue.js, Python, NLP, WebRTC, Firebase, Analytics"
    },
  ]

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-dark-light to-brand-dark">
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
            <div className="text-xs uppercase tracking-widest text-brand-orange">Portfolio</div>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0 text-white">
              Innovative
              <br />
              <span className="text-white/70">Success Stories</span>
            </h2>
            <button className="border-2 border-brand-orange/30 px-6 py-3 text-sm uppercase tracking-widest text-gray-300 hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/5 transition-all duration-300 flex items-center group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-2 border-white/20 mb-4 group-hover:border-white/50 transition-all duration-300">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                
                {/* Year badge with improved visibility */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-white/90 border border-white/20">
                  {project.year}
                </div>
                
                {/* Overlay content that appears on hover */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs uppercase tracking-widest text-white/80 mb-1">View Project</div>
                </div>
              </div>
              
              {/* Project title with enhanced styling */}
              <h3 className="text-2xl font-bold tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300 mb-2">{project.title}</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors mb-3">{project.subtitle}</p>
              <p className="text-sm text-gray-400 mb-2 line-clamp-2">{project.description}</p>
              
              {/* Metrics */}
              <div className="text-xs text-brand-orange mb-2 font-medium">{project.metrics}</div>
              
              {/* Technologies */}
              <div className="text-xs text-gray-500">{project.technologies}</div>
              
              {/* Animated underline on hover */}
              <div className="h-px w-0 bg-brand-orange group-hover:w-20 transition-all duration-300 mt-3"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-32 h-32 border border-brand-orange/10"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 border border-brand-orange/5"></div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
    </section>
  )
}
