'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden" 
      id="sobre-nosotros"
    >
      <motion.div
        style={{ opacity, scale }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
      >
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium tracking-wide">
              Transformación
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 mb-6 leading-[1.1]"
          >
            Tecnología que funciona.{' '}
            <span className="block mt-2 font-normal bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Crecimiento que perdura.
            </span>
          </motion.h2>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Before card */}
          <motion.div
            variants={fadeInUp}
            className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900">De la incertidumbre</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 font-light">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Ciclos de implementación impredecibles</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 font-light">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Cuellos de botella de infraestructura</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 font-light">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Costos ocultos y complejidad</span>
              </li>
            </ul>
          </motion.div>

          {/* After card */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-10 border border-blue-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900">A la previsibilidad</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 font-light">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Sistemas optimizados y confiables</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 font-light">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Ganancias de rendimiento medibles</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 font-light">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Asociaciones transparentes y responsables</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
