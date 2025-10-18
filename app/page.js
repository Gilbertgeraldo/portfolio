'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Mail, Award, ChevronRight } from 'lucide-react';
import { LoadingScreen } from '../components/LoadingScreen';
import { CustomCursor } from '../components/CustomCursor';
import { HomePage } from '../components/HomePage';
import { AboutPage } from '../components/AboutPage';
import { ProjectPage } from '../components/ProjectPage';
import { CertificatePage } from '../components/CertificationPage';
import { ContactPage } from '../components/ContactPage';

const portfolioData = {
  name: "Gilbert Geraldo",
  title: "UnderGraduate Student at Data Science @ Telkom University",
  roles: ["I like physics", "I like math", "I like coding"],
  avatar: "https://placehold.co/128x128/1e293b/94a3b8?text=G",
  aboutImage: "/saya3.png", 
  bio: "Saya adalah seorang Mahasiswa Tahun pertama di Telkom University dan Saya sangat suka dengan hal-hal tentang pemrograman, Saya juga sekarang merupakan seorang Mahasiswa S1 Data Sains di Telkom University di sisi lain saya sangat senang juga Tentang Matematika dan Fisika karena 2 mata Pelajaran itu yang sering saya pelajari ketika saya di bangku SMA",
  contact: {
    email: "gilbertcat6@gmail.com",
    github: "https://github.com/gilbertaja",
    linkedin: "https://www.linkedin.com/in/gilbert-geraldo-534939364",
  },
  topTracks: [
    { 
      artist: "WestLife", 
      title: "My Love", 
      image: "/westlive.jpg", 
      previewUrl: "/audio/MyLive.mp3"
    },
    { 
      artist: "BaraSuara", 
      title: "Terbuang Dalam Waktu", 
      image: "/barasuara.jpeg", 
      previewUrl: "/audio/Barasuara.mp3"
    },
    { 
      artist: "The Strokes", 
      title: "Reptilia", 
      image: "/reptilia.jpeg", 
      previewUrl: "/audio/the-strokes.mp3"
    },
  ],
  projects: [
    { 
      title: "Website Gereja GKPI", 
      description: "Note : Masih belum 100% jadi,masih ada kendala dalam BackEnd dan juga proses penginputan data jemaat ke DataBase.", 
      tags: ["Django", "Python", "Html", "Tailwind"],
      image: "/logo.png"
    },
    {
      title: "Portfolio-Website",
      description: "Membuat portfolio Website Pribadi menggunakan Next.js dan Tailwind CSS.",
      tags: ["next.js", "React" , "Tailwind CSS"],
      image: "/portfolio-project.png"
    },
  ],
  certificates: [
    {
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      issuer: "Dicoding Indonesia",
      url: "/certificates/logic101.pdf",
      previewImage: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=500&fit=crop"
    },
    {
      title: "Belajar Dasar Structured Query Language (SQL)",
      issuer: "Dicoding Indonesia",
      url: "/certificates/sql.pdf",
      previewImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop"
    },
    {
      title: "Belajar Dasar Data Science",
      issuer: "Dicoding Indonesia",
      url: "/certificates/sains.pdf",
      previewImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop"
    },
    {
      title: "Memulai Pemrograman Dengan Java",
      issuer: "Dicoding Indonesia",
      url: "/certificates/java.pdf",
      previewImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop"
    }
  ]
};

