'use client';
import { motion } from 'framer-motion';

export const LoadingScreen = () => (
  <div className="fixed inset-0 bg-slate-950 flex justify-center items-center z-[100]">
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center">
      <div className="text-6xl font-bold text-white animate-pulse">G</div>
    </motion.div>
  </div>
);