import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, Github } from 'lucide-react';

// Import developer images
import premKumarImage from '../images/prem-kumar.jpeg';
import barathAnandImage from '../images/prem-kumar.jpeg';
import kishoreMImage from '../images/prem-kumar.jpeg';
import dhanushImage from '../images/prem-kumar.jpeg';

// Custom CSS class for golden glow effect
// Add this to your global CSS file
// .golden-glow {
//   filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.6));
//   color: #FFD700;
// }

interface Developer {
  name: string;
  role: string;
  linkedin: string;
  github: string;
  image: string;
}

const Footer: React.FC = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isShared, setIsShared] = useState(false);

  // Developer information
  const developers: Developer[] = [
    {
      name: "Prem Kumar M",
      role: "Frontend Lead & UI/UX",
      linkedin: "https://linkedin.com/in/arjun-sharma",
      github: "https://github.com/arjun-dev",
      image: premKumarImage
    },
    {
      name: "Barath Anand",
      role: "Backend & UI/UX",
      linkedin: "https://linkedin.com/in/priya-patel-design",
      github: "https://github.com/arjun-dev",
      image: barathAnandImage
    },
    {
      name: "Kishore M",
      role: "Backend",
      linkedin: "https://linkedin.com/in/raj-kumar-dev",
      github: "https://github.com/rajkumar-code",
      image: kishoreMImage
    },
    {
      name: "Dhanush",
      role: "Frontend",
      linkedin: "https://linkedin.com/in/divya-menon-dev",
      github: "https://github.com/divya-code",
      image: dhanushImage
    }
  ];

  // Handle email subscription
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Sharing thoughts to:', email);
      setIsShared(true);
      setTimeout(() => setIsShared(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-deep-blue/95 border-t border-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Logo and Social Links */}
          <div>
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Flame className="h-8 w-8 text-gold golden-glow" />
              <span className="text-gold font-cinzel text-2xl font-bold">PRANAV2K25</span>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A collegiate symposium blending Greek mythology with futuristic innovation, inspiring the next generation of thinkers and creators.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Social media links with hover animations */}
              <motion.a 
                href="#" 
                className="text-gold transition-colors"
                whileHover={{ scale: 1.2, color: "#4FB0FF" }}
              >
                <Instagram className="h-5 w-5 golden-glow" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gold transition-colors"
                whileHover={{ scale: 1.2, color: "#4FB0FF" }}
              >
                <Twitter className="h-5 w-5 golden-glow" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gold transition-colors"
                whileHover={{ scale: 1.2, color: "#4FB0FF" }}
              >
                <Facebook className="h-5 w-5 golden-glow" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gold transition-colors"
                whileHover={{ scale: 1.2, color: "#4FB0FF" }}
              >
                <Linkedin className="h-5 w-5 golden-glow" />
              </motion.a>
            </motion.div>
          </div>
          {/* Full Developers Showcase */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-xl font-cinzel font-bold text-gold mb-8 text-center">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developers.map((dev, index) => (
              <motion.div 
                key={index}
                className="bg-deep-blue/50 border border-gold/20 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 0 15px rgba(255, 215, 0, 0.4)",
                  borderColor: "rgba(255, 215, 0, 0.8)" 
                }}
              >
                {/* Developer Avatar */}
                <motion.div 
                  className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/30"
                  whileHover={{ scale: 1.05, borderColor: "rgba(79, 176, 255, 0.8)" }}
                >
                  <img 
                    src={dev.image} 
                    alt={dev.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h4 className="text-gold font-semibold text-lg">{dev.name}</h4>
                <p className="text-gray-300 text-sm mb-3">{dev.role}</p>
                <div className="flex justify-center space-x-3">
                  <motion.a 
                    href={dev.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold"
                    whileHover={{ scale: 1.2, color: "#4FB0FF" }}
                  >
                    <Linkedin className="h-5 w-5 golden-glow" />
                  </motion.a>
                  {dev.github && (
                    <motion.a 
                      href={dev.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gold"
                      whileHover={{ scale: 1.2, color: "#4FB0FF" }}
                    >
                      <Github className="h-5 w-5 golden-glow" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
          
          {/* Contact Us - Only on Home Page */}
          {location.pathname === "/" && (
            <div>
              <motion.h3 
                className="text-xl font-cinzel font-bold text-gold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Contact Us
              </motion.h3>
              <motion.ul 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-gold golden-glow mr-3 mt-0.5" />
                  <span className="text-gray-300">Msec123@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-gold golden-glow mr-3 mt-0.5" />
                  <span className="text-gray-300">+91 9876543210</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gold golden-glow mr-3 mt-0.5" />
                  <span className="text-gray-300">Meenakshi sundararajan engineering college, Kodambakkam, Chennai</span>
                </li>
              </motion.ul>
            </div>
          )}
          
         
        </div>
        
        
        
        {/* Subscribe Section (moved to bottom) */}
        <motion.div
          className="max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.h3 
            className="text-xl font-cinzel font-bold text-gold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Share Your Thoughts
          </motion.h3>
          <motion.p 
            className="text-gray-300 mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Share your ideas or feedback with us about PRANAV2K25.
          </motion.p>
          <motion.form 
            className="flex flex-col sm:flex-row gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            onSubmit={handleSubmit}
          >
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-deep-blue/50 border border-gold/30 text-white px-4 py-2 rounded-l-md sm:rounded-l-md sm:rounded-r-none rounded-r-md focus:outline-none focus:border-light-blue w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button 
              type="submit" 
              className="bg-gold text-deep-blue px-6 py-2 rounded-r-md sm:rounded-r-md sm:rounded-l-none rounded-l-md font-medium"
              whileHover={{ 
                backgroundColor: "#4FB0FF", 
                scale: 1.05 
              }}
              whileTap={{ scale: 0.95 }}
              disabled={isShared}
            >
              {isShared ? "Shared!" : "Share"}
            </motion.button>
          </motion.form>
          {isShared && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-light-blue text-sm mt-2 text-center"
            >
              Thank you for sharing your thoughts with us!
            </motion.p>
          )}
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-gold/20 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <p>© {currentYear} PRANAV2K25. All rights reserved. Designed with the wisdom of MSEC and the creativity of our developer team.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;