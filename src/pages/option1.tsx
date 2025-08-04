import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThreeScene from "@/components/three-scene";
import Logo from "@/components/logo";
import FloatingElements from "@/components/floating-elements";

export default function Option1() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Building tomorrow's reality, today";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* 3D Background */}
      <ThreeScene />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        {/* Logo */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <Logo />
        </motion.div> */}
        
        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="h2 text-gradient">Coming Soon</h1>
        </motion.div>
        
        {/* Interactive Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          className="glass rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          {/* Cursor effect */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FE701C] to-transparent animate-shimmer"></div>
          
          {/* <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-[#FE701C] rounded-full animate-pulse"></div>
            <span className="text-[#FE701C] text-sm font-mono">AI INITIALIZING</span>
          </div> */}
          
          <p 
            className="text-white/90 font-light tracking-wide text-center font-mono"
            style={{ 
              fontSize: "28px", 
              lineHeight: "40px", 
              fontWeight: 300, 
              letterSpacing: "0.5px",
              minHeight: "40px"
            }}
          >
            {displayText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={
                  ['tomorrow\'s', 'reality', 'today'].some(word => 
                    displayText.slice(0, index + 1).endsWith(word)
                  ) ? 'text-[#FE701C]' : 'text-white/90'
                }
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-[#FE701C] ml-1"
            >
              |
            </motion.span>
          </p>
        </motion.div>
        
        {/* Navigation */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex gap-4 text-white/60 text-sm">
            <a href="/option2" className="hover:text-[#FE701C] transition-colors">Option 2</a>
            <a href="/option3" className="hover:text-[#FE701C] transition-colors">Option 3</a>
            <a href="/option4" className="hover:text-[#FE701C] transition-colors">Option 4</a>
            <a href="/option5" className="hover:text-[#FE701C] transition-colors">Option 5</a>
            <a href="/option6" className="hover:text-[#FE701C] transition-colors">✨ Special</a>
            <a href="/" className="hover:text-[#FE701C] transition-colors">Original</a>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}