'use client';
import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  const letterVariants = {
    initial: { opacity: 0, scale: 0, rotate: -180 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100 }
    }
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 8, repeat: Infinity, linear: true }
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex justify-center items-center z-[100] overflow-hidden">
      {/* Animated background elements - lebih subtle */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 left-32 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl"
      ></motion.div>

      <motion.div
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-32 right-32 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl"
      ></motion.div>

      {/* Main container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center"
      >
        {/* Outer rotating ring - lebih kecil */}
        <motion.div
          variants={orbitVariants}
          animate="animate"
          className="absolute w-48 h-48 border border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
        ></motion.div>

        {/* Middle rotating ring */}
        <motion.div
          variants={orbitVariants}
          animate="animate"
          transition={{ duration: 12, repeat: Infinity, linear: true }}
          className="absolute w-32 h-32 border border-transparent border-t-cyan-400 border-r-blue-400 rounded-full opacity-60"
        ></motion.div>

        {/* Orbiting dots */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              rotateZ: 360
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              linear: true,
              delay: i * 0.3
            }}
            className="absolute w-32 h-32"
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full top-0 left-1/2 -translate-x-1/2 shadow-lg shadow-blue-400/50"
            ></motion.div>
          </motion.div>
        ))}

        {/* Main letter container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative z-10"
        >
          {/* Glow background - lebih subtle */}
          <motion.div
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl -z-10"
          ></motion.div>

          {/* Letter G */}
          <motion.div
            variants={letterVariants}
            initial="initial"
            animate="animate"
          >
            <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-xl">
              G
            </div>

            {/* Shimmer effect on letter */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Loading text - lebih kecil */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 mt-8 text-center"
        >
          <p className="text-slate-400 text-xs tracking-widest uppercase">Loading</p>
          
          {/* Animated dots */}
          <motion.div className="flex justify-center gap-1.5 mt-3">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ y: [-4, 0, -4] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                className="w-1.5 h-1.5 bg-gradient-to-t from-blue-400 to-purple-400 rounded-full"
              ></motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating particles - lebih sedikit */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={`particle-${i}`}
            initial={{ 
              x: Math.random() * 200 - 100, 
              y: Math.random() * 200 - 100,
              opacity: 0
            }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full blur-sm"
          ></motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Preview component
export default function LoadingPreview() {
  return <LoadingScreen />;
}