'use client';
import { motion } from 'framer-motion';

export const ProjectPage = ({ portfolioData }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
    transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    className="h-full flex flex-col justify-center items-center"
  >
    <h2 className="text-4xl font-bold text-white mb-12 text-center">My Project</h2>
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
      {portfolioData.projects.map(project => (
        <motion.div 
          key={project.title}
          whileHover={{ y: -8 }}
          className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
        >
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs text-cyan-300 bg-cyan-900/50 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);