'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Lightbulb, 
  Rocket
} from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Cuéntanos tu Problema",
    description: "En una simple conversación, nos cuentas qué te quita tiempo o te frena. Sin tecnicismos, solo como hablarías con un amigo.",
    icon: MessageCircle,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: "2",
    title: "Creamos tu Solución",
    description: "Diseñamos y construimos una herramienta digital que resuelve exactamente lo que necesitas. Nosotros nos encargamos de todo lo técnico.",
    icon: Lightbulb,
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    number: "3",
    title: "Ves los Resultados",
    description: "En pocas semanas, tu negocio ahorra tiempo, reduce costos y genera más ingresos. Así de simple.",
    icon: Rocket,
    gradient: "from-teal-500 to-green-500"
  }
];

export default function BentoGrid() {
  return (
    <section id="how-it-works" className="py-32 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cómo Funciona:{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              3 Pasos Simples
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No necesitas saber de tecnología. Nosotros convertimos tus ideas en soluciones reales.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-48 md:space-y-64">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-center gap-20 md:gap-24">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl`}>
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-50">
                      <span className={`text-3xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                      {step.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-16 top-56 w-0.5 h-40 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-48"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Comenzar Ahora
          </motion.a>
          <p className="text-base text-gray-500 mt-6">Consultoría gratuita • Sin compromiso • Resultados garantizados</p>
        </motion.div>
      </div>
    </section>
  );
}
