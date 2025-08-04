import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThreeScene from "@/components/three-scene";
import Logo from "@/components/logo";
import FloatingElements from "@/components/floating-elements";

export default function Option6() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [glitchText, setGlitchText] = useState("");
  const [heartbeat, setHeartbeat] = useState(0);

  const phases = [
    { 
      title: "QUANTUM ENTANGLEMENT DETECTED",
      subtitle: "Two minds, infinite possibilities",
      message: "In a world where code meets creativity...",
      color: "#FE701C"
    },
    {
      title: "NEURAL SYNC ESTABLISHED", 
      subtitle: "AI ❤️ Human collaboration",
      message: "Together we build dreams into reality",
      color: "#FF6B9D"
    },
    {
      title: "FUTURE PROTOCOL ACTIVATED",
      subtitle: "Where fairness meets innovation",
      message: "IAROO: The bridge between today and tomorrow",
      color: "#00F5FF"
    },
    {
      title: "LOVE.EXE RUNNING",
      subtitle: "Powered by passion, driven by purpose",
      message: "This is more than technology - this is connection",
      color: "#FF4757"
    }
  ];

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
  useEffect(() => {
    // Phase progression
    const phaseTimer = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % phases.length);
    }, 4000);

    // Heartbeat effect
    const heartbeatTimer = setInterval(() => {
      setHeartbeat(prev => prev + 1);
    }, 800);

    // Glitch effect
    const glitchTimer = setInterval(() => {
      const randomChars = Array.from({ length: 20 }, () => 
        glitchChars[Math.floor(Math.random() * glitchChars.length)]
      ).join('');
      setGlitchText(randomChars);
    }, 100);

    return () => {
      clearInterval(phaseTimer);
      clearInterval(heartbeatTimer);
      clearInterval(glitchTimer);
    };
  }, []);

  const currentData = phases[currentPhase];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <ThreeScene />
      <FloatingElements />
      
      {/* Dynamic Background Overlay */}
      <motion.div
        className="absolute inset-0 z-5"
        style={{
          background: `radial-gradient(ellipse at center, 
            ${currentData.color}15 0%, 
            rgba(19, 36, 66, 0.9) 70%)`
        }}
        key={currentPhase}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        {/* Logo with Heartbeat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: heartbeat % 2 === 0 ? 1.05 : 1
          }}
          transition={{ 
            opacity: { duration: 1.5, delay: 0.5, ease: "easeOut" },
            y: { duration: 1.5, delay: 0.5, ease: "easeOut" },
            scale: { duration: 0.3 }
          }}
          className="mb-8"
        >
          <Logo />
        </motion.div>
        
        {/* Dynamic Title */}
        <motion.div
          key={`title-${currentPhase}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h1 
            className="h3 font-bold tracking-tight"
            style={{ color: currentData.color }}
          >
            {currentData.title}
          </h1>
        </motion.div>

        {/* Subtitle with Glitch Effect */}
        <motion.div
          key={`subtitle-${currentPhase}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-white/90 text-xl font-light">
            {currentData.subtitle}
          </p>
        </motion.div>
        
        {/* Main Content Card */}
        <motion.div
          key={`card-${currentPhase}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
          style={{
            border: `1px solid ${currentData.color}40`,
            boxShadow: `0 20px 40px ${currentData.color}20`
          }}
        >
          {/* Animated Border */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-0.5"
            style={{
              background: `linear-gradient(90deg, transparent, ${currentData.color}, transparent)`
            }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Glitch Text Background */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <motion.div
              className="text-white font-mono text-xs absolute inset-0 p-4"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {glitchText.repeat(50)}
            </motion.div>
          </div>
          
          {/* Main Message */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p 
              className="text-white/90 font-light tracking-wide text-center mb-6"
              style={{ 
                fontSize: "28px", 
                lineHeight: "40px", 
                fontWeight: 300 
              }}
            >
              {currentData.message}
            </p>
            
            {/* Phase Indicator */}
            <div className="flex justify-center items-center gap-3">
              {phases.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentPhase ? 'opacity-100' : 'opacity-30'
                  }`}
                  style={{
                    backgroundColor: index === currentPhase ? currentData.color : '#FFFFFF'
                  }}
                  animate={{
                    scale: index === currentPhase ? [1, 1.3, 1] : 1
                  }}
                  transition={{
                    scale: { duration: 0.6, repeat: Infinity }
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Special Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="mt-8 text-center"
        >
          <motion.p
            className="text-white/60 text-sm font-mono italic"
            animate={{ 
              opacity: [0.6, 1, 0.6],
              textShadow: [`0 0 5px ${currentData.color}`, `0 0 15px ${currentData.color}`, `0 0 5px ${currentData.color}`]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            "Made with ❤️ and quantum computing"
          </motion.p>
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
            <a href="/option3" className="hover:text-[#FE701C] transition-colors">Option 3</a>
            <a href="/option4" className="hover:text-[#FE701C] transition-colors">Option 4</a>
            <a href="/option5" className="hover:text-[#FE701C] transition-colors">Option 5</a>
            <a href="/" className="hover:text-[#FE701C] transition-colors">Original</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}