import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BentoGrid />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}