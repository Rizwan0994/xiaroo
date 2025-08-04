import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  direction: number;
}

export default function ThreeScene() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate particles
  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        color: Math.random() > 0.7 ? '#FE701C' : '#4A90E2',
        speed: Math.random() * 0.5 + 0.1,
        direction: Math.random() * Math.PI * 2,
      });
    }
    setParticles(newParticles);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 100,
        y: (e.clientY / window.innerHeight - 0.5) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at ${50 + mousePosition.x * 0.1}% ${50 + mousePosition.y * 0.1}%, 
              rgba(254, 112, 28, 0.15) 0%, 
              rgba(19, 36, 66, 0.8) 50%, 
              rgba(19, 36, 66, 1) 100%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(ellipse at ${50 + mousePosition.x * 0.1}% ${50 + mousePosition.y * 0.1}%, 
              rgba(254, 112, 28, 0.15) 0%, 
              rgba(19, 36, 66, 0.8) 50%, 
              rgba(19, 36, 66, 1) 100%)`,
            `radial-gradient(ellipse at ${60 + mousePosition.x * 0.1}% ${40 + mousePosition.y * 0.1}%, 
              rgba(254, 112, 28, 0.1) 0%, 
              rgba(19, 36, 66, 0.9) 50%, 
              rgba(19, 36, 66, 1) 100%)`,
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            x: [
              particle.x,
              particle.x + Math.cos(particle.direction) * 200,
              particle.x,
            ],
            y: [
              particle.y,
              particle.y + Math.sin(particle.direction) * 150,
              particle.y,
            ],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Geometric Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        {/* Vertical lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#FE701C] to-transparent"
            style={{ left: `${(i + 1) * 12.5}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Horizontal lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#4A90E2] to-transparent"
            style={{ top: `${(i + 1) * 16.66}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Interactive Light Orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(254, 112, 28, 0.4) 0%, transparent 70%)`,
          left: '20%',
          top: '30%',
        }}
        animate={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.3,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-15"
        style={{
          background: `radial-gradient(circle, rgba(74, 144, 226, 0.4) 0%, transparent 70%)`,
          right: '15%',
          bottom: '25%',
        }}
        animate={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.4,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          x: { type: "spring", stiffness: 40, damping: 25 },
          y: { type: "spring", stiffness: 40, damping: 25 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </div>
  );
}
