'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, DollarSign, Rocket } from 'lucide-react';
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
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const results = [
    { 
      metric: '60%', 
      desc: 'Tiempo de implementación reducido', 
      icon: Zap,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      metric: '40%', 
      desc: 'Reducción de costos de infraestructura', 
      icon: DollarSign,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      metric: '5×', 
      desc: 'Respuestas instantáneas. Optimizamos cada segundo.', 
      icon: Rocket,
      color: 'from-blue-500 to-blue-600'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50/30 overflow-hidden" 
      id="resultados"
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
              Resultados comprobados
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 mb-6 leading-[1.1]"
          >
            Números que{' '}
            <span className="font-normal bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              hablan por sí solos
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl font-light text-gray-600 leading-relaxed"
          >
            Resultados medibles que impulsan el crecimiento
          </motion.p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {results.map((result, idx) => {
            const IconComponent = result.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-blue-200 transition-all duration-500 h-full flex flex-col items-center text-center shadow-sm hover:shadow-md overflow-hidden">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${result.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="text-6xl sm:text-7xl font-extralight bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-4">
                    {result.metric}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-light">
                    {result.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom text */}
        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-light text-gray-600 leading-relaxed">
            Estos no son solo números — son la base del crecimiento medible. 
            Nuestros clientes confían en nosotros porque entregamos{' '}
            <span className="text-gray-900 font-normal">precisión, responsabilidad y resultados</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
