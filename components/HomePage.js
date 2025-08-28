'use client';
import { motion } from 'framer-motion';
// PERBAIKAN: Mengimpor TextType dari folder yang sama
import TextType from './TextType';

export const HomePage = ({ portfolioData, onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
      className="h-full flex flex-col justify-center items-center text-center"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          {/* PERBAIKAN: Menambahkan span dengan warna gradien pada nama */}
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">{portfolioData.name}.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mt-4">{portfolioData.title}</p>
        {/* PERBAIKAN: Mengganti animasi lama dengan komponen TextType */}
        <div className="text-3xl md:text-5xl font-semibold text-white mt-10 min-h-[48px] md:min-h-[64px]">
          <TextType 
            text={portfolioData.roles} 
            typingSpeed={75} 
            pauseDuration={1500} 
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </div>
    </motion.div>
  );
};
