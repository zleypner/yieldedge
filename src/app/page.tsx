'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Guide from '@/components/Guide';
import Process from '@/components/Process';
import CaseStudies from '@/components/CaseStudies';
import Vision from '@/components/Vision';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Problem />
      <Guide />
      <Process />
      <CaseStudies />
      <Vision />
      <CallToAction />
      <Footer />
    </div>
  );
}