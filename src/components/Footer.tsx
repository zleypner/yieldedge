'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-28 mt-20 md:mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">Global Digital Growth</h3>
            <p className="text-blue-200 mb-6 max-w-md">
              Construyendo soluciones de software innovadoras que ayudan a las empresas a automatizar, escalar y prosperar en la era digital.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                💻
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                📧
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-blue-200 hover:text-white transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-blue-200">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>América Latina</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>info@anvu.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-blue-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-blue-200 text-sm">
            © {currentYear} Global Digital Growth. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Política de Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

