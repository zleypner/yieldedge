'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  CheckCircle,
  TrendingUp,
  Clock
} from 'lucide-react';

const stats = [
  { icon: Users, value: "50+", label: "Clientes Atendidos", color: "from-blue-500 to-cyan-500" },
  { icon: Award, value: "99%", label: "Tasa de Satisfacción", color: "from-cyan-500 to-teal-500" },
  { icon: TrendingUp, value: "300%", label: "Crecimiento Promedio de Ingresos", color: "from-teal-500 to-green-500" },
  { icon: Clock, value: "7 días", label: "Entrega Más Rápida", color: "from-green-500 to-emerald-500" }
];


export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50 mt-20 md:mt-28">
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
            Acerca de <span className="font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Global Digital Growth</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-light mb-10">
            Ayudamos a las empresas a crecer a través de automatización inteligente y estrategia clara — no complejidad.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-10 h-10" />
                </div>
                <div className="text-4xl font-light text-gray-900 mb-3">{stat.value}</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide font-light">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">Nuestra Misión</h3>
          <p className="text-xl text-gray-500 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Creemos que la tecnología debe resolver problemas reales, no crear nuevos. Por eso nos enfocamos en 
            crear software que no solo sea funcional, sino transformador. Cada línea de código que escribimos 
            está diseñada para hacer tu negocio más eficiente, rentable y competitivo.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-7 h-7 text-green-500 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-medium text-gray-900 mb-3 text-lg">Soluciones Personalizadas</h4>
                <p className="text-gray-500 text-base font-light">Adaptadas a las necesidades específicas y objetivos de tu negocio</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-7 h-7 text-green-500 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-medium text-gray-900 mb-3 text-lg">Resultados Comprobados</h4>
                <p className="text-gray-500 text-base font-light">ROI medible e impacto empresarial desde el primer día</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-7 h-7 text-green-500 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-medium text-gray-900 mb-3 text-lg">Soporte Continuo</h4>
                <p className="text-gray-500 text-base font-light">Optimización continua y mantenimiento para el éxito a largo plazo</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us - Full Width Blue Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl shadow-2xl p-16 text-center"
        >
          <h3 className="text-4xl font-light mb-6 tracking-tight">Por qué las Empresas Nos Eligen</h3>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light">
            Nos enfocamos en resultados que realmente marcan la diferencia.
          </p>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg font-light">20+ años de experiencia combinada entregando resultados medibles</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg font-light">Estrategias ágiles que aceleran el ROI</span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg font-light">Soporte al cliente dedicado 24/7</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg font-light">Metodologías probadas que garantizan el éxito</span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg font-light">Soluciones personalizadas adaptadas a tu negocio</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg font-light">Precios transparentes sin costos ocultos</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
