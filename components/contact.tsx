"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-dark-light to-brand-dark">
      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
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
            <div className="text-xs uppercase tracking-widest text-brand-orange">
              Contact
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Start Your
            <br />
            <span className="text-white/70">AI Transformation</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">Ready to build something extraordinary? Get a free consultation and AI assessment from our Gen Z development team.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm uppercase tracking-widest text-white/70 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-brand-dark-lighter/50 border-2 border-brand-orange/20 p-3 text-white placeholder:text-gray-400 focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm uppercase tracking-widest text-white/70 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-brand-dark-lighter/50 border-2 border-brand-orange/20 p-3 text-white placeholder:text-gray-400 focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
                  placeholder="Your Company"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm uppercase tracking-widest text-white/70 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-brand-dark-lighter/50 border-2 border-brand-orange/20 p-3 text-white placeholder:text-gray-400 focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm uppercase tracking-widest text-white/70 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-brand-dark-lighter/50 border-2 border-brand-orange/20 p-3 text-white placeholder:text-gray-400 focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Service Interested In *
              </label>
              <select
                id="service"
                required
                className="w-full bg-brand-dark-lighter/50 border-2 border-brand-orange/20 p-3 text-white focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
              >
                <option value="">Select a service</option>
                <option value="web-app">Web Application Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="ai-integration">AI Solutions Integration</option>
                <option value="product-dev">Product Development</option>
                <option value="consultation">Free AI Assessment</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Estimated Budget
              </label>
              <select
                id="budget"
                className="w-full bg-brand-dark-lighter/50 border-2 border-brand-orange/20 p-3 text-white focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
              >
                <option value="">Select budget range</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full bg-brand-dark-lighter/50 border-2 border-brand-orange/20 p-3 text-white placeholder:text-gray-400 focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
                placeholder="Tell us about your project, goals, and how AI can help transform your business..."
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-orange text-white py-4 text-sm uppercase tracking-widest hover:bg-brand-orange-light transition-colors relative group overflow-hidden rounded-sm">
              <span className="relative z-10">Get Free Consultation</span>
              <span className="absolute inset-0 bg-brand-orange-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
            <p className="text-xs text-gray-400 text-center">We'll respond within 24 hours</p>
          </form>
          <div className="border-2 border-brand-orange/20 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 backdrop-blur-sm p-8 h-full shadow-lg rounded-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-8 text-sm">
              Our Gen Z development team is ready to discuss your project and provide expert guidance on smart solutions.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-orange/20 p-3 rounded-sm mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/70 mb-2">
                    Email Us
                  </div>
                  <a
                    href="mailto:hello@xiaroo.com"
                    className="text-white hover:text-brand-orange transition-colors text-sm font-medium"
                  >
                    hello@xiaroo.com
                  </a>
                  <div className="text-xs text-gray-400 mt-1">24hr response time</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-orange/20 p-3 rounded-sm mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/70 mb-2">
                    Call Us
                  </div>
                  <a
                    href="tel:+15551234567"
                    className="text-white hover:text-brand-orange transition-colors text-sm font-medium"
                  >
                    +1 (555) 123-4567
                  </a>
                  <div className="text-xs text-gray-400 mt-1">Mon-Fri, 9am-6pm EST</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-orange/20 p-3 rounded-sm mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/70 mb-2">
                    Global Reach
                  </div>
                  <div className="text-white/80 text-sm space-y-1">
                    <div>🇺🇸 USA</div>
                    <div>🇬🇧 United Kingdom</div>
                    <div>🇵🇰 Pakistan</div>
                    <div>🇦🇺 Australia</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-brand-orange/20 pt-6 mt-6">
                <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
                  Connect With Us
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/company/xiaroo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-orange/10 p-3 rounded-sm hover:bg-brand-orange/20 transition-colors group flex-1 flex justify-center"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-brand-orange transition-colors" />
                  </a>
                  <a
                    href="https://twitter.com/xiaroo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-orange/10 p-3 rounded-sm hover:bg-brand-orange/20 transition-colors group flex-1 flex justify-center"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter className="w-5 h-5 text-gray-300 group-hover:text-brand-orange transition-colors" />
                  </a>
                  <a
                    href="https://instagram.com/xiaroo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-orange/10 p-3 rounded-sm hover:bg-brand-orange/20 transition-colors group flex-1 flex justify-center"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5 text-gray-300 group-hover:text-brand-orange transition-colors" />
                  </a>
                </div>
              </div>

              <div className="bg-brand-orange/5 p-4 rounded-sm border border-brand-orange/20">
                <div className="text-sm font-medium text-white mb-2">🎁 Free AI Assessment</div>
                <div className="text-xs text-gray-400">Get a complimentary analysis of how AI can transform your business. No commitment required.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-32 h-32 border-2 border-brand-orange/10"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-brand-orange/5"></div>
    </section>
  );
}
