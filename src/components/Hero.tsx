'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

// Container variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Item variants for sequential reveal
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

// Letter animation variants
const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x: x * 20, y: y * 20 });
  };

  // Text to split into letters
  const headline = 'Precisión que impulsa el crecimiento.';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Animated background SVG - represents data lines organizing */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M0 400 Q300 200 600 400 T1200 400"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
          animate={{ strokeDashoffset: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'loop' }}
          strokeDasharray="1000"
        />
      </svg>

      {/* Parallax background effect */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
        }}
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6"
      >
        {/* Grid Layout */}
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mx-[5%] px-4 sm:px-6">
            
            {/* Capsule 1 - Top Full Width: Tagline */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200 hover:border-blue-400 transition-colors duration-300"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                Yieldge
              </p>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-blue-600 tracking-widest uppercase">
                — Innovación con retorno —
              </span>
            </motion.div>

            {/* Capsule 2 - Full Width: Headline */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-blue-200 hover:border-blue-400 transition-colors duration-300"
            >
              <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center text-gray-900">
                <span className="inline-block">
                  {headline.split('').map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="text-gray-900 inline"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
                <br />
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="text-blue-600"
                >
                  Medible.
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Capsule 3 - Left: Subheadline */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200 hover:border-blue-400 transition-colors duration-300 flex flex-col justify-center"
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
                En Yieldge, no solo desarrollamos software.{' '}
                <span className="text-blue-600 font-semibold">
                  Diseñamos sistemas que generan impacto real
                </span>
                , optimizan tu infraestructura y escalan tu rendimiento.
              </p>
            </motion.div>

            {/* Capsule 4 - Right: CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200 hover:border-blue-400 transition-colors duration-300 flex flex-col justify-center gap-3 sm:gap-4"
            >
              {/* Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 99, 235, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-bold rounded-lg text-sm sm:text-base transition-all duration-300 overflow-hidden"
              >
                <span className="flex items-center justify-center gap-2">
                  Agenda una llamada
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-blue-700 -z-10 rounded-lg"
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                  style={{ originX: 0 }}
                />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#2563EB' }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg text-sm sm:text-base hover:border-blue-600 transition-colors duration-300"
              >
                Ver casos de éxito
              </motion.button>
            </motion.div>
          </div>
      </motion.div>

      {/* Bottom accent glow */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
      />
    </div>
  );
}
