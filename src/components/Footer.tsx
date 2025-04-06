import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, Github, Music } from 'lucide-react';
import dk from "../images/Dhanush.jpeg";
import mk from "../images/Kishore.jpeg";
import me from "../images/Barath-Anand.jpeg";
import prem from "../images/prem-kumar.jpeg";
import sound from "../../public/audio/maaran-parotta-kadai.mp3"

const Footer: React.FC = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const websiteTeam = [
    {
      name: "Prem Kumar M",
      role: "Web Developer",
      image: prem,
      social: {
        github: "https://github.com/premkumar6767",
        linkedin: "https://www.linkedin.com/in/prem-kumar-m-167b722a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/prem_madhan_777?igsh=MWk3b2cyZWRtZG04NA=="
      }
    },
    {
      name: "Barath Anand",
      role: "Web Developer",
      image: me,
      social: {
        github: "https://github.com/theeightboys",
        linkedin: "https://www.linkedin.com/in/barath-anand-2101a9242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://instagram.com/a__barath",
      }
    },
    {
      name: "Kishore M",
      role: "Web Developer",
      image: mk,
      social: {
        github: "https://github.com/theeightboys",
        linkedin: "https://www.linkedin.com/in/kishore-m-340129288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://instagram.com/duh.its_kishore__"
      }
    },
    {
      name: "Dhanush Kumar M",
      role: "Web Developer",
      image: dk,
      social: {
        github: "https://github.com/theeightboys",
        linkedin: "https://www.linkedin.com/in/dhanush-kumar-674b062a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://instagram.com/alwaysdhanush_10"
      }
    }
  ];

  return (
    <footer className="bg-deep-blue/95 border-t border-gold/20 pt-8 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-8 md:mb-12">
          {/* Team Section - Full width on mobile */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.h3 
              className="text-xl font-cinzel font-bold text-gold mb-6 md:mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Our Website Team
            </motion.h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {websiteTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="mb-3 md:mb-4 relative cursor-pointer overflow-hidden rounded-full border-2 border-gold/30 hover:border-gold/80 hover:shadow-lg hover:shadow-gold/20"
                    whileHover={{ 
                      boxShadow: "0 0 15px rgba(255, 215, 0, 0.4)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden flex items-center justify-center bg-deep-blue">
                      <motion.img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: 'center top' }}
                        whileHover={{ 
                          scale: 1.15,
                          transition: { duration: 0.5 }
                        }}
                      />
                    </div>
                  </motion.div>
                  <motion.h4 
                    className="text-gold font-medium text-sm md:text-lg text-center"
                    whileHover={{ scale: 1.05, color: "#FFD700" }}
                  >
                    {member.name}
                  </motion.h4>
                  <p className="text-gray-300 text-xs md:text-sm mb-2 md:mb-3 text-center">{member.role}</p>
                  <div className="flex space-x-2 md:space-x-3">
                    {member.social.github && (
                      <motion.a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gold hover:text-light-blue transition-colors"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <Github className="h-3 w-3 md:h-4 md:w-4 golden-glow" />
                      </motion.a>
                    )}
                    {member.social.linkedin && (
                      <motion.a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gold hover:text-light-blue transition-colors"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <Linkedin className="h-3 w-3 md:h-4 md:w-4 golden-glow" />
                      </motion.a>
                    )}
                    {member.social.instagram && (
                      <motion.a 
                        href={member.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gold hover:text-light-blue transition-colors"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <Instagram className="h-3 w-3 md:h-4 md:w-4 golden-glow" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Sections Grid - Stack on mobile, 3 columns on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PRANAV2K25 Info */}
            <div>
              <motion.div 
                className="flex items-center gap-2 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Flame className="h-6 w-6 md:h-8 md:w-8 text-gold golden-glow" />
                <span className="text-gold font-cinzel text-xl md:text-2xl font-bold">PRANAV2K25</span>
              </motion.div>
              <motion.p 
                className="text-gray-300 text-sm md:text-base mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                A collegiate symposium blending Greek mythology with futuristic innovation, inspiring the next generation of thinkers and creators.
              </motion.p>
              <motion.div 
                className="flex space-x-4 mb-8 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="https://www.instagram.com/__pranav2k25_" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-light-blue transition-colors">
                  <Instagram className="h-5 w-5 golden-glow" />
                </a>
                <a href="#" className="text-gold hover:text-light-blue transition-colors">
                  <Linkedin className="h-5 w-5 golden-glow" />
                </a>
              </motion.div>
            </div>

            {/* Contact Info - Only show on homepage */}
            {location.pathname === "/" && (
              <div>
                <motion.h3 
                  className="text-lg md:text-xl font-cinzel font-bold text-gold mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Contact Us
                </motion.h3>
                <motion.ul 
                  className="space-y-3 md:space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <li className="flex items-start">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-gold golden-glow mr-2 md:mr-3 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">ecepranav2k25@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-gold golden-glow mr-2 md:mr-3 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">+91 63747 73408</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gold golden-glow mr-2 md:mr-3 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">Meenakshi Sundararajan Engineering College, Kodambakkam, Chennai</span>
                  </li>
                </motion.ul>
              </div>
            )}
            
            {/* Subscribe Section */}
            <div>
              <div className="flex items-center gap-2">
                <p className="text-lg md:text-xl font-cinzel font-bold text-gold mb-4 md:mb-6">WEBSITE NAALE PRANAV2K25 WEBSITE DHAN</p>
                <motion.div
                  className="cursor-pointer text-gold"
                  onClick={togglePlay}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: isPlaying ? 0 : 20,
                    filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.7))"
                  }}
                  animate={isPlaying ? {
                    scale: [1, 1.1, 1],
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 1.5
                    }
                  } : {}}
                >
                  {/* Greek lyre music icon SVG with gold styling */}
                  <svg 
                    width="28" 
                    height="28" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="golden-glow"
                  >
                    <path d="M9 18V5l12-2v13" stroke="#FFD700" />
                    <path d="M9 9.08c-1.18-.69-3.33-.08-3.33 1.79C5.67 12.74 7.82 13.3 9 12.62" stroke="#FFD700" />
                    <path d="M21 12c0 1.66-2 3-2 3s-2-1.34-2-3 2-3 2-3 2 1.34 2 3Z" stroke="#FFD700" />
                    <path d="M6 12V7" stroke="#FFD700" />
                    <path d="M18 7.5V16" stroke="#FFD700" />
                  </svg>
                </motion.div>
              </div>
              
              {/* Hidden audio element */}
              <audio 
                ref={audioRef} 
                src={sound}
                onEnded={() => setIsPlaying(false)} 
              />
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <motion.div 
          className="border-t border-gold/20 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p>© {currentYear} PRANAV2K25. All rights reserved. Designed with the wisdom of MSEC and the creativity of the website team.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;