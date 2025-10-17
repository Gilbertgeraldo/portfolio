'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause, Volume2, SkipForward } from 'lucide-react';

const ProfileCard = ({ name, title, handle, avatarUrl, onContactClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    className="relative group"
  >
    {/* Glow background */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
    
    <div className="relative bg-gradient-to-b from-slate-900/80 to-slate-950/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-300 p-8 w-80">
      {/* Avatar */}
      <div className="relative mb-8 mx-auto w-40 h-40">
        {/* Animated background ring blur */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-pink-500/30 blur-2xl"
        ></motion.div>

        {/* Outer animated ring 1 - Gradient spinning */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, linear: true }}
          className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-60"
        ></motion.div>

        {/* Outer animated ring 2 - Counter spin */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 7, repeat: Infinity, linear: true }}
          className="absolute -inset-1 rounded-full border-2 border-transparent border-t-cyan-300 border-r-blue-400 border-b-purple-400 border-l-pink-400 opacity-80"
        ></motion.div>

        {/* Inner decorative ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, linear: true }}
          className="absolute inset-0 rounded-full border border-white/20 opacity-30"
        ></motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {[0, 1, 2, 3].map(i => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.cos(i * Math.PI / 2) * 15],
                y: [0, Math.sin(i * Math.PI / 2) * 15],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.75
              }}
              className="absolute w-1 h-1 bg-blue-300 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </div>

        {/* Main glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Avatar image container */}
        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/30 group-hover:border-white/50 transition-all duration-300 shadow-2xl group-hover:shadow-purple-500/50 group-hover:shadow-2xl z-20">
          <img 
            src={avatarUrl} 
            alt={name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 brightness-95 group-hover:brightness-100"
          />
          
          {/* Overlay shimmer on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Info */}
      <h3 className="text-2xl font-bold text-white text-center mb-1">{name}</h3>
      <p className="text-base text-blue-400 text-center mb-3">{title}</p>
      <p className="text-sm text-slate-400 text-center mb-6">@{handle}</p>

      {/* Contact Button */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContactClick}
        className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Hubungi Saya
      </motion.button>
    </div>
  </motion.div>
);

const TrackItem = ({ track, isPlaying, onPlayPause, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ x: 8 }}
      className="group relative overflow-hidden rounded-xl"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
        {/* Visualizer indicator */}
        <motion.div
          className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center"
        >
          <AnimatePresence>
            {isPlaying ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex gap-1"
              >
                {[0, 1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    animate={{ scaleY: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.08 }}
                    className="w-1.5 h-6 bg-gradient-to-t from-green-400 to-green-300 rounded-full shadow-lg shadow-green-500/50"
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="w-8 h-8 rounded-full border-2 border-slate-600"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Track Info */}
        <div className="flex-grow min-w-0">
          <motion.p 
            className={`font-semibold truncate transition-colors duration-300 ${isPlaying ? 'text-green-400' : 'text-white'}`}
          >
            {track.title}
          </motion.p>
          <p className="text-sm text-slate-400 truncate group-hover:text-slate-300 transition-colors duration-300">
            {track.artist}
          </p>
        </div>

        {/* Play Button */}
        <motion.button 
          onClick={() => onPlayPause(track.previewUrl)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/50' 
              : 'bg-slate-700 text-slate-300 group-hover:bg-green-500 group-hover:text-white'
          }`}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </motion.button>
      </div>
    </motion.div>
  );
};

export const AboutPage = ({ portfolioData }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = (trackUrl) => {
    if (currentlyPlaying === trackUrl) {
      audioRef.current.pause();
      setCurrentlyPlaying(null);
    } else {
      setIsLoading(true);
      audioRef.current.src = trackUrl;
      audioRef.current.play().catch(err => console.error('Play error:', err));
      setCurrentlyPlaying(trackUrl);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    
    const handlePlay = () => setIsLoading(false);
    const handleEnded = () => setCurrentlyPlaying(null);
    const handleError = () => {
      setIsLoading(false);
      setCurrentlyPlaying(null);
    };
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
      className="h-full flex flex-col justify-center items-center relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="w-full max-w-6xl p-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Card */}
          <div className="flex justify-center">
            <ProfileCard 
              name={portfolioData.name}
              title={portfolioData.title}
              handle="Gilbert Geraldo"
              avatarUrl={portfolioData.aboutImage}
              onContactClick={() => window.location.href = `mailto:${portfolioData.contact.email}`}
            />
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 p-8 hover:bg-slate-900/60"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Tentang Saya
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-300 leading-relaxed text-lg"
            >
              {portfolioData.bio}
            </motion.p>

            {/* Music Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Music className="text-green-400" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">Lagu Favorit Saat Ini</h3>
              </div>

              <div className="space-y-3">
                {portfolioData.topTracks?.map((track, index) => (
                  <TrackItem 
                    key={track.title} 
                    track={track}
                    index={index}
                    isPlaying={currentlyPlaying === track.previewUrl}
                    onPlayPause={handlePlayPause}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
                
      <audio ref={audioRef} />
    </motion.div>
  );
};

// Mock data untuk preview
export default function App() {
  const mockData = {
    name: "Gilbert Geraldo",
    title: "Full Stack Developer",
    aboutImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Saya adalah seorang developer passionate dengan pengalaman dalam membangun aplikasi web modern. Saya percaya pada kode yang clean, desain yang user-friendly, dan inovasi berkelanjutan.",
    contact: {
      email: "gilbert@example.com"
    },
    topTracks: [
      {
        title: "Summer Vibes",
        artist: "The Weeknd",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
        previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      },
      {
        title: "Midnight Dreams",
        artist: "Dua Lipa",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
        previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
      },
      {
        title: "Electric Pulse",
        artist: "Calvin Harris",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
        previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
      },
    ]
  };

  return <AboutPage portfolioData={mockData} />;
}