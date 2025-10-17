'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "María Gonzalez",
    title: "CEO, RetailTech Solutions",
    location: "Chile",
    rating: 5,
    quote: "We were skeptical at first, but the results speak for themselves. Our revenue tripled in just 6 months. This is not an exaggeration - it&apos;s our reality now.",
    avatar: "MG",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Carlos Mora",
    title: "Operations Director, FinServe Pro",
    location: "Costa Rica",
    rating: 5,
    quote: "The ROI was immediate. We processed 4x more clients without hiring a single additional employee. Our team finally focuses on high-value work instead of repetitive tasks.",
    avatar: "CM",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    id: 3,
    name: "Ana Silva",
    title: "COO, LogiTech Inc",
    location: "Chile",
    rating: 5,
    quote: "Best business decision we&apos;ve made. The automation handles everything 24/7. We&apos;re now expanding to three new markets with the same team size.",
    avatar: "AS",
    gradient: "from-teal-500 to-green-500"
  },
  {
    id: 4,
    name: "Roberto Martinez",
    title: "CTO, TechStart Chile",
    location: "Chile",
    rating: 5,
    quote: "The technical implementation was flawless. They understood our complex requirements and delivered beyond expectations. Our development time was cut in half.",
    avatar: "RM",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    name: "Isabella Rodriguez",
    title: "Founder, EcoCommerce",
    location: "Costa Rica",
    rating: 5,
    quote: "Working with Anvu was like having a tech team that actually understood our business. They didn&apos;t just build software, they built solutions that made sense.",
    avatar: "IR",
    gradient: "from-emerald-500 to-blue-500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it - hear from business leaders who transformed their companies
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Join 50+ Successful Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-blue-100">Avg Revenue Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
