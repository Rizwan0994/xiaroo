import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThreeScene from "@/components/three-scene";
import Logo from "@/components/logo";
import FloatingElements from "@/components/floating-elements";

export default function Option3() {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      const interval1 = setInterval(() => {
        setProgress1(prev => {
          if (prev >= 87) {
            clearInterval(interval1);
            return 87;
          }
          return prev + 1;
        });
      }, 30);
    }, 1000);

    const timer2 = setTimeout(() => {
      const interval2 = setInterval(() => {
        setProgress2(prev => {
          if (prev >= 100) {
            clearInterval(interval2);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    }, 2000);

    const timer3 = setTimeout(() => {
      const interval3 = setInterval(() => {
        setProgress3(prev => {
          if (prev >= 95) {
            clearInterval(interval3);
            return 95;
          }
          return prev + 1;
        });
      }, 40);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

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
          <h1 className="h2 text-gradient">Systems Online</h1>
        </motion.div>
        
        {/* Progress Bars with Futuristic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl max-w-4xl mx-auto w-full"
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FE701C] to-transparent animate-shimmer"></div>
          
          {/* System Status Header */}
          <div className="text-center mb-8">
            <h3 className="text-white/90 text-xl font-semibold mb-2">SYSTEM STATUS</h3>
            <p className="text-[#FE701C] text-sm font-mono">IAROO v3.0 - QUANTUM READY</p>
          </div>
          
          <div className="space-y-8">
            {/* Future Progress */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/90 font-semibold">Future Progress</span>
                <span className="text-[#FE701C] font-mono">{progress1}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FE701C] to-orange-400 rounded-full relative"
                  style={{ width: `${progress1}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>
            </div>

            {/* Innovation Level */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/90 font-semibold">Innovation Level</span>
                <span className="text-green-400 font-mono">
                  {progress2 === 100 ? 'MAXIMUM' : `${progress2}%`}
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full relative"
                  style={{ width: `${progress2}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>
            </div>

            {/* Launch Sequence */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/90 font-semibold">Launch Sequence</span>
                <span className="text-blue-400 font-mono">
                  {progress3 >= 95 ? 'INITIATED' : `${progress3}%`}
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full relative"
                  style={{ width: `${progress3}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Status Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="text-center mt-8 pt-6 border-t border-white/20"
          >
            <p className="text-white/80 font-mono text-sm">
              {progress3 >= 95 ? 
                "🚀 All systems ready. Launching into the future..." : 
                "⚡ Powering up quantum processors..."
              }
            </p>
          </motion.div>
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
            <a href="/option2" className="hover:text-[#FE701C] transition-colors">Option 2</a>
            <a href="/option4" className="hover:text-[#FE701C] transition-colors">Option 4</a>
            <a href="/option5" className="hover:text-[#FE701C] transition-colors">Option 5</a>
            <a href="/" className="hover:text-[#FE701C] transition-colors">Original</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}