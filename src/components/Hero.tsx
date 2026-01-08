'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { HeroContent, homepageContent } from '@/lib/content';

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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

interface HeroProps {
  content?: HeroContent;
}

export default function Hero({ content = homepageContent.hero }: HeroProps) {
  const slides = content?.slides ?? [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  const slide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white" />

      {/* Background Image */}
      {slide.backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <Image
            src={slide.backgroundImage}
            alt={slide.heading}
            fill
            className="object-cover"
            priority={currentSlide === 0}
          />
        </div>
      )}

      {/* Main container - perfectly centered */}
      <Container className="relative z-10 py-20 sm:py-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Content grid - balanced on large screens */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="order-2 lg:order-1"
              >
                {/* Heading */}
                <motion.div variants={fadeInUp} className="mb-6">
                  <h2 className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-4">
                    {slide.heading}
                  </h2>
                </motion.div>

                {/* Subheading */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]"
                >
                  {slide.subheading}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl"
                >
                  {slide.description}
                </motion.p>

                {/* CTA */}
                <motion.div variants={fadeInUp}>
                  <motion.a
                    href={slide.ctaLink}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
                  >
                    {slide.ctaText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right: Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="order-1 lg:order-2 relative"
              >
                {slide.backgroundImage && (
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={slide.backgroundImage}
                      alt={slide.heading}
                      fill
                      className="object-cover"
                      priority={currentSlide === 0}
                      loading={currentSlide === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Subtle overlay for text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-blue-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
