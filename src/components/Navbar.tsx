'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Blog', href: '#blog' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Get the section id from href
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId) || document.querySelector(href);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 flex justify-between items-center backdrop-blur-md bg-white/90 border-b border-blue-100 shadow-sm"
    >
      {/* Logo */}
      <motion.a
        href="#hero"
        onClick={(e) => handleNavClick(e, '#hero')}
        className="flex items-center gap-3 cursor-pointer"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20"
        >
          <span className="text-white font-bold text-lg sm:text-xl">Y</span>
        </motion.div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 tracking-widest">
          Yieldge
        </h1>
      </motion.a>

      {/* Desktop Navigation Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="hidden md:flex gap-8 items-center"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </motion.div>

      {/* Desktop CTA Button */}
      <motion.a
        href="#cta"
        onClick={(e) => handleNavClick(e, '#cta')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden sm:inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-600/20 cursor-pointer"
      >
        Consulta Gratis
      </motion.a>

      {/* Mobile Menu Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-blue-100 rounded-lg shadow-lg md:hidden"
        >
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium py-2 px-4 rounded hover:bg-blue-50 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm text-center cursor-pointer"
            >
              Consulta Gratis
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
