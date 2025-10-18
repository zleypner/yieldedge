'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

const benefits = [
  { 
    icon: Clock, 
    title: "Ahorra Tiempo", 
    description: "Recupera horas cada semana automatizando tareas repetitivas",
    color: "from-blue-500 to-cyan-500" 
  },
  { 
    icon: TrendingUp, 
    title: "Aumenta Ingresos", 
    description: "Nuestros clientes crecen en promedio 300% en el primer año",
    color: "from-cyan-500 to-teal-500" 
  },
  { 
    icon: Award, 
    title: "Resultados Garantizados", 
    description: "99% de satisfacción de clientes. Ves resultados o te devolvemos el dinero",
    color: "from-teal-500 to-green-500" 
  }
];

export default function About() {
  return (
    <section 
      id="benefits" 
      className="py-32 md:py-40 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Qué Lograrás Con{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Nosotros
            </span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-16 mb-32">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex p-8 rounded-3xl bg-gradient-to-br ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
