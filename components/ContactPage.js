'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export const ContactPage = ({ portfolioData }) => {
  const contactLinks = [
    {
      icon: <Github size={32} />,
      label: 'GitHub',
      description: 'Lihat portofolio code saya',
      url: portfolioData.contact.github,
      color: 'from-slate-700 to-slate-900',
      borderColor: 'border-slate-600/50',
      iconColor: 'text-slate-300',
      hoverBg: 'hover:from-slate-600 hover:to-slate-800'
    },
    {
      icon: <Linkedin size={32} />,
      label: 'LinkedIn',
      description: 'Terhubung dengan saya',
      url: portfolioData.contact.linkedin,
      color: 'from-blue-700 to-blue-900',
      borderColor: 'border-blue-600/50',
      iconColor: 'text-blue-300',
      hoverBg: 'hover:from-blue-600 hover:to-blue-800'
    },
    {
      icon: <Mail size={32} />,
      label: 'Email',
      description: 'Kirim email langsung',
      url: `mailto:${portfolioData.contact.email}`,
      color: 'from-indigo-700 to-purple-900',
      borderColor: 'border-indigo-600/50',
      iconColor: 'text-indigo-300',
      hoverBg: 'hover:from-indigo-600 hover:to-purple-800'
    }
  ];

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
      className="w-full h-full flex flex-col justify-center items-center relative px-4"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl z-10"
      >
        {/* Header dengan icon */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-lg opacity-50"></div>
            <div className="relative bg-slate-950 p-4 rounded-full border border-indigo-500/30">
              <Mail size={36} className="text-indigo-400" />
            </div>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
        >
          Hubungi Saya
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-300 text-lg md:text-xl mb-6 leading-relaxed"
        >
          Mari kita menjalin komunikasi yang hangat 😎💕
        </motion.p>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-400 text-base mb-12 max-w-lg mx-auto"
        >
          Saya terbuka untuk peluang baru, pertanyaan, atau sekadar mengobrol. Silakan hubungi saya ya cuyyyyy😎👌
        </motion.p>

        {/* Contact Cards Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative bg-gradient-to-br ${link.color} ${link.hoverBg} border ${link.borderColor} rounded-2xl p-6 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl`}
            >
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${link.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <ArrowRight size={24} className={`${link.iconColor} opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 text-left">
                  {link.label}
                </h3>
                
                <p className="text-sm text-slate-300 text-left group-hover:text-white transition-colors duration-300 flex-grow">
                  {link.description}
                </p>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                boxShadow: `inset 0 0 20px rgba(255,255,255,0.1)`
              }}></div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-flex gap-2 text-slate-400 text-sm"
          >
            <span>✨ Respon cepat dijamin!</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-10 text-indigo-400/20 text-6xl pointer-events-none"
      >
        💬
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-10 right-10 text-purple-400/20 text-6xl pointer-events-none"
      >
        📬
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const mockData = {
    contact: {
      email: "gilbertcat6@gmail.com",
      github: "https://github.com/gilbertaja",
      linkedin: "https://www.linkedin.com/in/gilbert-geraldo-534939364",
    }
  };
  return <ContactPage portfolioData={mockData} />;
}