const NavButton = ({ section, isActive, onClick, index }) => {
  const colors = {
    home: 'from-blue-600 to-cyan-600',
    about: 'from-purple-600 to-pink-600',
    projects: 'from-green-600 to-emerald-600',
    certificates: 'from-amber-600 to-orange-600',
    contact: 'from-rose-600 to-red-600'
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      className="relative group"
      title={section.label}
    >
      {/* Outer glow circle */}
      <motion.div
        animate={isActive ? { scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-lg"
      />

      {/* Main button */}
      <div className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 relative group/btn ${
        isActive 
          ? `bg-gradient-to-br ${colors[section.id]} text-white shadow-lg shadow-indigo-500/60 border border-white/30` 
          : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600'
      }`}>
        <motion.div
          animate={isActive ? { rotate: 360 } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="flex items-center justify-center"
        >
          {section.icon}
        </motion.div>

        {/* Active indicator dot */}
        {isActive && (
          <motion.div
            layoutId="activeDot"
            className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-500/50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </div>

      {/* Enhanced tooltip - hidden on mobile, visible on md and up */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute left-full ml-2 sm:ml-3 md:ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none z-50 hidden md:block"
      >
        <motion.div
          className={`bg-gradient-to-br ${colors[section.id]} text-white rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold shadow-2xl border border-white/20 backdrop-blur-md whitespace-nowrap flex items-center gap-2`}
          whileHover={{ scale: 1.05 }}
        >
          {section.label}
          <ChevronRight size={14} />
        </motion.div>

        {/* Arrow pointer */}
        <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br ${colors[section.id]} transform rotate-45 border-l border-t border-white/20`}></div>
      </motion.div>

      {/* Mobile tooltip - visible only on mobile */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.8 }}
        whileHover={{ opacity: 1, y: -30, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none z-50 md:hidden"
      >
        <motion.div
          className={`bg-gradient-to-br ${colors[section.id]} text-white rounded-lg px-2 py-1 text-xs font-bold shadow-2xl border border-white/20 backdrop-blur-md whitespace-nowrap`}
          whileHover={{ scale: 1.05 }}
        >
          {section.label}
        </motion.div>

        {/* Arrow pointer for mobile */}
        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-br ${colors[section.id]} transform rotate-45 border-r border-b border-white/20`}></div>
      </motion.div>

      {/* Hover shine effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={isActive ? { x: ['0%', '100%'] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.button>
  );
};

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState('home');
  const [hoveredNav, setHoveredNav] = useState(null);
  
  const sections = [
    { id: 'home', icon: <Home size={24} />, label: 'Home' },
    { id: 'about', icon: <User size={24} />, label: 'Tentang Saya' },
    { id: 'projects', icon: <Code size={24} />, label: 'Proyek' },
    { id: 'certificates', icon: <Award size={24} />, label: 'Sertifikat' },
    { id: 'contact', icon: <Mail size={24} />, label: 'Kontak' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const renderPage = () => {
    switch (page) {
      case 'about': return <AboutPage portfolioData={portfolioData} />;
      case 'projects': return <ProjectPage portfolioData={portfolioData} />;
      case 'certificates': return <CertificatePage portfolioData={portfolioData} />;
      case 'contact': return <ContactPage portfolioData={portfolioData} />;
      default: return <HomePage portfolioData={portfolioData} onNavigate={setPage} />;
    }
  };

  return (
    <>
      <CustomCursor />
      <div className="bg-slate-950 min-h-screen text-slate-200 font-sans relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Sidebar Navigation */}
        <aside className="fixed top-0 left-0 md:h-full w-full md:w-auto flex md:items-center z-50 pointer-events-none md:pointer-events-auto">
          <motion.nav 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex flex-row md:flex-col gap-1 sm:gap-2 md:gap-8 bg-gradient-to-br from-black/40 via-slate-900/30 to-black/40 backdrop-blur-xl border border-white/10 p-2 sm:p-3 md:p-4 m-2 sm:m-3 md:m-4 rounded-2xl md:rounded-3xl w-auto md:w-auto justify-around md:justify-start shadow-2xl shadow-black/50 pointer-events-auto"
          >
            {sections.map((section, index) => (
              <div key={section.id} onMouseEnter={() => setHoveredNav(section.id)} onMouseLeave={() => setHoveredNav(null)}>
                <NavButton
                  section={section}
                  isActive={page === section.id}
                  onClick={() => setPage(section.id)}
                  index={index}
                />
              </div>
            ))}

            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none"
              animate={{ 
                boxShadow: page ? `0 0 30px rgba(99, 102, 241, 0.3)` : `0 0 20px rgba(99, 102, 241, 0.1)`
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.nav>
        </aside>

        {/* Main Content */}
        <main className="relative z-10 h-screen p-2 sm:p-4 pt-20 sm:pt-24 md:p-12 md:pl-32">
          <AnimatePresence mode="wait">
            {React.cloneElement(renderPage(), { key: page })}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}