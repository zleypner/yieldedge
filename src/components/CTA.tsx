'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  DollarSign,
  ArrowRight,
  Zap,
  Shield,
  Target
} from 'lucide-react';

const benefits = [
  {
    icon: Calendar,
    text: "Consulta gratuita de 30 minutos",
    description: "Obtén asesoría experta sin costo"
  },
  {
    icon: Target,
    text: "Análisis personalizado de ROI para tu negocio",
    description: "Ve exactamente cuánto podrías ahorrar"
  },
  {
    icon: Shield,
    text: "Sin compromiso, sin presión",
    description: "Solo consejos honestos, sin ventas agresivas"
  }
];

const faqItems = [
  {
    question: "¿Qué tan rápido veo resultados?",
    answer: "La mayoría de clientes ven mejoras en 30 días. Es rápido y efectivo."
  },
  {
    question: "¿Necesito saber de tecnología?",
    answer: "No. Nosotros hacemos todo el trabajo técnico. Tú solo nos cuentas qué necesitas."
  },
  {
    question: "¿Cuánto cuesta?",
    answer: "Depende de lo que necesites. En la consultoría gratuita te damos un precio claro, sin sorpresas."
  },
  {
    question: "¿Por qué debo actuar ahora?",
    answer: "Cada día que esperas, pierdes dinero. Además, solo tenemos 3 espacios disponibles este mes."
  }
];

export default function CTA() {
  return (
    <section className="py-32 md:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="gradient-bg rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden mb-16"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Scarcity Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Solo 3 espacios disponibles esta semana</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              ¿Listo Para{' '}
              <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Crecer
              </span>?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Agenda una llamada gratuita y descubre cuánto puedes ahorrar y ganar con la automatización.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-semibold">{benefit.text}</div>
                      <div className="text-sm text-white/80">{benefit.description}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 mx-auto mb-6"
            >
              Agenda Tu Consultoría Gratuita
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <p className="text-white/90 text-lg">
              100% gratis • Sin compromiso • 30 minutos
            </p>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Preguntas Frecuentes
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12">
            Respuestas claras y directas
          </p>

          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-900">{item.question}</span>
                    <div className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </div>
                  </summary>
                  <div className="px-8 pb-8 text-gray-600">
                    {item.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
