'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

export const CertificatePage = ({ portfolioData }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    className="w-full h-full flex flex-col items-center relative overflow-hidden"
  >
    {/* Background gradient elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div className="w-full max-w-4xl text-center relative z-10 px-4 py-8 overflow-y-auto h-full flex flex-col scroll-smooth scrollbar-hide [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-600/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-slate-600/50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 flex items-center justify-center gap-3"
      >
        <Award size={32} className="text-blue-400" />
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sertifikat
        </h2>
        <Award size={32} className="text-pink-400" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-slate-300 text-sm md:text-base mb-12"
      >
        Koleksi sertifikasi profesional dan pencapaian
      </motion.p>
      
      {/* Grid dengan layout landscape */}
      <div className="flex flex-col gap-4 md:gap-5 px-4 max-w-4xl mx-auto w-full">
        {portfolioData?.certificates?.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative w-full"
          >
            {/* Card Container - Landscape */}
            <div className="relative rounded-xl overflow-hidden cursor-pointer h-32 md:h-40">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-md rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300"></div>

              {/* Content - Flexbox horizontal */}
              <div className="relative z-10 flex flex-row h-full">
                {/* Image Container - Clickable (lebih lebar) */}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 overflow-hidden bg-gradient-to-b from-slate-900/50 to-slate-900/80 block"
                >
                  <img 
                    src={cert.previewImage} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  />
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                {/* Text Content - Di sebelah kanan */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white leading-snug group-hover:text-blue-300 transition-colors duration-300 text-left">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-3 group-hover:text-slate-300 transition-colors duration-300 text-left">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* External Link Button - Clickable */}
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-blue-300 mt-4"
                  >
                    <span>Lihat Sertifikat</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                whileHover={{
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
              />
            </div>

            {/* Decorative corner elements */}
            <motion.div
              className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-b-[40px] border-l-transparent border-b-blue-400/10 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              whileHover={{ scale: 1.2 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {(!portfolioData?.certificates || portfolioData.certificates.length === 0) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Award size={48} className="mx-auto text-slate-600 mb-4" />
          <p className="text-slate-400">Belum ada sertifikat yang ditambahkan</p>
        </motion.div>
      )}
    </div>
  </motion.div>
);

export default function App() {
  return <CertificatePage portfolioData={mockData} />;
}