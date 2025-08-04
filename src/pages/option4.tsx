import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThreeScene from "@/components/three-scene";
import Logo from "@/components/logo";
import FloatingElements from "@/components/floating-elements";

interface ChatMessage {
  sender: 'AI' | 'IAROO';
  message: string;
  delay: number;
}

export default function Option4() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [currentTyping, setCurrentTyping] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatMessages: ChatMessage[] = [
    { sender: 'AI', message: 'What\'s your vision for tomorrow?', delay: 1000 },
    { sender: 'IAROO', message: 'A world where fairness meets infinite possibility', delay: 2000 },
    { sender: 'AI', message: 'How do we achieve this future?', delay: 1500 },
    { sender: 'IAROO', message: 'Through hope, innovation, and endless longevity', delay: 2500 },
    { sender: 'AI', message: 'When do we begin?', delay: 1000 },
    { sender: 'IAROO', message: 'The future starts now... 🚀', delay: 1500 }
  ];

  useEffect(() => {
    if (visibleMessages < chatMessages.length) {
      const currentMessage = chatMessages[visibleMessages];
      const timer = setTimeout(() => {
        setIsTyping(true);
        setCurrentTyping("");
        
        // Typing effect
        let charIndex = 0;
        const typingInterval = setInterval(() => {
          if (charIndex < currentMessage.message.length) {
            setCurrentTyping(currentMessage.message.slice(0, charIndex + 1));
            charIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
            setVisibleMessages(prev => prev + 1);
          }
        }, 50);
      }, currentMessage.delay);

      return () => clearTimeout(timer);
    }
  }, [visibleMessages, chatMessages]);

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
          <h1 className="h2 text-gradient">AI Interface</h1>
        </motion.div>
        
        {/* AI Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl max-w-4xl mx-auto w-full"
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FE701C] to-transparent animate-shimmer"></div>
          
          {/* Chat Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-semibold">IAROO Neural Network</span>
            </div>
            <span className="text-white/60 text-sm font-mono">SECURE CONNECTION</span>
          </div>
          
          {/* Chat Messages */}
          <div className="space-y-4 max-h-80 overflow-hidden font-mono">
            {chatMessages.slice(0, visibleMessages).map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.sender === 'AI' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender === 'AI' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  msg.sender === 'AI' 
                    ? 'bg-white/10 text-white/90' 
                    : 'bg-[#FE701C]/20 text-[#FE701C] border border-[#FE701C]/30'
                }`}>
                  <div className="text-xs opacity-60 mb-1">{msg.sender}</div>
                  <div className="text-sm">{msg.message}</div>
                </div>
              </motion.div>
            ))}
            
            {/* Currently typing message */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl bg-[#FE701C]/20 text-[#FE701C] border border-[#FE701C]/30">
                  <div className="text-xs opacity-60 mb-1">IAROO</div>
                  <div className="text-sm">
                    {currentTyping}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-1"
                    >
                      |
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* AI is typing indicator */}
            {visibleMessages < chatMessages.length && !isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white/10 px-4 py-2 rounded-full text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <span>AI is thinking</span>
                    <div className="flex space-x-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-1 h-1 bg-[#FE701C] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-1 h-1 bg-[#FE701C] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-1 h-1 bg-[#FE701C] rounded-full"
                      />
                    </div>
                  </div>
                </div>
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
            <a href="/option2" className="hover:text-[#FE701C] transition-colors">Option 2</a>
            <a href="/option3" className="hover:text-[#FE701C] transition-colors">Option 3</a>
            <a href="/option5" className="hover:text-[#FE701C] transition-colors">Option 5</a>
            <a href="/" className="hover:text-[#FE701C] transition-colors">Original</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}