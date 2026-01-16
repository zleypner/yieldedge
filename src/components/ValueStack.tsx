'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ValueStackContent, valueStackContent } from '@/lib/content';
import { iconMap } from '@/lib/iconMap';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

interface ValueStackProps {
  content?: ValueStackContent;
}

export default function ValueStack({ content = valueStackContent }: ValueStackProps) {
  return (
    <section id="value-stack" className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#dbe6ff] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#dbe6ff] rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-[#dbe6ff] text-[#1F5CFF] rounded-full text-sm font-semibold mb-6"
          >
            {content.sectionLabel}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            {content.title}{' '}
            <span className="text-[#1F5CFF]">{content.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {content.subtitle}
          </motion.p>
        </motion.div>

        {/* Value Items Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12"
        >
          {content.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || iconMap.Globe;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 ${
                  item.highlight
                    ? 'bg-[#eff4ff] border-[#dbe6ff] shadow-lg shadow-[#dbe6ff]'
                    : 'bg-white border-gray-200 hover:border-[#dbe6ff] hover:shadow-lg'
                }`}
              >
                {item.highlight && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-[#1F5CFF] text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  item.highlight ? 'bg-[#1F5CFF] text-white' : 'bg-[#dbe6ff] text-[#1F5CFF]'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-6 bg-green-50 border-2 border-green-200 rounded-2xl">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{content.guarantee.title}</h4>
              <p className="text-gray-600">{content.guarantee.description}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
