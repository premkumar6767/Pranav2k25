import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Download, Calendar, MapPin, Star, ArrowDown, Share2, Instagram, Linkedin, Music, Volume2, VolumeX, Upload, File } from "lucide-react";
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
        { x: 20, y: 30, size: 2, brightness: 0.7 }, // Reduced star size for mobile
        { x: 22, y: 32, size: 3, brightness: 1 },   // Reduced star size for mobile
        { x: 25, y: 28, size: 2, brightness: 0.8 }, // Reduced star size for mobile
        { x: 27, y: 33, size: 1.5, brightness: 0.5 } // Reduced star size for mobile
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
        { x: 50, y: 40, size: 3, brightness: 1 },   // Reduced star size for mobile
        { x: 52, y: 42, size: 4, brightness: 1 },   // Reduced star size for mobile
        { x: 54, y: 38, size: 2.5, brightness: 0.8 }, // Reduced star size for mobile
        { x: 56, y: 43, size: 3, brightness: 0.9 }   // Reduced star size for mobile
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
    "PRANAV 2K25",
    "π 2K25",
    "Π^2 * K^25",
    "ΜΥΘΟΛΟΓΙΑ",
    "ப்ரணவ் 2025",
    "ΠΡΟΜΗΘΕΑΣ",
  ];

  // Event details with maps URLs
  const eventDetails = {
    date: "April 16, 2025",
    venue: "Meenakshi Sundararajan Engineering College",
    venueMapUrl: "https://maps.google.com/?q=Meenakshi+Sundararajan+Engineering+College,+Chennai",
    description: "Experience the fusion of Greek mythology and modern tech innovation at our symposium - bridging ancient wisdom with cutting-edge technology.",
    websiteUrl: "https://msec.edu.in"
  };

  // Social media links
  const socialMediaLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/__pranav2k25_", color: "bg-gradient-to-br from-purple-600 to-pink-500" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/pranav2k25", color: "bg-blue-600" }
  ];

  // Audio controls
  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Placeholder for actual audio functionality
  };

  // File download handler
  const handleDownloadPPT = () => {
    // This is a placeholder. In production, link to your actual file
    const link = document.createElement('a');
    link.href = './public/hackathon_merged.pdf'; // Replace with actual path
    link.download = 'PRANAV_2K25_Hackathon_Sample.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle file upload via Google Form
  const handleUploadPPTToDrive = () => {
    // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfyfLqtTiX2N1RkjKnyTGuaE-tUKSrDlES-4jNtq_lLLKLIWw/viewform?usp=header';

    // Open the Google Form in a new tab or window
    window.open(googleFormUrl, '_blank');
  };

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

  // Function to handle sharing the event
  const handleShare = async () => {
    try {
      const shareText = `Join us for PRANAV 2K25: National Level Technical Symposium on ${eventDetails.date} at ${eventDetails.venue}.`;

      if (navigator.share) {
        await navigator.share({
          title: 'PRANAV 2K25 Symposium',
          text: shareText,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(shareText);
        alert('Event details copied to clipboard! Share with your friends and colleagues.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const backgroundStars = Array.from({ length: 70 }, (_, i) => ({
    id: `star-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.4
  }));

  const nebulaElements = Array.from({ length: 3 }, (_, i) => ({
    id: `nebula-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 5,
    color: `rgba(${Math.random() * 200 + 55}, ${Math.random() * 200 + 55}, ${Math.random() * 200 + 55}, 0.08)`
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
    { id: 'star-1', startX: 5, startY: 5, endX: 55, endY: 35, duration: 1.2, delay: 0, size: 1 },
    { id: 'star-2', startX: 95, startY: 10, endX: 45, endY: 50, duration: 1.5, delay: 0.5, size: 1.3 }
  ];

  return (
    <section id='hero' className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B1026] via-[#0D1C3D] to-[#0B1026]">
      {/* Add meta viewport tag */}
      <motion.div
        className="fixed top-0 left-0 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </motion.div>

      {/* Fixed top bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 px-3 py-2 sm:px-6 sm:py-4 flex justify-between items-center z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        {/* Logo/brand placeholder */}
        <motion.div
          className="rounded-full bg-white/5 backdrop-blur-sm p-2 sm:p-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        </motion.div>

        {/* Music toggle button */}
        <motion.button
          onClick={toggleMusic}
          className="flex items-center p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ?
            <Volume2 className="w-4 h-4 text-white" /> :
            <VolumeX className="w-4 h-4 text-white" />
          }
        </motion.button>
      </motion.div>

      {/* Social Media Links - Side */}
      <motion.div
        className="fixed left-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-30 md:flex hidden"
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
            className={`p-1.5 rounded-full ${link.color} text-white hover:scale-110 transition-all`}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 + (index * 0.1) }}
          >
            <link.icon className="w-4 h-4" />
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile Social Media Links */}
      <motion.div
        className="fixed bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30 md:hidden"
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
          className="absolute rounded-full blur-2xl"
          style={{
            width: `${nebula.size}px`,
            height: `${nebula.size}px`,
            left: `${nebula.x}%`,
            top: `${nebula.y}%`,
            backgroundColor: nebula.color
          }}
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      {/* Background Mount Olympus */}
      <div className="absolute inset-0 opacity-15">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"rgba(255,255,255,0.08)"}} />
              <stop offset="100%" style={{stopColor:"rgba(200,200,255,0.03)"}} />
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
            scale: [0, 1.3, 1],
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
            className="absolute top-0 left-0 w-6 h-0.5 bg-gradient-to-r from-transparent via-white to-blue-300 blur-sm"
            style={{
              transformOrigin: 'right center',
              transform: `translateX(-100%) rotate(${star.startX < star.endX ? '-' : ''}45deg)`
            }}
          />
        </motion.div>
      ))}

      {/* Shooting Star Collision Effect */}
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
          animate={{ width: '100px', height: '100px', opacity: [0, 1, 0] }}
          transition={{ duration: 1 }}
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
            duration: 1.5,
            delay: constellationIndex * 2.5
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
                width: `${star.size * 1.5}px`,
                height: `${star.size * 1.5}px`
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
                  strokeWidth="0.8"
                  strokeOpacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: connectionIndex * 0.4 + (constellationIndex * 2.5)
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
              strokeWidth="0.8"
              strokeOpacity="0.4"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2.5,
                delay: 6
              }}
            />
          );
        })}
      </svg>

      {/* Content section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 w-full max-w-4xl mx-auto h-full">
        {/* Main content container */}
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-12">
          {/* Title with animated characters */}
          <div className="relative mb-3 sm:mb-4 flex items-center justify-center w-full">
            {showTitle && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTextMode}
                  className="flex space-x-1 sm:space-x-2 overflow-hidden py-1 sm:py-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  {currentText.map((char, index) => (
                    <motion.span
                      key={index}
                      className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold inline-block"
                      style={{
                        textShadow: "0 0 8px rgba(255,255,255,0.4)"
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
                        duration: 0.4,
                        delay: index * 0.03,
                        type: "spring",
                        damping: 10
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Subtitle with responsive sizing */}
          {showTitle && (
            <motion.h2
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-medium mb-3 sm:mb-4 md:mb-5 max-w-xs sm:max-w-sm md:max-w-lg text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-yellow-300"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A National Level Technical Symposium<br />
              Greek Mythology & Innovation
            </motion.h2>
          )}

          {/* About section - Shortened description */}
          {showTitle && (
            <motion.div
              className="mb-4 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 backdrop-blur-sm max-w-md text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                {eventDetails.description}
              </p>
            </motion.div>
          )}

          {/* Action buttons - Added Download and Upload buttons */}
          {showTitle && (
            <motion.div
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 w-full max-w-md px-4 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Register Now Button */}
              <motion.a
                href="#register"
                className="register-button col-span-1 xs:col-span-2 sm:col-span-2 flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="mr-2 w-4 h-4" /> Register Now
              </motion.a>

              {/* Hackathon Information */}
              <motion.p
                className="col-span-1 xs:col-span-2 sm:col-span-2 text-xs text-yellow-300 font-semibold text-center mt-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="bg-yellow-500 text-black rounded-full px-2 py-0.5 mr-1 align-middle">Info</span>
                For Hackathon registration, register like other events. Then, return to the home screen to download the sample PPT template and upload your PPT.
                The sample PPT contains problem statements and the template to be used. Please upload your PPT with your team name.
              </motion.p>

              {/* Upload PDF Button - Now redirects to Google Form */}
              <motion.button
                onClick={handleUploadPPTToDrive}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold rounded-lg hover:from-green-700 hover:to-green-900 transition-all text-xs sm:text-sm w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Upload your PPT to Google Drive"
              >
                <Upload className="w-4 h-4" />
                <span>Upload PPT</span>
              </motion.button>

              {/* Download Sample PPT Button */}
              <motion.button
                onClick={handleDownloadPPT}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all text-xs sm:text-sm w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Download sample PPT"
              >
                <Download className="w-4 h-4" />
                <span>Download Template</span>
              </motion.button>

              {/* Share Event Button */}
              <motion.button
                onClick={handleShare}
                className="col-span-1 xs:col-span-2 sm:col-span-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all flex items-center justify-center text-xs sm:text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Share event"
              >
                <Share2 className="mr-2 w-4 h-4" /> Share Event
              </motion.button>
            </motion.div>
          )}

          {/* Event details cards */}
          {showTitle && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 sm:mt-6 w-full max-w-md mx-auto px-4 sm:px-0">
              {/* Date card */}
              <motion.div
                className="flex items-center p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-blue-400 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Calendar className="mr-2 w-4 h-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xs">Event Date</h3>
                  <p className="text-xs text-white/80 mt-1">{eventDetails.date}</p>
                </div>
              </motion.div>

              {/* Venue with Google Maps link */}
              <motion.a
                href={eventDetails.venueMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-green-500 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                <MapPin className="mr-2 w-4 h-4 flex-shrink-0" />
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-bold text-xs">Venue</h3>
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
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.8 },
            y: { repeat: Infinity, duration: 1.2 }
          }}
        >
          <p className="text-xs text-white text-center mb-1 opacity-60">Scroll to discover events</p>
          <ArrowDown className="text-white w-4 h-4 animate-bounce" />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;