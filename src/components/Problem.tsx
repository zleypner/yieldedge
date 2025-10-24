'use client';

import { motion } from 'framer-motion';
import { Settings, Link2, TrendingUp } from 'lucide-react';

// Variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ProblemSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden py-24">
      {/* background subtle animated lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M0 400 Q300 200 600 400 T1200 400"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
          animate={{ strokeDashoffset: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'loop' }}
          strokeDasharray="1000"
        />
      </svg>

      {/* glow aura */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-5xl mx-auto text-center px-6"
      >
        {/* headline */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          La mayoría de las empresas no tienen un problema de tecnología.
          <br />
          <span className="text-blue-600">Tienen un problema de rendimiento.</span>
        </motion.h2>

        {/* short divider */}
        <motion.div
          variants={itemVariants}
          className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent mb-12"
        />

        {/* emotional paragraph */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-50/50 to-transparent border-l-4 border-blue-600 p-8 rounded-xl mb-12"
        >
        </motion.div>

        {/* bento container */}
        <motion.div
          variants={itemVariants}
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-[2%] flex flex-col gap-6 shadow-[0_0_50px_-15px_#2563EB] border border-blue-200"
        >
          {/* Row 1 - Solutions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <BentoCapsule
              icon={<Settings className="w-6 h-6 text-blue-600" />}
              title="Sistemas Integrados"
            />
            <BentoCapsule
              icon={<Link2 className="w-6 h-6 text-blue-600" />}
              title="Datos Conectados"
            />
            <BentoCapsule
              icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
              title="Resultados Medibles"
            />
          </div>

          {/* Row 2 - Chaos capsule */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ChaosCapsule text="Latencia alta" />
            <ChaosCapsule text="Costos crecientes" />
            <ChaosCapsule text="Integraciones rotas" />
          </div>

          {/* Row 3 - Chaos capsule */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ChaosCapsule text="Tiempos muertos" />
            <ChaosCapsule text="Datos desconectados" />
            <ChaosCapsule text="Equipos fragmentados" />
          </div>
        </motion.div>

        {/* closing transition text */}
        <motion.div variants={itemVariants} className="mt-16 text-gray-700 text-lg sm:text-xl">
          En Yieldge transformamos cada línea de código en una herramienta de
          crecimiento medible. Tecnología que no solo funciona, sino que{' '}
          <span className="text-blue-600 font-bold">rinde.</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------------------------------------------- */
/* Bento capsule components                             */
/* ---------------------------------------------------- */

function BentoCapsule({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center p-6 bg-white/70 border border-blue-200 rounded-2xl hover:border-blue-400 transition-colors duration-300"
    >
      <div className="mb-3">{icon}</div>
      <h3 className="text-sm sm:text-base font-medium text-gray-900">
        {title}
      </h3>
    </motion.div>
  );
}

function ChaosCapsule({ text }: { text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-4 sm:p-6 text-center text-sm sm:text-base text-gray-700 border border-blue-200 rounded-2xl bg-white/60 hover:border-blue-400 transition-colors duration-300"
    >
      {text}
    </motion.div>
  );
}
