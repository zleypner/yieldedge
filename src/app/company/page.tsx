'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';

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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#eff4ff] via-white to-white">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#1F5CFF] font-semibold mb-4 text-sm uppercase tracking-wide"
            >
              About Us
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Building the Future of{' '}
              <span className="text-[#1F5CFF]">Technology</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed"
            >
              We are a team of passionate technologists dedicated to helping businesses
              thrive in the digital age through innovative solutions and strategic partnerships.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About Yieldge
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 15 years of experience in the technology industry, Yieldge has
                established itself as a trusted partner for businesses seeking digital
                transformation and operational excellence.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of certified experts brings unmatched expertise and passion to
                every engagement, helping organizations streamline operations and achieve
                measurable results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From modernizing legacy systems to implementing scalable cloud architectures,
                we provide end-to-end solutions tailored to your strategic objectives.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="bg-[#eff4ff] rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-[#1F5CFF] mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 sm:py-24 bg-gray-50 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our leadership brings decades of combined experience in technology and business strategy.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Executive Team', icon: Users, description: 'Guiding our vision and strategic direction' },
                { name: 'Technical Leaders', icon: Target, description: 'Driving innovation and technical excellence' },
                { name: 'Client Partners', icon: Award, description: 'Ensuring exceptional client outcomes' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 text-center border border-gray-200"
                >
                  <div className="w-16 h-16 bg-[#dbe6ff] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-[#1F5CFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Development Program Section */}
      <section id="development-program" className="py-16 sm:py-24 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="w-20 h-20 bg-[#dbe6ff] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-[#1F5CFF]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Development Program
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We invest in our people through continuous learning and professional development
                opportunities, helping our team members grow their careers while delivering
                exceptional value to our clients.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div className="bg-[#eff4ff] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Technical Training</h3>
                  <p className="text-gray-600 text-sm">Continuous upskilling in cutting-edge technologies</p>
                </div>
                <div className="bg-[#eff4ff] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Certification Support</h3>
                  <p className="text-gray-600 text-sm">Industry certifications and professional credentials</p>
                </div>
                <div className="bg-[#eff4ff] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Career Growth</h3>
                  <p className="text-gray-600 text-sm">Clear pathways for advancement and leadership</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
