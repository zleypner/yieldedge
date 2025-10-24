'use client';

import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function CaseStudies() {
  const results = [
    { metric: '60%', desc: 'Tiempo de implementación reducido', icon: '⚡' },
    { metric: '40%', desc: 'Reducción de costos de infraestructura', icon: '💰' },
    { metric: '5x', desc: 'Tiempos de respuesta de API más rápidos', icon: '🚀' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-24" id="resultados">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-5xl mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center mb-6">
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
            Resultados Comprobados
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center mb-16 leading-tight"
        >
          Resultados Que Hablan en Números
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center p-8 bg-blue-50/50 rounded-2xl border border-blue-200"
            >
              <div className="text-6xl mb-4">{result.icon}</div>
              <div className="text-5xl font-bold text-blue-600 mb-4">{result.metric}</div>
              <p className="text-lg text-gray-700 font-semibold">{result.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-16">
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
          >
            Estos no son solo números—son la base del crecimiento medible. Nuestros clientes se asocian con nosotros porque entregamos precisión, responsabilidad y resultados.
          </motion.p>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Descubre Tu Potencial
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
