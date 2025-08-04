import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThreeScene from "@/components/three-scene";
import Logo from "@/components/logo";
import FloatingElements from "@/components/floating-elements";

export default function Option5() {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const [revealedText, setRevealedText] = useState("");
  const [isRevealing, setIsRevealing] = useState(false);

  const finalMessage = "Wake up... The future is now";
  const matrixCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  useEffect(() => {
    // Generate initial matrix characters
    const chars = Array.from({ length: 500 }, () => 
      matrixCharSet[Math.floor(Math.random() * matrixCharSet.length)]
    );
    setMatrixChars(chars);

    // Start the revelation after delay
    const revealTimer = setTimeout(() => {
      setIsRevealing(true);
      let charIndex = 0;
      const revealInterval = setInterval(() => {
        if (charIndex < finalMessage.length) {
          setRevealedText(finalMessage.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(revealInterval);
        }
      }, 100);
    }, 3000);

    // Continuously update matrix characters
    const matrixInterval = setInterval(() => {
      setMatrixChars(prev => prev.map(() => 
        matrixCharSet[Math.floor(Math.random() * matrixCharSet.length)]
      ));
    }, 150);

    return () => {
      clearTimeout(revealTimer);
      clearInterval(matrixInterval);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <ThreeScene />
      <FloatingElements />
      
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 z-5 overflow-hidden opacity-30">
        <div className="grid grid-cols-20 gap-1 h-full">
          {Array.from({ length: 20 }).map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col justify-start items-center space-y-1">
              {Array.from({ length: 25 }).map((_, rowIndex) => (
                <motion.div
                  key={`${colIndex}-${rowIndex}`}
                  className="text-green-400 font-mono text-xs opacity-70"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (colIndex + rowIndex) * 0.1,
                    ease: "easeInOut"
                  }}
                >
                  {matrixChars[(colIndex * 25 + rowIndex) % matrixChars.length]}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
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
          <h1 className="h2 text-gradient">Matrix Initialized</h1>
        </motion.div>
        
        {/* Matrix-Style Revelation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl max-w-4xl mx-auto border border-green-400/20"
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-shimmer"></div>
          
          {/* Matrix Terminal Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-green-400 font-mono text-sm">NEURAL LINK ESTABLISHED</span>
            </div>
          </div>
          
          {/* Pre-revelation matrix text */}
          {!isRevealing && (
            <motion.div
              className="text-center font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="text-green-400 text-lg mb-4">DECRYPTING REALITY...</div>
              <div className="grid grid-cols-10 gap-1 max-w-md mx-auto">
                {Array.from({ length: 100 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-green-400 text-xs"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.02,
                    }}
                  >
                    {matrixChars[i % matrixChars.length]}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Revealed Message */}
          {isRevealing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-white font-mono text-2xl md:text-3xl font-light tracking-wider">
                {revealedText.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ color: '#00ff00' }}
                    animate={{ 
                      color: ['#00ff00', '#ffffff'],
                      textShadow: [
                        '0 0 10px #00ff00',
                        '0 0 20px #FE701C, 0 0 30px #FE701C'
                      ]
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                
                {revealedText.length < finalMessage.length && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-green-400 ml-1"
                  >
                    ▋
                  </motion.span>
                )}
              </div>
              
              {revealedText === finalMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="mt-6 pt-6 border-t border-green-400/20"
                >
                  <p className="text-green-400/80 font-mono text-sm">
                    IAROO SYSTEM ACTIVATED
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
        
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex gap-4 text-white/60 text-sm">
            <a href="/option1" className="hover:text-[#FE701C] transition-colors">Option 1</a>
            <a href="/option2" className="hover:text-[#FE701C] transition-colors">Option 2</a>
            <a href="/option3" className="hover:text-[#FE701C] transition-colors">Option 3</a>
            <a href="/option4" className="hover:text-[#FE701C] transition-colors">Option 4</a>
            <a href="/" className="hover:text-[#FE701C] transition-colors">Original</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}