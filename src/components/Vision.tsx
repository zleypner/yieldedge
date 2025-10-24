'use client';

import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Vision() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-blue-50/50 overflow-hidden py-24" id="sobre-nosotros">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
            Transformación
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
        >
          Tecnología que Funciona.<br />
          <span className="text-blue-600">Crecimiento que Perdura.</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Imagina un futuro donde tu infraestructura de tecnología no te detiene—te acelera hacia adelante. Donde la innovación es predecible, medible y vinculada directamente a tu línea de base.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-white p-8 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">De la Incertidumbre</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✗ Ciclos de implementación impredecibles</li>
              <li>✗ Cuellos de botella de infraestructura</li>
              <li>✗ Costos ocultos y complejidad</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">A la Previsibilidad</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Sistemas optimizados y confiables</li>
              <li>✓ Ganancias de rendimiento medibles</li>
              <li>✓ Asociaciones transparentes y responsables</li>
            </ul>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Esta es la diferencia de Yieldge. No solo construimos software—ingenieramos crecimiento. Y medimos cada paso.
        </motion.p>
      </motion.div>
    </section>
  );
}
