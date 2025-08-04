import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThreeScene from "@/components/three-scene";
import Logo from "@/components/logo";
import FloatingElements from "@/components/floating-elements";

export default function Option2() {
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [visibleLines, setVisibleLines] = useState(0);
  
  const dataStreamLines = [
    "01001001 01101110 01101001 01110100 01101001 01100001 01101100 01101001 01111010 01101001 01101110 01100111",
    ">>> FAIRNESS.EXE LOADING...",
    "01001000 01101111 01110000 01100101 00101110 01100100 01101100 01101100",
    ">>> HOPE.DLL ACTIVATED",
    "01001100 01101111 01101110 01100111 01100101 01110110 01101001 01110100 01111001",
    ">>> LONGEVITY PROTOCOLS ONLINE",
    "01000110 01110101 01110100 01110101 01110010 01100101",
    ">>> FUTURE SYSTEMS READY",
    "01010011 01111001 01110011 01110100 01100101 01101101",
    ">>> IAROO INITIALIZATION COMPLETE"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleLines < dataStreamLines.length) {
        setVisibleLines(prev => prev + 1);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [visibleLines, dataStreamLines.length]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <ThreeScene />
      <FloatingElements />
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <Logo />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="h2 text-gradient">System Loading</h1>
        </motion.div>
        
        {/* Holographic Data Stream */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="glass rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FE701C] to-transparent animate-shimmer"></div>
          
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/20">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-white/60 text-sm font-mono ml-4">IAROO_TERMINAL v2.0.1</span>
          </div>
          
          {/* Data Stream */}
          <div className="font-mono text-left space-y-2 max-h-64 overflow-hidden">
            {dataStreamLines.slice(0, visibleLines).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-sm ${
                  line.startsWith('>>>') 
                    ? 'text-[#FE701C] font-semibold' 
                    : 'text-green-400'
                }`}
              >
                {line.startsWith('>>>') ? (
                  <div className="flex items-center gap-2">
                    <span className="text-[#FE701C]">▶</span>
                    {line}
                  </div>
                ) : (
                  <div className="opacity-60">{line}</div>
                )}
              </motion.div>
            ))}
            
            {visibleLines < dataStreamLines.length && (
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-[#FE701C]"
              >
                ▋
              </motion.div>
            )}
          </div>
        </motion.div>
        
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex gap-4 text-white/60 text-sm">
            <a href="/option1" className="hover:text-[#FE701C] transition-colors">Option 1</a>
            <a href="/option3" className="hover:text-[#FE701C] transition-colors">Option 3</a>
            <a href="/option4" className="hover:text-[#FE701C] transition-colors">Option 4</a>
            <a href="/option5" className="hover:text-[#FE701C] transition-colors">Option 5</a>
            <a href="/option6" className="hover:text-[#FE701C] transition-colors">✨ Special</a>
            <a href="/" className="hover:text-[#FE701C] transition-colors">Original</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}