'use client';

import { motion } from 'framer-motion';

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

export default function Guide() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-24" id="servicios">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(0deg, #1A202C 1px, transparent 1px), linear-gradient(90deg, #1A202C 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-5xl mx-auto text-center px-6"
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
            La Guía
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Transforma la Innovación en{' '}
          <span className="text-blue-600">Crecimiento Medible</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent mb-12"
        />

        {/* Content */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Left: Authority text */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ya Hemos Caminado Tu Camino
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              En Yieldge, entendemos la brecha entre construir excelente tecnología y lograr resultados reales. Hemos asociado con líderes de la industria para diseñar soluciones que no solo funcionan, sino que trabajan.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Nuestro enfoque combina análisis estratégico con precisión de ingeniería, asegurando que cada línea de código impulse crecimiento medible.
            </p>
          </div>

          {/* Right: Key principles */}
          <div className="text-left space-y-6">
            {[
              { title: 'Experiencia Profunda', desc: 'Una década transformando desafíos complejos en soluciones elegantes.' },
              { title: 'Impulsado por Precisión', desc: 'Cada decisión se basa en datos, cada resultado es medible.' },
              { title: 'Modelo de Asociación', desc: 'Invertimos en tu éxito. Tu crecimiento es nuestra responsabilidad.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0 border border-blue-200">
                  <span className="text-blue-600 font-bold">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-16">
          <p className="text-gray-600 text-lg mb-6">
            ¿Listo para alinear tu tecnología con tus objetivos empresariales?
          </p>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Explora Nuestro Enfoque
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
