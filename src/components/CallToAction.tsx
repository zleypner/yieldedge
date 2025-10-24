'use client';

import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function CallToAction() {
  return (
    <section id="cta" className="relative min-h-96 flex items-center justify-center bg-white overflow-hidden py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          ¿Listo para Transformar Tu<br />
          <span className="text-blue-600">Tecnología en Crecimiento?</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Alineemos tu innovación con tus objetivos empresariales. Reserva una consulta estratégica con nuestro equipo.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.a
            href="mailto:hello@yieldge.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Reserva una Consulta
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            Saber Más
          </motion.a>
        </motion.div>

        <motion.p variants={itemVariants} className="text-sm text-gray-500">
          Respuesta en 24 horas. Sin presión de ventas, solo experiencia honesta.
        </motion.p>
      </motion.div>
    </section>
  );
}
