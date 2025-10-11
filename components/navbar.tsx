"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-dark/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center relative group">
            {/* Permanent glow - always visible */}
            <div className="absolute inset-0 bg-gradient-radial from-brand-orange/30 via-brand-orange/15 to-transparent rounded-full blur-lg scale-150"></div>
            
            {/* Spotlight effect on hover */}
            <div className="absolute inset-0 bg-gradient-radial from-brand-orange/50 via-brand-orange/25 to-transparent rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Logo with enhanced visibility */}
            <div className="relative z-10 flex items-center">
              <Image
                src="/ICON PNG-01.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 md:h-10 w-auto drop-shadow-2xl filter brightness-125 contrast-150"
                priority
              />
              <span className="text-white font-bold text-xl md:text-2xl tracking-tighter drop-shadow-2xl">
                iaroo<span className="text-brand-orange drop-shadow-lg">.</span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#features"
              className="text-white hover:text-brand-orange transition-colors text-sm uppercase tracking-widest"
              title="Our Digital Solutions and Services"
            >
              Services
            </Link>
            <Link
              href="/#work"
              className="text-white hover:text-brand-orange transition-colors text-sm uppercase tracking-widest"
              title="View Our Portfolio and Case Studies"
            >
              Portfolio
            </Link>
            <Link
              href="/#process"
              className="text-white hover:text-brand-orange transition-colors text-sm uppercase tracking-widest"
              title="Our AI-Integrated Development Process"
            >
              Process
            </Link>
            <Link
              href="/#pricing"
              className="text-white hover:text-brand-orange transition-colors text-sm uppercase tracking-widest"
              title="Why Choose Xiaroo - Our Advantages"
            >
              Why Choose Us
            </Link>
            <Link
              href="/#testimonials"
              className="text-white hover:text-brand-orange transition-colors text-sm uppercase tracking-widest"
              title="Client Success Stories"
            >
              Testimonials
            </Link>
          </nav>

          <div className="hidden md:block">
            <button className="border border-brand-orange px-5 py-2 text-sm uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors">
              Contact
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-brand-dark"
        >
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              <Link
                href="#features"
                className="text-white hover:text-brand-orange py-2 text-2xl font-light"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#work"
                className="text-white hover:text-brand-orange py-2 text-2xl font-light"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href="#process"
                className="text-white hover:text-brand-orange py-2 text-2xl font-light"
                onClick={() => setIsOpen(false)}
              >
                Process
              </Link>
              <Link
                href="#pricing"
                className="text-white hover:text-brand-orange py-2 text-2xl font-light"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <button className="border border-brand-orange px-5 py-3 text-sm uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors w-full mt-4">
                Contact
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}
