'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Mail, Award, Star, Music } from 'lucide-react';

import { LoadingScreen } from '../components/LoadingScreen';
import { CustomCursor } from '../components/CustomCursor';
import { HomePage } from '../components/HomePage';
import { AboutPage } from '../components/AboutPage';
import  ProfileCardComponent  from '../components/ProfileCard';
import TextType from '../components/TextType';
import { ProjectPage } from '../components/ProjectPage';
import { CertificatePage } from '../components/CertificationPage';
import { ContactPage } from '../components/ContactPage';

// Data Mockup untuk seluruh halaman
const portfolioData = {
  name: "Gilbert Geraldo",
  title: "UnderGraduate Student at Data Science @ Telkom University",
  roles: ["I like physics", "I like math", "I like coding"],
  avatar: "https://placehold.co/128x128/1e293b/94a3b8?text=G",
  aboutImage: "/saya3.png", 
  bio: "Saya adalah seorang Mahasiswa Tahun pertama di Telkom University dan Saya sangat suka dengan hal-hal tentang pemrograman, Saya juga sekarang merupakan seorang Mahasiswa S1 Data Sains di Telkom University di sisi lain saya sangat senang juga Tentang Matematika dan Fisika karena 2 mata Pelajaran itu yang sering saya pelajari ketika saya di bangku SMA",
  contact: {
    email: "gilbertcat6@example.com",
    github: "https://github.com/gilbertaja",
    linkedin: "https://www.linkedin.com/in/gilbert-geraldo-534939364",
  },
  topTracks: [
    { artist: "Tame Impala", title: "The Less I Know The Better", image: "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79", previewUrl: "/audio/tame-impala.mp3" },
    { artist: "Arctic Monkeys", title: "505", image: "https://i.scdn.co/image/ab67616d0000b273d229c629f6262a3687d74542", previewUrl: "/audio/arctic-monkeys.mp3" },
    { artist: "The Strokes", title: "Reptilia", image: "https://i.scdn.co/image/ab67616d0000b2732134423a54b35581c742c852", previewUrl: "/audio/the-strokes.mp3" },
  ],
  projects: [
    { 
      title: "Website Gereja GKPI", 
      description: "Sistem manajemen konten untuk jemaat.", 
      tags: ["Django", "Python", "Html", "Tailwind"],
      image: "logo.png"
    },
  ],
  certificates: [
    { title: "Cloud Practitioner", issuer: "Amazon Web Services", icon: <Award size={24} className="text-yellow-400" /> },
    { title: "Full-Stack Specialist", issuer: "Coursera", icon: <Code size={24} className="text-blue-400" /> },
    { title: "Dasar-Dasar Desain UI/UX", issuer: "Google", icon: <Star size={24} className="text-green-400" /> },
  ],
};

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState('home');
  
 const sections = [
    { id: 'home', icon: <Home size={24} /> },
    { id: 'about', icon: <User size={24} /> },
    { id: 'projects', icon: <Code size={24} /> },
    { id: 'certificates', icon: <Award size={24} /> },
    { id: 'contact', icon: <Mail size={24} /> },
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

        <aside className="fixed top-0 left-0 h-full flex items-center z-50">
          <nav className="flex flex-col gap-4 bg-black/20 backdrop-blur-md border border-white/10 p-3 m-4 rounded-full">
            {sections.map(section => (
              <button 
                key={section.id} 
                onClick={() => setPage(section.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer ${page === section.id ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}
              >
                {section.icon}
              </button>
            ))}
          </nav>
        </aside>

        <main className="relative z-10 h-screen p-4 md:p-12 md:pl-32">
          <AnimatePresence mode="wait">
            {React.cloneElement(renderPage(), { key: page })}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}
