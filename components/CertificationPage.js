'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const CertificatePage = ({ portfolioData }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    className="h-full flex flex-col justify-center items-center"
  >
    <div className="w-full max-w-7xl text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Sertifikat & Pencapaian
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {portfolioData.certificates.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden flex flex-col"
          >
            <div className="w-full aspect-[4/5] overflow-hidden">
                <img 
                    src={cert.previewImage} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            <div className="p-4 text-left flex-grow flex flex-col">
                <h3 className="text-base font-bold text-white leading-tight flex-grow">{cert.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
            </div>
            
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/50 rounded-full p-1.5">
                <ExternalLink size={18} className="text-white" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </motion.div>
);