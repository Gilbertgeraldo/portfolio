'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

export const CertificatePage = ({ portfolioData }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    className="h-full flex flex-col justify-center items-center relative"
  >
    {/* Background gradient elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div className="w-full max-w-7xl text-center relative z-10">
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
        {portfolioData?.certificates?.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -12 }}
            className="group relative"
          >
            {/* Card Container */}
            <div className="relative h-full rounded-2xl overflow-hidden">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-md rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Image Container */}
                <div className="w-full aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-900/50 to-slate-900/80">
                  <img 
                    src={cert.previewImage} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  />
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Text Content */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-white leading-snug group-hover:text-blue-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-300">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* External Link Button */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span>Lihat</span>
                    <ExternalLink size={14} />
                  </motion.div>
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
          </motion.a>
        ))}
      </div>

      {/* Empty State */}
      {!portfolioData?.certificates || portfolioData.certificates.length === 0 && (
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

// Mock data untuk preview
export default function App() {
  const mockData = {
    certificates: [
      {
        title: "React Advanced",
        issuer: "Udemy",
        previewImage: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=500&fit=crop",
        url: "#"
      },
      {
        title: "JavaScript Master",
        issuer: "Coursera",
        previewImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop",
        url: "#"
      },
      {
        title: "Web Design",
        issuer: "Skillshare",
        previewImage: "https://images.unsplash.com/photo-1516321318423-f06f70e504f4?w=400&h=500&fit=crop",
        url: "#"
      },
      {
        title: "UI/UX Design",
        issuer: "Figma Academy",
        previewImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop",
        url: "#"
      },
      {
        title: "Cloud Computing",
        issuer: "AWS",
        previewImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=500&fit=crop",
        url: "#"
      },
    ]
  };

  return <CertificatePage portfolioData={mockData} />;
}