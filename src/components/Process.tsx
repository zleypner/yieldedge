'use client';

import { motion } from 'framer-motion';
import { Code, Rocket, Target, TrendingUp } from 'lucide-react';

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

const processSteps = [
  {
    icon: Target,
    number: '01',
    title: 'Análisis',
    description: 'Identificamos tus objetivos y desafíos técnicos para diseñar una solución precisa.',
  },
  {
    icon: Code,
    number: '02',
    title: 'Desarrollo',
    description: 'Construimos sistemas escalables con las mejores prácticas y tecnologías modernas.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Implementación',
    description: 'Desplegamos tu solución con cero tiempo de inactividad y máxima eficiencia.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Optimización',
    description: 'Monitoreamos y mejoramos continuamente el rendimiento de tu sistema.',
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-20 sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-6 leading-[1.1]"
          >
            Nuestro{' '}
            <span className="font-light bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              proceso
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl font-light text-gray-600 leading-relaxed"
          >
            Un enfoque sistemático que garantiza resultados medibles en cada fase.
          </motion.p>
        </div>

        {/* Process steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 h-full">
                {/* Step number */}
                <div className="text-6xl font-extralight text-blue-50 group-hover:text-blue-100 transition-colors mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on mobile and last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg font-light">
            ¿Listo para empezar tu transformación digital?
          </p>
          <motion.a
            href="https://calendly.com/anwar-softwaredev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 sm:px-10 sm:py-5 bg-blue-600 text-white text-lg sm:text-xl font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
          >
            Agenda tu llamada
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
