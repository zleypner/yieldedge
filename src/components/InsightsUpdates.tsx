'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import Container from '@/components/ui/Container';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function InsightsUpdates() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    // Here you would typically send to an API
    // For now, simulate success
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Insights Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
            >
              Insights
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8"
            >
              The technology landscape evolves rapidly, bringing both challenges and unprecedented opportunities. In our insights section, Yieldge&apos;s thought leaders share expert perspectives and actionable strategies for navigating digital transformation. Explore how our insights can help drive your business forward.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.a
                href="/solutions"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-5 bg-[#1F5CFF] text-white text-lg font-semibold rounded-full hover:bg-[#1a4edb] transition-all duration-300 shadow-lg shadow-[#1F5CFF]/30 hover:shadow-xl hover:shadow-[#1F5CFF]/40"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stay Updated Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8"
            >
              Stay ahead of the curve with technological innovation! Join our mailing list to receive exclusive insights, industry updates, and the latest from Yieldge delivered directly to your inbox.
            </motion.p>
            
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-5 rounded-full border-2 border-gray-200 focus:border-[#1F5CFF] focus:outline-none text-lg transition-all duration-300"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-5 bg-[#1F5CFF] text-white text-lg font-semibold rounded-full hover:bg-[#1a4edb] transition-all duration-300 shadow-lg shadow-[#1F5CFF]/30 hover:shadow-xl hover:shadow-[#1F5CFF]/40 whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
                >
                  <Check className="w-5 h-5" />
                  <span>✓ Successfully subscribed! Check your email for confirmation.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                >
                  <X className="w-5 h-5" />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

