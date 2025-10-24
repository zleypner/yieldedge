'use client';

import { motion } from 'framer-motion';
import { Zap, Cpu, TrendingUp } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Diagnosticar',
      desc: 'Análisis estratégico y mapeo de rendimiento',
      icon: Zap,
      details: 'Auditamos tu infraestructura actual, identificamos cuellos de botella y mapeamos tu panorama de rendimiento para entender dónde la ingeniería de precisión desbloqueará el máximo crecimiento.'
    },
    {
      num: '02',
      title: 'Diseñar',
      desc: 'Arquitectura de software personalizada',
      icon: Cpu,
      details: 'Nuestros arquitectos diseñan un plano técnico personalizado que alinea la innovación con tus objetivos empresariales, asegurando escalabilidad, seguridad y ganancias de rendimiento medibles.'
    },
    {
      num: '03',
      title: 'Entregar',
      desc: 'Resultados de crecimiento medible',
      icon: TrendingUp,
      details: 'Ejecutamos con precisión, desplegamos con responsabilidad y rastreamos cada métrica. Tu éxito es nuestro punto de referencia, e iteramos hasta que logres tus objetivos de crecimiento.'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-blue-50/50 overflow-hidden py-24" id="proceso">
      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
            El Plan
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center mb-4 leading-tight"
        >
          De la Visión al Rendimiento
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          Nuestro Proceso Probado de 3 Pasos
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector line (hidden on mobile) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-blue-600 to-transparent transform translate-x-4"></div>
                )}

                {/* Card */}
                <div className="bg-white rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-300 h-full flex flex-col">
                  {/* Number */}
                  <div className="text-5xl font-bold text-blue-600/20 mb-4">{step.num}</div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">{step.desc}</p>

                  {/* Details */}
                  <p className="text-gray-600 leading-relaxed flex-grow">{step.details}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-gray-700 text-lg mb-6">
            Cada paso está diseñado para impulsar un impacto medible en tu línea de base.
          </p>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Ver Cómo Funciona
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
