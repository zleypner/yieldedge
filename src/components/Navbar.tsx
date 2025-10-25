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
      className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center backdrop-blur-xl bg-white/80 border-b border-gray-100"
      role="navigation"
    >
      {/* Logo */}
      <motion.a
        href="#hero"
        onClick={(e) => handleNavClick(e, '#hero')}
        className="flex items-center gap-2 cursor-pointer"
        aria-label="Yieldge Home"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-lg">Y</span>
        </div>
        <h1 className="text-xl font-light text-gray-900 tracking-tight">
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
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-light cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </motion.div>

      {/* Desktop CTA Button */}
      <motion.a
        href="#cta"
        onClick={(e) => handleNavClick(e, '#cta')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="hidden sm:inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 text-sm shadow-sm hover:shadow-md cursor-pointer"
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
          className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl md:hidden"
        >
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light py-3 px-4 rounded-xl hover:bg-gray-50 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              className="px-4 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors text-sm text-center cursor-pointer"
            >
              Consulta Gratis
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

