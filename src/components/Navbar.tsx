'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const solutionsLinks = [
    { label: 'What We Offer', href: '/solutions' },
    { label: 'QA and Test Automation', href: '/solutions#qa-automation' },
    { label: 'Security Services', href: '/solutions#security' },
    { label: 'Technology Consulting', href: '/solutions#consulting' },
    { label: 'Mobile & Web Apps', href: '/solutions#mobile-web' },
    { label: 'Staff Augmentation', href: '/solutions#staff-augmentation' },
    { label: 'Analytics and Insights', href: '/solutions#analytics' },
    { label: 'Cloud Solutions', href: '/solutions#cloud' },
    { label: 'Offshore Development', href: '/solutions#offshore' },
    { label: 'Tailored Software', href: '/solutions#tailored-software' },
  ];

  const companyLinks = [
    { label: 'About Yieldge', href: '/company#about' },
    { label: 'Leadership Team', href: '/company#leadership' },
    { label: 'Diversity and Inclusion', href: '/company#diversity' },
    { label: 'Development Program', href: '/company#development-program' },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Careers', href: '/careers' },
    { label: 'Get in Touch', href: '/get-in-touch' },
  ];


  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center cursor-pointer"
          >
            <div className="h-10 w-auto relative flex-shrink-0">
              <Image 
                src="/brand/logo-main.png" 
                alt="Yieldge - Technology that Performs" 
                width={160}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base font-medium cursor-pointer">
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {solutionsLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base font-medium cursor-pointer">
                Company
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {companyLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-sm shadow-md hover:shadow-lg"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-gray-900 transition-colors text-base font-medium py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Solutions Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 transition-colors text-base font-medium py-2 cursor-pointer"
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {solutionsLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-gray-500 hover:text-gray-900 transition-colors text-sm py-1"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 transition-colors text-base font-medium py-2 cursor-pointer"
                >
                  Company
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileCompanyOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {companyLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-gray-500 hover:text-gray-900 transition-colors text-sm py-1"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="https://calendly.com/anwar-softwaredev"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-center shadow-md"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
