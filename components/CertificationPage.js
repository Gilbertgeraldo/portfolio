'use client';
import { motion } from 'framer-motion';

export const CertificatePage = ({ portfolioData }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
    transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    className="h-full flex flex-col justify-center items-center"
  >
    <h2 className="text-4xl font-bold text-white mb-12 text-center">Sertifikat & Pencapaian</h2>
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioData.certificates.map(cert => (
        <motion.div 
          key={cert.title}
          whileHover={{ y: -5 }}
          className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center"
        >
          <div className="flex justify-center mb-4">{cert.icon}</div>
          <h3 className="text-lg font-bold text-white">{cert.title}</h3>
          <p className="text-sm text-slate-400">{cert.issuer}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);