'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "María González",
    title: "Dueña de Tienda",
    location: "Chile",
    rating: 5,
    quote: "Nuestras ventas se triplicaron en 6 meses. Ya no pierdo tiempo con tareas manuales y puedo enfocarme en crecer mi negocio.",
    avatar: "MG",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Carlos Mora",
    title: "Director de Operaciones",
    location: "Costa Rica",
    rating: 5,
    quote: "Ahora atendemos 4 veces más clientes sin contratar más personal. Mi equipo está feliz porque puede hacer trabajo importante, no tareas repetitivas.",
    avatar: "CM",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    id: 3,
    name: "Ana Silva",
    title: "Emprendedora",
    location: "Chile",
    rating: 5,
    quote: "La mejor decisión para mi negocio. Todo funciona automáticamente 24/7. Ahora estamos creciendo a nuevos mercados sin problemas.",
    avatar: "AS",
    gradient: "from-teal-500 to-green-500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Historias de{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Éxito Real
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Personas como tú que transformaron sus negocios
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-gray-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-blue-600">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Únete a Más de 50 Negocios Exitosos</h3>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-3">50+</div>
              <div className="text-blue-100 text-lg">Clientes Felices</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-3">300%</div>
              <div className="text-blue-100 text-lg">Crecimiento Promedio</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-3">99%</div>
              <div className="text-blue-100 text-lg">Satisfacción</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
