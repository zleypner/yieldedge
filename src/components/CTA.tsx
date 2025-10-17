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
    question: "¿Qué tan rápido podemos ver resultados?",
    answer: "La mayoría de clientes ven mejoras medibles en 30 días, con implementación completa típicamente tomando 2-6 meses dependiendo de la complejidad."
  },
  {
    question: "¿Necesitamos experiencia técnica para implementar esto?",
    answer: "¡Para nada! Nosotros manejamos todos los aspectos técnicos y proporcionamos capacitación integral para tu equipo."
  },
  {
    question: "¿Qué si no funciona para nuestra industria específica?",
    answer: "Hemos implementado exitosamente soluciones en más de 15 industrias. Nuestra consultoría gratuita determinará el mejor enfoque para tu negocio."
  },
  {
    question: "¿Cuánto cuesta?",
    answer: "La inversión varía según tus necesidades. Nuestra consultoría gratuita incluye un desglose detallado de costos sin tarifas ocultas."
  },
  {
    question: "¿Esto reemplazará a nuestros empleados?",
    answer: "¡No! Nuestras soluciones mejoran las capacidades de tu equipo, permitiéndoles enfocarse en trabajo estratégico de alto valor."
  },
  {
    question: "¿Por qué deberíamos actuar ahora?",
    answer: "Cada día sin automatización te cuesta ingresos potenciales. Además, tenemos capacidad limitada y solo tomamos 3 nuevos proyectos por mes."
  }
];

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 mt-20 md:mt-28">
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Limited Time Offer - Only 3 Consultation Slots Left This Week</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Stop Leaving Money on the Table
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Every day without AI automation is costing you thousands. Schedule a free strategy call and discover exactly how much revenue you&apos;re missing out on.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
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
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto mb-4"
            >
              <Calendar className="w-5 h-5" />
              Book Your Free Strategy Call Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <div className="flex items-center justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>Instant confirmation</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>30-minute call</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>Discover your revenue potential</span>
              </div>
            </div>

            <div className="mt-4 text-sm text-white/70">
              Only 3 consultation slots left this week
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 text-center mb-12">
            Everything you need to know before getting started
          </p>

          <div className="space-y-4">
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
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-900">{item.question}</span>
                    <div className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
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
