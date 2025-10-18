'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Star, Code2, Zap } from 'lucide-react';
import { useState } from 'react';

export const ProjectPage = ({ portfolioData }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
      className="w-full h-full flex flex-col justify-center items-center relative px-4 overflow-y-auto pb-12 scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-600/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-slate-600/50"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl text-center mb-8"
      >
        {/* Main Title */}
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
        >
          My Projects
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-400 text-sm md:text-base"
        >
          Showcase karya-karya terbaik yang menggabungkan kreativitas dan teknologi
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            whileHover={{ y: -12 }}
            className="group relative"
          >
            {/* Card Container */}
            <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-900/20 border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 shadow-2xl group-hover:shadow-2xl group-hover:shadow-indigo-500/20">
              
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image Container */}
              <div className="relative w-full h-40 md:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-3 right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md border border-white/20"
                >
                  <Zap size={12} /> Active
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="relative z-10 p-4 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <Star className="text-yellow-400 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" size={18} />
                </div>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0.7, height: 'auto' }}
                  whileHover={{ opacity: 1 }}
                  className="text-slate-400 text-xs md:text-sm mb-4 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 line-clamp-2"
                >
                  {project.description}
                </motion.p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="text-xs font-bold text-indigo-300 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/50 px-2 py-1 rounded-full group-hover:border-indigo-500/100 group-hover:bg-gradient-to-r group-hover:from-indigo-900/60 group-hover:to-purple-900/60 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="flex gap-2 pt-3 border-t border-white/10"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn text-xs md:text-sm"
                  >
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    <span className="hidden sm:inline">View</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-slate-800/50 border border-slate-600/50 text-slate-300 font-semibold py-2 rounded-lg hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn text-xs md:text-sm"
                  >
                    <Github size={16} className="group-hover/btn:-translate-x-1 transition-transform" />
                    <span className="hidden sm:inline">Code</span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={hoveredProject === index ? { x: ['0%', '100%'] } : {}}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>

            {/* Decorative gradient circle */}
            <motion.div
              className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              animate={hoveredProject === index ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/3 left-5 text-indigo-400/10 text-5xl pointer-events-none"
      >
        💻
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-1/3 right-5 text-purple-400/10 text-5xl pointer-events-none"
      >
        🚀
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const mockData = {
    projects: [
      {
        title: "Website Gereja GKPI",
        description: "Platform digital untuk manajemen data jemaat dengan fitur input data real-time. Masih dalam tahap pengembangan dengan fokus pada optimasi backend.",
        tags: ["Django", "Python", "HTML", "Tailwind"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
      },
      {
        title: "Portfolio Website",
        description: "Personal portfolio yang showcasing proyek dan kemampuan dalam web development dengan design modern dan interactive.",
        tags: ["Next.js", "React", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop"
      }
    ]
  };

  return <ProjectPage portfolioData={mockData} />;
}