import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, Github } from 'lucide-react';
import dk from "../images/Dhanush.jpeg";
import mk from "../images/Kishore.jpeg";
import me from "../images/Barath-Anand.jpeg";
import prem from "../images/prem-kumar.jpeg";
// Custom CSS class for golden glow effect
// You can add this to your global CSS file
// .golden-glow {
//   filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.6));
//   color: #FFD700;
// }

// Add these new CSS classes to your global CSS file
// .image-zoom-container {
//   overflow: hidden;
//   border-radius: 9999px;
//   border: 2px solid rgba(255, 215, 0, 0.3);
//   transition: all 0.3s ease;
// }
// 
// .image-zoom-container:hover {
//   border-color: rgba(255, 215, 0, 0.8);
//   box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
// }
// 
// .image-zoom {
//   transition: transform 0.5s ease;
// }
// 
// .image-zoom:hover {
//   transform: scale(1.15);
// }

const Footer: React.FC = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Website team data
  const websiteTeam = [
    {
      name: "Prem Kumar",
      role: "Web Developer",
      image: prem, // Replace with actual image path
      social: {
        github: "https://github.com/alexjohnson",
        linkedin: "https://www.linkedin.com/in/prem-kumar-m-167b722a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://instagram.com/alexjohnson"
      }
    },
    {
      name: "Barath Anand ",
      role: "WebDeveloper",
      image: me, // Replace with actual image path
      social: {
        github: "https://github.com/theeightboys",
        linkedin: "https://www.linkedin.com/in/barath-anand-2101a9242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://instagram.com/a__barath",
      }
    },
    {
      name: "Kishore M",
      role: "WebDeveloper",
      image: mk, // Replace with actual image path
      social: {
        github: "https://github.com/theeightboys",
        linkedin: "https://www.linkedin.com/in/kishore-m-340129288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://instagram.com/duh.its_kishore__"
      }
    },
    {
      name: "Dhanush Kumar M",
      role: "Web Developer",
      image: dk, // Replace with actual image path
      social: {
        github: "https://github.com/theeightboys",
        linkedin: "https://www.linkedin.com/in/dhanush-kumar-674b062a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://instagram.com/alwaysdhanush_10"
      }
    }
  ];

  return (
    <footer className="bg-deep-blue/95 border-t border-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
              <a href="https://www.instagram.com/__pranav2k25_" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-light-blue transition-colors">
                <Instagram className="h-5 w-5 golden-glow" />
              </a>
              <a href="#" className="text-gold hover:text-light-blue transition-colors">
                <Linkedin className="h-5 w-5 golden-glow" />
              </a>
            </motion.div>
          </div>
           {/* Website Team Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.h3 
            className="text-xl font-cinzel font-bold text-gold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Our Website Team
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="mb-4 relative cursor-pointer overflow-hidden rounded-full border-2 border-gold/30 hover:border-gold/80 hover:shadow-lg hover:shadow-gold/20"
                  whileHover={{ 
                    boxShadow: "0 0 15px rgba(255, 215, 0, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <motion.img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ 
                        scale: 1.15,
                        transition: { duration: 0.5 }
                      }}
                    />
                  </div>
                </motion.div>
                <motion.h4 
                  className="text-gold font-medium text-lg"
                  whileHover={{ scale: 1.05, color: "#FFD700" }}
                >
                  {member.name}
                </motion.h4>
                <p className="text-gray-300 text-sm mb-3">{member.role}</p>
                <div className="flex space-x-3">
                  {member.social.github && (
                    <motion.a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gold hover:text-light-blue transition-colors"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Github className="h-4 w-4 golden-glow" />
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
                      <Linkedin className="h-4 w-4 golden-glow" />
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
                      <Instagram className="h-4 w-4 golden-glow" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
          

          {/** ✅ Show "Contact Us" ONLY on the Home Page */}
          {location.pathname === "/" && (
            <div>
              <motion.h3 
                className="text-xl font-cinzel font-bold text-gold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Contact Us
              </motion.h3>
              <motion.ul 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-gold golden-glow mr-3 mt-0.5" />
                  <span className="text-gray-300">ecepranav2k25@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-gold golden-glow mr-3 mt-0.5" />
                  <span className="text-gray-300">+91 63747 73408</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gold golden-glow mr-3 mt-0.5" />
                  <span className="text-gray-300">Meenakshi sundararajan engineering college , Kodambakkam , Chennai</span>
                </li>
              </motion.ul>
            </div>
          )}
          
          <div>
            <motion.h3 
              className="text-xl font-cinzel font-bold text-gold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Subscribe
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Stay updated with the latest news and announcements about PRANAV2K25.
            </motion.p>
            <motion.form 
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-deep-blue/50 border border-gold/30 text-white px-4 py-2 rounded-l-md focus:outline-none focus:border-light-blue w-full"
              />
              <button 
                type="submit" 
                className="bg-gold text-deep-blue px-4 py-2 rounded-r-md font-medium hover:bg-light-blue transition-colors"
              >
                Share
              </button>
            </motion.form>
          </div>
        </div>
        
       
        
        <motion.div 
          className="border-t border-gold/20 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p>© {currentYear} PRANAV2K25. All rights reserved. Designed with the wisdom of MSEC and the creativity of website team.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;