'use client';

import { motion } from 'framer-motion';
import { 
  Bot, 
  Globe, 
  CreditCard, 
  Zap, 
  BarChart3, 
  Settings,
  ArrowRight
} from 'lucide-react';

const bentoCards = [
  {
    id: 1,
    title: "Automatizaciones IA",
    description: "Ahorra horas cada día con automatizaciones inteligentes que manejan tareas repetitivas para que tu equipo se enfoque en el crecimiento.",
    icon: Bot,
    metric: "300%",
    metricLabel: "Crecimiento",
    gradient: "from-blue-500 to-cyan-500",
    size: "large",
    features: ["Seguimiento de Clientes", "Generación de Reportes", "Gestión de Flujos de Trabajo", "Operaciones 24/7"]
  },
  {
    id: 2,
    title: "Plataformas Digitales",
    description: "Lanza plataformas poderosas y fáciles de usar que hacen tu negocio accesible en cualquier momento y lugar.",
    icon: Globe,
    metric: "7 días",
    metricLabel: "Tiempo de Lanzamiento",
    gradient: "from-sky-500 to-blue-600",
    size: "medium",
    features: ["Compromiso del Cliente", "Operaciones Simplificadas", "Acceso Móvil", "Diseño Amigable"]
  },
  {
    id: 3,
    title: "E-Commerce y Pagos",
    description: "Acepta pagos de forma instantánea y segura — ya sea en línea, en tienda, o a través de fronteras.",
    icon: CreditCard,
    metric: "24/7",
    metricLabel: "Procesamiento Seguro",
    gradient: "from-cyan-500 to-teal-500",
    size: "medium",
    features: ["Impulsa Conversiones", "Simplifica el Checkout", "Reduce Contabilidad", "Pagos Globales"]
  },
  {
    id: 4,
    title: "Conexiones de Sistemas",
    description: "Conecta todas tus herramientas para que los datos fluyan automáticamente entre sistemas de ventas, inventario y clientes.",
    icon: Zap,
    metric: "100%",
    metricLabel: "Tiempo Activo",
    gradient: "from-indigo-500 to-purple-500",
    size: "small",
    features: ["Menos Errores", "Decisiones Más Rápidas", "Visibilidad en Tiempo Real", "Sincronización Automática"]
  },
  {
    id: 5,
    title: "Panel de Análisis",
    description: "Convierte datos complejos en insights claros para tomar decisiones de negocio más inteligentes y rápidas.",
    icon: BarChart3,
    metric: "En Vivo",
    metricLabel: "Datos en Tiempo Real",
    gradient: "from-purple-500 to-pink-500",
    size: "large",
    features: ["Rastrea Rendimiento", "Mide ROI", "Identifica Oportunidades", "Reportes Automatizados"]
  },
  {
    id: 6,
    title: "Software Personalizado",
    description: "Construimos tecnología que se adapta a tu negocio como un guante — sin plantillas, sin límites.",
    icon: Settings,
    metric: "60%",
    metricLabel: "Ahorro de Costos",
    gradient: "from-pink-500 to-rose-500",
    size: "medium",
    features: ["Flujos de Trabajo Personalizados", "Mejor Eficiencia", "Escalabilidad a Largo Plazo", "Ajuste Perfecto"]
  }
];

export default function BentoGrid() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white mt-20 md:mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            ¿Por qué elegir nuestras{' '}
            <span className="font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Soluciones Inteligentes?</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            Deja de perder tiempo en tareas repetitivas. Permite que nuestros sistemas inteligentes manejen el trabajo mientras te enfocas en hacer crecer tu negocio.
          </p>
        </motion.div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-8 max-w-6xl mx-auto">
          {bentoCards.map((card, index) => {
            const IconComponent = card.icon;
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white rounded-3xl p-12 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-blue-100"
              >
                {/* Subtle Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white rounded-3xl"></div>
                
                <div className="relative flex flex-col h-full">
                  {/* Header with Icon and Metric */}
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <div className={`text-4xl font-light bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                        {card.metric}
                      </div>
                      <div className="text-sm text-gray-400 font-light">{card.metricLabel}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 mb-8">
                    <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">{card.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">{card.description}</p>
                    
                    {/* Features List */}
                    <div className="space-y-4">
                      {card.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient} mr-4 flex-shrink-0`}></div>
                          <span className="text-gray-600 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 8 }}
                    className={`flex items-center text-base font-medium bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent group-hover:opacity-70 transition-all duration-300`}
                  >
                    Saber Más
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.02,
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-5 rounded-full font-light text-xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            Descubre tu Potencial de Crecimiento
          </motion.button>
          <p className="text-base text-gray-400 mt-6 font-light">Consulta gratuita • Sin compromiso • Ve resultados en 30 días</p>
        </motion.div>
      </div>
    </section>
  );
}
