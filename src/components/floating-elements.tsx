import { motion } from "framer-motion";

export default function FloatingElements() {
  const elements = [
    {
      width: "100px",
      height: "100px",
      top: "10%",
      left: "10%",
      borderRadius: "20px",
      delay: 0,
    },
    {
      width: "60px",
      height: "60px",
      top: "20%",
      right: "15%",
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      delay: 2,
    },
    {
      width: "80px",
      height: "80px",
      bottom: "15%",
      left: "15%",
      borderRadius: "50%",
      delay: 4,
    },
    {
      width: "120px",
      height: "40px",
      bottom: "25%",
      right: "10%",
      borderRadius: "20px",
      delay: 1,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5 hidden md:block">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute bg-gradient-to-br from-[#FE701C]/10 to-[#FE701C]/30 border border-[#FE701C]/20"
          style={{
            width: element.width,
            height: element.height,
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            borderRadius: element.borderRadius,
            clipPath: element.clipPath,
          }}
          animate={{
            y: [0, -20, 10, 0],
            rotate: [0, 5, -3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
