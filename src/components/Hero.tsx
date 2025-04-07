import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Download, Calendar, MapPin, Star, ArrowDown, Share2, Instagram, Linkedin, Music, Volume2, VolumeX } from "lucide-react";
import './hero.css'

const Hero = () => {
  const [currentTextMode, setCurrentTextMode] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const [shootingStarsDone, setShootingStarsDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  
  // Constellation data remains the same
  const constellations = [
    {
      name: "Aries",
      stars: [
        { x: 20, y: 30, size: 3, brightness: 0.7 },
        { x: 22, y: 32, size: 4, brightness: 1 },
        { x: 25, y: 28, size: 3, brightness: 0.8 },
        { x: 27, y: 33, size: 2, brightness: 0.5 }
      ],
      connections: [
        [0, 1],
        [1, 2],
        [2, 3]
      ],
      color: "text-yellow-300"
    },
    {
      name: "Orion",
      stars: [
        { x: 50, y: 40, size: 4, brightness: 1 },
        { x: 52, y: 42, size: 5, brightness: 1 },
        { x: 54, y: 38, size: 3, brightness: 0.8 },
        { x: 56, y: 43, size: 4, brightness: 0.9 }
      ],
      connections: [
        [0, 1],
        [1, 2],
        [2, 3]
      ],
      color: "text-blue-300"
    }
  ];

  const globalConnections = [
    { from: { constellation: "Aries", starIndex: 3 }, to: { constellation: "Orion", starIndex: 0 } }
  ];

  const textModes = [
    "PRANAV 2K25", // Added space between PRANAV and 2K25
    "π 2K25", // Added space here too
    "Π^2 * K^25",
    "ΜΥΘΟΛΟΓΙΑ",
    "ப்ரணவ் 2025", // Added space here
    "ΠΡΟΜΗΘΕΑΣ",
  ];

  // Event details with maps URLs
  const eventDetails = {
    date: "April 16, 2025",
    venue: "Meenakshi Sundararajan Engineering College",
    venueMapUrl: "https://maps.google.com/?q=Meenakshi+Sundararajan+Engineering+College,+Chennai",
    description: "Experience the fusion of ancient Greek wisdom and modern technological innovation at our one-day symposium. PRANAV 2K25 brings together mythology and technology in a unique academic celebration that bridges centuries of human knowledge.",
    websiteUrl: "https://msec.edu.in",
    registrationUrl: "https://msec.edu.in/register" // Added explicit registration URL
  };

  // Social media links
  const socialMediaLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/__pranav2k25_", color: "bg-gradient-to-br from-purple-600 to-pink-500" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/pranav2k25", color: "bg-blue-600" }
  ];

  // Audio controls
  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Add favicon to the document head
  useEffect(() => {
    const favicon = document.createElement('link');
    favicon.rel = 'shortcut icon';
    favicon.href = '/favicon.ico';
    document.head.appendChild(favicon);

    return () => {
      const existingFavicon = document.querySelector("link[rel='shortcut icon']");
      if (existingFavicon) {
        document.head.removeChild(existingFavicon);
      }
    };
  }, []);

  useEffect(() => {
    // Show shooting stars first, then reveal the title
    const shootingStarsTimer = setTimeout(() => {
      setShootingStarsDone(true);
    }, 3000);
    
    // Show title after shooting stars animation
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 3500);
    
    // Start cycling through text modes after title appears
    const textModeTimer = setInterval(() => {
      setCurrentTextMode((prev) => (prev + 1) % textModes.length);
    }, 2000);
    
    // Hide scroll indicator after 10 seconds
    const scrollTimer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 10000);
    
    return () => {
      clearTimeout(shootingStarsTimer);
      clearTimeout(titleTimer);
      clearInterval(textModeTimer);
      clearTimeout(scrollTimer);
    };
  }, [textModes.length]);

  // Function to handle navigation to registration page
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    
    // Navigate to registration page
    window.location.href = eventDetails.registrationUrl;
  };

  // Function to handle sharing the event with improved formatting
  const handleShare = async () => {
    try {
      const shareText = `Join us for PRANAV 2K25: National Level Technical Symposium on ${eventDetails.date} at ${eventDetails.venue}. Learn more at ${eventDetails.websiteUrl}`;
      
      if (navigator.share) {
        await navigator.share({
          title: 'PRANAV 2K25 Symposium',
          text: shareText,
          url: eventDetails.websiteUrl,
        });
      } else {
        // Fallback for browsers that don't support the Web Share API
        navigator.clipboard.writeText(shareText);
        alert('Event details copied to clipboard! Share with your friends and colleagues.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  // Responsive design helper
  const getResponsiveSize = (base, sm, md, lg, xl) => {
    const width = windowSize.width;
    if (width < 640) return base;
    if (width < 768) return sm;
    if (width < 1024) return md;
    if (width < 1280) return lg;
    return xl;
  };

  const backgroundStars = Array.from({ length: 100 }, (_, i) => ({
    id: `star-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.7 + 0.3
  }));

  const nebulaElements = Array.from({ length: 5 }, (_, i) => ({
    id: `nebula-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 10,
    color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`
  }));

  const currentText = textModes[currentTextMode].split("");

  const findConstellationByName = (name) => {
    if (!name) return null;
    return constellations.find(c => 
      c.name.toLowerCase() === name.toLowerCase()
    ) || null;
  };

  // Shooting stars data
  const shootingStars = [
    { id: 'star-1', startX: 0, startY: 30, endX: 50, endY: 50, duration: 2, delay: 0, size: 2 },
    { id: 'star-2', startX: 100, startY: 20, endX: 50, endY: 50, duration: 2, delay: 0.5, size: 2 }
  ];

  return (
    <section id='hero' className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B1026] via-[#0D1C3D] to-[#0B1026]">
      {/* Add meta viewport tag to ensure proper mobile scaling */}
      <motion.div
        className="fixed top-0 left-0 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </motion.div>

      {/* Fixed top bar for navigation controls */}
      <motion.div 
        className="fixed top-0 left-0 right-0 px-4 py-4 sm:px-6 sm:py-5 md:py-6 flex justify-between items-center z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        {/* Logo/brand placeholder - left side */}
        <motion.div 
          className="rounded-full bg-white/5 backdrop-blur-sm p-2 sm:p-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          
        </motion.div>
        
        {/* Music toggle button - right side */}
        <motion.button
          onClick={toggleMusic}
          className="flex items-center p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? 
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> : 
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          }
         
        </motion.button>
      </motion.div>

      {/* Social Media Links - Fixed on the side */}
      <motion.div 
        className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-30 hidden md:flex"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, staggerChildren: 0.1 }}
      >
        {socialMediaLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full ${link.color} text-white hover:scale-110 transition-all`}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 + (index * 0.1) }}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile Social Media Links - Only visible on small screens */}
      <motion.div 
        className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-6 z-30 md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        {socialMediaLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full ${link.color} text-white hover:scale-110 transition-all`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Nebula Elements */}
      {nebulaElements.map(nebula => (
        <motion.div
          key={nebula.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${nebula.size}px`,
            height: `${nebula.size}px`,
            left: `${nebula.x}%`,
            top: `${nebula.y}%`,
            backgroundColor: nebula.color
          }}
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      {/* Background Mount Olympus */}
      <div className="absolute inset-0 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"rgba(255,255,255,0.1)"}} />
              <stop offset="100%" style={{stopColor:"rgba(200,200,255,0.05)"}} />
            </linearGradient>
          </defs>
          <path 
            d="M0 100 L20 40 L40 70 L60 30 L80 60 L100 100 Z" 
            fill="url(#mountainGradient)" 
          />
        </svg>
      </div>

      {/* Background stars */}
      {backgroundStars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity
          }}
        />
      ))}

      {/* Shooting Stars Animation */}
      {shootingStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full z-10"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ 
            x: `${star.startX}%`, 
            y: `${star.startY}%`,
            scale: 0,
            opacity: 0
          }}
          animate={{ 
            x: `${star.endX}%`, 
            y: `${star.endY}%`,
            scale: [0, 1.5, 1],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeOut"
          }}
        >
          {/* Trailing effect */}
          <motion.div 
            className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-transparent via-white to-blue-300 blur-sm"
            style={{
              transformOrigin: 'right center',
              transform: `translateX(-100%) rotate(${star.startX < star.endX ? '-' : ''}45deg)`
            }}
          />
        </motion.div>
      ))}

      {/* Shooting Star Collision Effect - Only shows at end of shooting star animations */}
      {shootingStarsDone && (
        <motion.div
          className="absolute rounded-full blur-md z-20"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(100,149,237,0.5) 50%, rgba(0,0,255,0) 100%)'
          }}
          initial={{ width: '0px', height: '0px', opacity: 0 }}
          animate={{ width: '200px', height: '200px', opacity: [0, 1, 0] }}
          transition={{ duration: 1.5 }}
        />
      )}

      {/* Constellations */}
      {constellations.map((constellation, constellationIndex) => (
        <motion.div 
          key={constellation.name}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: constellationIndex * 3
          }}
        >
          {/* Stars */}
          {constellation.stars.map((star, starIndex) => (
            <div
              key={`${constellation.name}-star-${starIndex}`}
              className={`absolute ${constellation.color} flex items-center justify-center`}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size * 2}px`,
                height: `${star.size * 2}px`
              }}
            >
              <Star 
                className="w-full h-full" 
                fill={constellation.color.replace('text-', 'currentColor')} 
                stroke="none" 
                opacity={star.brightness} 
              />
            </div>
          ))}

          {/* Connections */}
          <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
            {constellation.connections.map((connection, connectionIndex) => {
              const startStar = constellation.stars[connection[0]];
              const endStar = constellation.stars[connection[1]];
              
              return (
                <motion.line
                  key={`${constellation.name}-connection-${connectionIndex}`}
                  x1={`${startStar.x}%`}
                  y1={`${startStar.y}%`}
                  x2={`${endStar.x}%`}
                  y2={`${endStar.y}%`}
                  stroke={constellation.color.replace('text-', '')}
                  strokeWidth="1"
                  strokeOpacity="0.7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    delay: connectionIndex * 0.5 + (constellationIndex * 3)
                  }}
                />
              );
            })}
          </svg>
        </motion.div>
      ))}

      {/* Global Connections */}
      <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
        {globalConnections.map((connection, index) => {
          const startConstellation = findConstellationByName(connection.from.constellation);
          const endConstellation = findConstellationByName(connection.to.constellation);
          
          if (!startConstellation || !endConstellation) {
            return null;
          }
          
          if (!startConstellation.stars[connection.from.starIndex] || 
              !endConstellation.stars[connection.to.starIndex]) {
            return null;
          }
          
          const startStar = startConstellation.stars[connection.from.starIndex];
          const endStar = endConstellation.stars[connection.to.starIndex];
          
          return (
            <motion.line
              key={`global-connection-${index}`}
              x1={`${startStar.x}%`}
              y1={`${startStar.y}%`}
              x2={`${endStar.x}%`}
              y2={`${endStar.y}%`}
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.5"
              strokeDasharray="5 5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                delay: 7
              }}
            />
          );
        })}
      </svg>
      
      {/* Content section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-4xl mx-auto h-full">
        {/* Main content container with safe area for all device sizes */}
        <div className="flex flex-col items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-20">
          {/* Title with animated characters - Only shows after shooting stars collision */}
          <div className="relative mb-4 sm:mb-6 flex items-center justify-center w-full">
            {showTitle && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTextMode}
                  className="flex space-x-2 sm:space-x-3 overflow-hidden py-2 sm:py-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                >
                  {currentText.map((char, index) => (
                    <motion.span
                      key={index}
                      className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold inline-block"
                      style={{
                        textShadow: "0 0 10px rgba(255,255,255,0.5)"
                      }}
                      initial={{ 
                        rotateY: 180,
                        opacity: 0
                      }}
                      animate={{ 
                        rotateY: 0,
                        opacity: 1,
                        color: index % 2 === 0 ? '#FFD700' : '#FFFFFF'
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                        type: "spring",
                        damping: 12
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          
          {/* Subtitle with responsive sizing - Shows slightly after title */}
          {showTitle && (
            <motion.h2
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-medium mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-yellow-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              A National Level Technical Symposium<br />
              Greek Mythology & Innovation
            </motion.h2>
          )}

          {/* About section */}
          {showTitle && (
            <motion.div
              className="mb-6 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 backdrop-blur-sm max-w-xs sm:max-w-sm md:max-w-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="text-xs sm:text-sm text-white/90">
                {eventDetails.description} Visit us at{' '}
                <a 
                  href={eventDetails.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  https://msec.edu.in
                </a>
              </p>
            </motion.div>
          )}

          {/* Register and Share buttons - FIXED FOR MOBILE DEVICES */}
          {showTitle && (
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {/* Register button - Now uses onClick handler that works on all devices */}
              <motion.button
                onClick={handleRegister}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-blue-500 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-blue-600 transition-all flex items-center justify-center text-sm sm:text-base md:text-lg w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Register Now
              </motion.button>

              {/* Share button */}
              <motion.button
                onClick={handleShare}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all flex items-center justify-center text-sm sm:text-base md:text-lg w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Share event"
              >
                <Share2 className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Share Event
              </motion.button>
            </motion.div>
          )}

          {/* Event details cards */}
          {showTitle && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              {/* Date card */}
              <motion.div
                className="flex items-center p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-blue-400 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Calendar className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xs sm:text-sm">Event Date</h3>
                  <p className="text-xs text-white/80 mt-1">{eventDetails.date}</p>
                </div>
              </motion.div>
              
              {/* Venue with Google Maps link */}
              <motion.a
                href={eventDetails.venueMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-green-500 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-bold text-xs sm:text-sm">Venue</h3>
                  <p className="text-xs text-white/80 mt-1 truncate">{eventDetails.venue}</p>
                </div>
              </motion.a>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && showTitle && (
        <motion.div
          className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 2, duration: 1 },
            y: { repeat: Infinity, duration: 1.5 }
          }}
        >
          <p className="text-white text-xs sm:text-sm mb-2 opacity-60">Scroll to discover events</p>
          <ArrowDown className="text-white w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;