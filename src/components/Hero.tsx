'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-24 right-16 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-blue-900/20 border-b border-white/10">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-white tracking-tight"
        >
          Global Digital Growth
        </motion.h1>

        {/* Menu */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex gap-10 text-sm font-medium text-blue-100"
        >
          <a href="#how-it-works" className="hover:text-white transition-colors duration-300">
            Cómo Funciona
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">
            Contacto
          </a>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen pt-28 md:pt-36 pb-40">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Headline - The Problem */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tight"
          >
            ¿Tu Negocio Pierde Tiempo en{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Tareas Repetitivas?
            </span>
          </motion.h1>

          {/* Subheadline - The Solution */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Automatizamos lo complicado para que tú te enfoques en lo que importa: hacer crecer tu negocio.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-full px-12 py-5 shadow-2xl text-xl transition-colors duration-300"
            >
              Empieza Ahora - Es Gratis
            </motion.a>
            <p className="text-blue-100 text-sm mt-4">Sin tarjeta de crédito • Consultoría gratuita</p>
          </motion.div>

          {/* Simple Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-blue-100/90"
          >
            <p className="text-lg">Más de 50 empresas ya ahorran tiempo y aumentan sus ingresos con nosotros</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
