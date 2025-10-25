'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Cpu, TrendingUp } from 'lucide-react';
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

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const steps = [
    {
      num: '01',
      title: 'Diagnosticar',
      desc: 'Análisis estratégico de rendimiento',
      icon: Zap,
      details: 'Auditamos tu infraestructura actual, identificamos cuellos de botella y mapeamos tu panorama de rendimiento.'
    },
    {
      num: '02',
      title: 'Diseñar',
      desc: 'Arquitectura personalizada',
      icon: Cpu,
      details: 'Diseñamos un plano técnico que alinea innovación con objetivos empresariales, asegurando escalabilidad y rendimiento.'
    },
    {
      num: '03',
      title: 'Entregar',
      desc: 'Resultados medibles',
      icon: TrendingUp,
      details: 'Ejecutamos con precisión, desplegamos con responsabilidad y rastreamos cada métrica hasta lograr tus objetivos.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden" 
      id="proceso"
    >
      {/* Main content */}
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
              Nuestro proceso
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 mb-6 leading-[1.1]"
          >
            De la visión al{' '}
            <span className="font-normal bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              rendimiento
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl font-light text-gray-600 leading-relaxed"
          >
            Tres pasos probados para transformar tu infraestructura
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-blue-200 transition-all duration-500 h-full flex flex-col shadow-sm hover:shadow-md">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>

                  {/* Number indicator */}
                  <div className="text-7xl font-extralight text-blue-600/10 absolute top-6 right-6">
                    {step.num}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide">{step.desc}</p>

                  {/* Details */}
                  <p className="text-gray-600 leading-relaxed flex-grow font-light">{step.details}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
