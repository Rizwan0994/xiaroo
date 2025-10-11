"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  const valueProps = [
    {
      name: "Gen Z Innovation",
      description: "Fresh perspective meets cutting-edge tech",
      icon: "🚀",
      features: [
        "Native digital expertise",
        "Modern tech stack mastery",
        "Agile development methodology",
        "Latest AI/ML frameworks",
        "Cloud-native architecture"
      ],
      cta: "Start Your Project",
      popular: false,
    },
    {
      name: "AI-Powered Solutions",
      description: "Intelligence built into every product",
      icon: "🤖",
      features: [
        "Custom AI model integration",
        "Machine learning pipelines",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision capabilities",
        "Real-time data processing"
      ],
      cta: "Get AI Assessment",
      popular: true,
    },
    {
      name: "Scalable & Maintainable",
      description: "Built for growth and long-term success",
      icon: "⚡",
      features: [
        "Microservices architecture",
        "Automated CI/CD pipelines",
        "Comprehensive documentation",
        "99.9% uptime guarantee",
        "24/7 monitoring & support",
        "Regular security updates"
      ],
      cta: "Learn More",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-dark-light">
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
            <div className="text-xs uppercase tracking-widest text-brand-orange">Why Choose XIAROO</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            The XIAROO
            <br />
            <span className="text-white/70">Advantage</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">We combine Gen Z innovation with AI-powered technology to deliver scalable, maintainable solutions that drive real business results.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className={`border-2 ${
                prop.popular ? "border-brand-orange shadow-xl" : "border-brand-orange/20"
              } p-8 relative bg-gradient-to-br from-brand-orange/8 to-brand-orange/3 backdrop-blur-sm group hover:bg-gradient-to-br hover:from-brand-orange/12 hover:to-brand-orange/6 hover:border-brand-orange/40 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              {prop.popular && (
                <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs uppercase tracking-widest py-1 px-3 -mt-3 -mr-3 font-medium">
                  Core Strength
                </div>
              )}
              <div className="text-5xl mb-4">{prop.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{prop.name}</h3>
              <p className="text-white/70 mb-6">{prop.description}</p>
              <ul className="space-y-3 mb-8">
                {prop.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 text-sm uppercase tracking-widest transition-all duration-300 ${
                  prop.popular 
                    ? "bg-brand-orange text-white hover:bg-brand-orange-light" 
                    : "border-2 border-brand-orange/30 text-white hover:border-brand-orange hover:bg-brand-orange/10"
                }`}
              >
                {prop.cta}
              </button>
              
              {/* Add subtle highlight for popular prop */}
              {prop.popular && (
                <div className="absolute inset-0 border-b-2 border-brand-orange opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-40 left-10 w-32 h-32 border border-brand-orange/10"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-brand-orange/5"></div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
    </section>
  )
}
