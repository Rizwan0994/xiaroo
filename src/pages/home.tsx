import { motion } from "framer-motion";
import ThreeScene from "@/components/three-scene";
import Logo from "@/components/logo";
import MissionStatement from "@/components/mission-statement";
import FloatingElements from "@/components/floating-elements";

export default function Home() {
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
        
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <MissionStatement />
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
            <a href="/option6" className="hover:text-[#FE701C] transition-colors">✨ Special</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
