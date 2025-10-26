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
      className="fixed w-full top-0 z-50 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 pb-16 sm:pb-20 backdrop-blur-xl bg-white/90 border-b-2 border-gray-200"
      role="navigation"
    >
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-4 cursor-pointer"
          aria-label="Yieldge Home"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-3xl">Y</span>
          </div>
          <h1 className="text-3xl font-medium text-gray-900 tracking-tight">
            Yieldge
          </h1>
        </motion.a>

        {/* Desktop Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex gap-12 items-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg font-medium cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Desktop CTA Button */}
        <motion.a
          href="https://calendly.com/anwar-softwaredev"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden sm:inline-block mr-20 px-10 py-5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-lg sm:text-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 cursor-pointer"
        >
          Agenda tu llamada
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-4"
        >
          {mobileMenuOpen ? (
            <X className="w-10 h-10 text-gray-700" />
          ) : (
            <Menu className="w-10 h-10 text-gray-700" />
          )}
        </motion.button>
      </div>

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
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-lg shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 text-center cursor-pointer"
            >
              Agenda tu llamada
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

