'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const ContactPage = ({ portfolioData }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
        transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
        className="h-full flex justify-center items-center"
    >
        <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-4">Hubungi Saya</h2>
            <p className="text-slate-300 mb-8">Mari kita wujudkan ide Anda menjadi kenyataan.</p>
            <div className="flex justify-center items-center gap-8">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition"><Github size={32} /></a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition"><Linkedin size={32} /></a>
                <a href={`mailto:${portfolioData.contact.email}`} className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-indigo-500/30">
                    <Mail size={20} /> Kirim Email
                </a>
            </div>
        </div>
    </motion.div>
);
