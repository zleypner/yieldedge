'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <footer className="relative bg-white border-t border-blue-100 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        {/* Main content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* About */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Y</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Yieldge</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Transformando desafíos tecnológicos complejos en crecimiento medible. Ingenieramos precisión. Entregamos resultados.
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Yieldge — Donde la Precisión Impulsa el Crecimiento.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 mb-6">Servicios</h4>
            <ul className="space-y-3">
              {['Software Personalizado', 'Arquitectura de Rendimiento', 'Integración de API', 'Sistemas de IA'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 mb-6">Recursos</h4>
            <ul className="space-y-3">
              {['Blog', 'Casos de Estudio', 'Carreras', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 mb-6">Conecta</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Github className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Twitter className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          variants={itemVariants}
          className="border-t border-blue-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600"
        >
          <p>Ingenierizado para crecimiento. Construido para precisión.</p>
          <div className="flex gap-8 mt-4 sm:mt-0">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Términos</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contacto</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
