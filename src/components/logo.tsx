import { motion } from "framer-motion";
import logoPath from "../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Logo Image */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={logoPath}
          alt="iaroo logo" 
          className="w-32 h-auto md:w-40 filter drop-shadow-lg animate-pulse-custom"
        />
      </motion.div>
    </div>
  );
}
