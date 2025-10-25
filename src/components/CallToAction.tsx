'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function CallToAction() {
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50/30 to-white overflow-hidden" 
      id="cta"
    >
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={{ opacity, scale }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
      >
        <div className="max-w-4xl mx-auto">
          {/* Main content card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl p-10 sm:p-16 border border-gray-100 shadow-xl text-center"
          >
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 mb-6 leading-[1.1]">
              ¿Listo para hacer que tu{' '}
              <span className="font-normal bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                tecnología rinda
              </span>?
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl font-light text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Transforma tus sistemas en motores de crecimiento. Hablemos de cómo
              podemos llevar tu infraestructura al siguiente nivel.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-base font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                Agenda una consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="#resultados"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 text-base font-medium rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                Ver casos de éxito
              </motion.a>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-sm">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-extralight text-gray-900">99.9%</span>
                <span className="text-gray-500 mt-1 font-light">Uptime</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-extralight text-gray-900">&lt;100ms</span>
                <span className="text-gray-500 mt-1 font-light">Latencia</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-extralight text-gray-900">24/7</span>
                <span className="text-gray-500 mt-1 font-light">Soporte</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

