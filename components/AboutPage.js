'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause } from 'lucide-react';
import ProfileCard from './ProfileCard'; // Impor ProfileCard

const TrackItem = ({ track, isPlaying, onPlayPause }) => {
  return (
    <div className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg border border-white/10">
      <img src={track.image} alt={track.title} className="w-12 h-12 rounded-md" />
      <div className="flex-grow">
        <p className="font-semibold text-white truncate">{track.title}</p>
        <p className="text-sm text-slate-400">{track.artist}</p>
      </div>
      <button 
        onClick={() => onPlayPause(track.previewUrl)}
        className="w-10 h-10 flex-shrink-0 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-400 transition-colors cursor-pointer"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
};

export const AboutPage = ({ portfolioData }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const audioRef = useRef(null);

  const handlePlayPause = (trackUrl) => {
    if (currentlyPlaying === trackUrl) {
      audioRef.current.pause();
      setCurrentlyPlaying(null);
    } else {
      audioRef.current.src = trackUrl;
      audioRef.current.play();
      setCurrentlyPlaying(trackUrl);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setCurrentlyPlaying(null);
    
    audio.addEventListener('ended', handleEnded);
    
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
      className="h-full flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-6xl p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center">
            <ProfileCard 
              name={portfolioData.name}
              title={portfolioData.title}
              handle="Gilbert Geraldo"
              avatarUrl={portfolioData.aboutImage}
              onContactClick={() => window.location.href = `mailto:${portfolioData.contact.email}`}
            />
          </div>

          <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
            <h2 className="text-4xl font-bold text-white mb-4">Tentang Saya</h2>
            <p className="text-slate-300 leading-relaxed">{portfolioData.bio}</p>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Music className="text-green-400" />
                Lagu Favorit Saat Ini
              </h3>
              <div className="space-y-4">
                {portfolioData.topTracks.map(track => (
                  <TrackItem 
                    key={track.title} 
                    track={track}
                    isPlaying={currentlyPlaying === track.previewUrl}
                    onPlayPause={handlePlayPause}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
                
      <audio ref={audioRef} />
    </motion.div>
  );
};
