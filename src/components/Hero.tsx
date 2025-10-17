'use client';

import { motion } from 'framer-motion';
// No icon imports needed - using emojis instead

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 backdrop-blur-md bg-blue-900/20 fixed w-full top-0 px-8 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white"
        >
          Global Digital Growth
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex gap-8 text-sm text-blue-100 hover:text-white transition"
        >
          <a href="#services" className="hover:text-white transition-colors">Servicios</a>
          <a href="#about" className="hover:text-white transition-colors">Nosotros</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portafolio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-[90vh] pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Scarcity Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Oferta por Tiempo Limitado - Solo 3 Espacios de Consultoría Restantes Esta Semana</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Construye. Automatiza.{' '}
            <span className="text-gradient bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Escala.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-blue-50/90 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Creamos software inteligente que ahorra tiempo, aumenta los ingresos y ayuda a tu negocio a crecer sin esfuerzo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center mb-10 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-full px-10 py-4 shadow-lg flex items-center gap-3 text-lg"
            >
              💡 Obtén una Consultoría Gratuita
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white hover:bg-blue-700 px-10 py-4 rounded-full font-semibold flex items-center gap-3 text-lg"
            >
              👁 Ver Proyectos
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm md:text-base text-blue-100/80 flex flex-wrap justify-center gap-8 mt-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30"></div>
                ))}
              </div>
              <span className="text-sm">Confiado por más de 50 empresas en América Latina</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">300%</span> incremento promedio en ingresos
            </div>
            <div className="text-sm">
              <span className="font-semibold">60%</span> reducción de costos
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-3/4 right-1/4 w-6 h-6 bg-cyan-300/30 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-300/40 rounded-full"
        ></motion.div>
      </div>
    </section>
  );
}
