import { motion } from "framer-motion";

export default function MissionStatement() {
  return (
    <motion.div
      className="glass rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Shimmer effect */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FE701C] to-transparent animate-shimmer"></div>
      
      {/* Mission text */}
      <p 
        className="text-white/90 font-light tracking-wide text-center"
        style={{ 
          fontSize: "28px", 
          lineHeight: "40px", 
          fontWeight: 300, 
          letterSpacing: "0.5px" 
        }}
      >
        We believe a world of fairness, hope & longevity all for yourself. Now and endlessly to the future
      </p>
    </motion.div>
  );
}
