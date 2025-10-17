'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  TrendingUp, 
  Users, 
  DollarSign,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: "RetailTech Solutions",
    location: "Chile",
    industry: "E-commerce",
    problem: "Gestión manual de inventario y cuellos de botella en servicio al cliente",
    solution: "Automatización impulsada por IA para servicio al cliente y gestión de inventario",
    results: [
      { metric: "+385%", label: "Crecimiento de Ingresos", icon: TrendingUp },
      { metric: "+250%", label: "Base de Clientes", icon: Users },
      { metric: "-65%", label: "Ahorro de Costos", icon: DollarSign }
    ],
    description: "Automatizamos todo su servicio al cliente y gestión de inventario, resultando en un crecimiento explosivo y una reducción masiva de costos.",
    implementation: "6 meses",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    company: "FinServe Pro",
    location: "Costa Rica",
    industry: "Servicios Financieros",
    problem: "Procesamiento manual de documentos y incorporación lenta de clientes",
    solution: "Procesamiento de documentos impulsado por IA y sistema automatizado de incorporación de clientes",
    results: [
      { metric: "+400%", label: "Velocidad de Procesamiento", icon: TrendingUp },
      { metric: "+300%", label: "Capacidad de Clientes", icon: Users },
      { metric: "-70%", label: "Costos Operativos", icon: DollarSign }
    ],
    description: "Implementamos procesamiento de documentos impulsado por IA e incorporación de clientes, escalando sus operaciones sin contratar personal adicional.",
    implementation: "4 meses",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    id: 3,
    company: "LogiTech Inc",
    location: "Chile",
    industry: "Logística",
    problem: "Planificación de rutas ineficiente y seguimiento de entregas",
    solution: "Plataforma logística inteligente con seguimiento en tiempo real y optimización",
    results: [
      { metric: "+200%", label: "Eficiencia de Entrega", icon: TrendingUp },
      { metric: "+150%", label: "Satisfacción del Cliente", icon: Users },
      { metric: "-45%", label: "Costos de Combustible", icon: DollarSign }
    ],
    description: "Revolucionamos sus operaciones logísticas con optimización de rutas impulsada por IA y capacidades de seguimiento en tiempo real.",
    implementation: "5 meses",
    gradient: "from-teal-500 to-green-500"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-gray-50 mt-20 md:mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-center text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Resultados Reales de{' '}
            <span className="font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Empresas Reales</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-light mb-10">
            Ve cómo las empresas en América Latina transformaron sus operaciones con Global Digital Growth.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600">{study.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{study.company}</h3>
                <div className="text-sm text-gray-500 mb-6">{study.industry}</div>
                
                {/* Story Format */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">{study.problem}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">{study.solution}</p>
                  
                  <p className="text-gray-600 text-sm italic">
                    After implementing automation, their revenue grew by 3× in 6 months.
                  </p>
                </div>

                {/* Metrics */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {study.results.map((result, resultIndex) => {
                      return (
                        <div key={resultIndex} className="text-center">
                          <div className={`text-lg font-bold text-blue-700`}>
                            {result.metric}
                          </div>
                          <div className="text-xs text-gray-500">{result.label}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Implementation: <strong>{study.implementation}</strong></span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Limited spots available this month. Book your free consultation now and discover how much you could be earning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Schedule Your Free Strategy Call
                <ExternalLink className="w-5 h-5" />
              </motion.button>
              <div className="text-sm text-gray-500">
                Only 3 consultation slots left this week
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
