import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Wifi, Zap, Award, Users, BookOpen } from "lucide-react";
import GreekBackground from "./../images/greek.jpg"; // Using the existing Greek background
import HodImage from "./../images/hodmam.jpg";
import PrincipalImage from "./../images/principal.jpeg";
import FounderImage from "./../images/Founder.jpeg";
import CoFounderImage from "./../images/Babai-mam.png";
import SecretaryImage from "./../images/secretary.png";
import "./About.css";

interface AboutProps {
  backgroundImage?: string;
}

interface LeadershipProfileProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

// Improved StatCard component with new styling classes
const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="stat-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center h-full">
    <div className="stat-value text-3xl font-bold text-blue-600 mb-2">{value}</div>
    <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
  </div>
);

// Improved FeatureCard component with enhanced styling
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ 
  icon, 
  title, 
  description 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
  >
    <div className="flex items-center mb-4">
      <div className="feature-icon p-3 bg-blue-500 text-white rounded-lg mr-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 flex-grow">{description}</p>
  </motion.div>
);

// Modified LeadershipProfile for horizontal scrolling on mobile
const LeadershipProfile: React.FC<LeadershipProfileProps> = ({ image, name, role, description }) => {
  // Determine if this is the co-founder profile that needs special positioning
  const isCoFounder = role.includes("Co-Founder");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`leadership-profile bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                hover:shadow-xl transition-all duration-300 h-full flex flex-col ${isCoFounder ? 'co-founder-profile' : ''}`}
      style={{
        minWidth: '280px', // Fixed minimum width for carousel items
        maxWidth: '340px'  // Maximum width for larger screens
      }}
    >
      <div className="relative h-64">
        <img
          src={image}
          alt={`${name} - ${role}`}
          className="leadership-profile-image"
        />
        <div className="profile-overlay"></div>
        <div className="profile-details">
          <h3 className="profile-name">{name}</h3>
          <div className="profile-role">{role}</div>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

// ScrollSection component for mobile-optimized scroll effects
const ScrollSection: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  
  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      id={id}
      className="scroll-section"
    >
      {children}
    </motion.section>
  );
};

const About: React.FC<AboutProps> = ({ backgroundImage = GreekBackground }) => {
  const navigate = useNavigate();
  const mainRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  // Function to scroll the carousel left or right
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Approximate width of each card
      const newPosition = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount 
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      // Update current index for button disabling
      const itemWidth = 300;
      const newIndex = Math.round(newPosition / itemWidth);
      setCurrentIndex(newIndex < 0 ? 0 : newIndex);
    }
  };
  
  // Smooth scroll function for internal navigation
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  // Add touch-based smooth scrolling for mobile devices
  useEffect(() => {
    // Calculate total items for the carousel
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.scrollWidth;
      const itemWidth = 300; // Approximate width of each card
      setTotalItems(Math.ceil(carouselWidth / itemWidth));
    }
    
    // Add CSS for smooth scrolling to body specifically for mobile
    if (window.innerWidth <= 768) {
      document.body.style.scrollBehavior = 'smooth';
      
      // Add custom scroll effect for iOS momentum scrolling
      const style = document.createElement('style');
      style.textContent = `
        @media (max-width: 768px) {
          html, body {
            -webkit-overflow-scrolling: touch;
          }
          .scroll-reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          .scroll-reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .leadership-carousel {
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
            position: relative;
            scroll-snap-type: x mandatory;
          }
          .leadership-carousel > div {
            scroll-snap-align: start;
          }
          .leadership-carousel::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
          }
          .carousel-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .carousel-button:hover {
            background-color: rgba(255, 255, 255, 0.9);
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
          }
          .carousel-button.left {
            left: 5px;
          }
          .carousel-button.right {
            right: 5px;
          }
          .carousel-button svg {
            width: 20px;
            height: 20px;
            stroke: #3B82F6;
          }
          .carousel-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .carousel-navigation {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          .scroll-indicator {
            position: absolute;
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 6px;
          }
          .scroll-indicator-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: rgba(59, 130, 246, 0.3);
            transition: background-color 0.3s ease;
          }
          .scroll-indicator-dot.active {
            background-color: rgba(59, 130, 246, 1);
          }
        }
      `;
      document.head.appendChild(style);
      
      // Observer for scroll animations on mobile
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      
      // Add the scroll-reveal class to all sections
      document.querySelectorAll('section').forEach(section => {
        section.classList.add('scroll-reveal');
        observer.observe(section);
      });
      
      // Add scroll listener to update active indicator and button states
      const carousel = carouselRef.current;
      if (carousel) {
        // Create scroll indicators
        const scrollIndicatorContainer = document.createElement('div');
        scrollIndicatorContainer.className = 'scroll-indicator';
        
        // Calculate how many indicators needed based on carousel width and item width
        const carouselWidth = carousel.scrollWidth;
        const visibleWidth = carousel.clientWidth;
        const itemWidth = 300; // Approximate width of each card
        const totalItems = Math.ceil(carouselWidth / itemWidth);
        const numIndicators = Math.ceil(carouselWidth / visibleWidth);
        
        // Create indicator dots
        for (let i = 0; i < numIndicators; i++) {
          const dot = document.createElement('div');
          dot.className = 'scroll-indicator-dot';
          if (i === 0) dot.classList.add('active');
          scrollIndicatorContainer.appendChild(dot);
        }
        
        // Add indicators to DOM
        carousel.parentNode?.appendChild(scrollIndicatorContainer);
        
        // Add scroll listener to update active indicator
        carousel.addEventListener('scroll', () => {
          const scrollPosition = carousel.scrollLeft;
          const maxScroll = carousel.scrollWidth - carousel.clientWidth;
          const scrollPercentage = scrollPosition / maxScroll;
          const activeIndex = Math.floor(scrollPercentage * (numIndicators - 1));
          setCurrentIndex(Math.round(scrollPosition / itemWidth));
          
          // Update active indicator
          const dots = scrollIndicatorContainer.querySelectorAll('.scroll-indicator-dot');
          dots.forEach((dot, index) => {
            if (index === activeIndex) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        });
      }
      
      return () => {
        document.body.style.scrollBehavior = '';
        document.head.removeChild(style);
        document.querySelectorAll('.scroll-reveal').forEach(el => {
          observer.unobserve(el);
          el.classList.remove('scroll-reveal');
        });
        
        // Clean up scroll indicators
        const scrollIndicator = document.querySelector('.scroll-indicator');
        scrollIndicator?.parentNode?.removeChild(scrollIndicator);
      };
    }
  }, []);
  
  // Adding the missing departmentStats
  const departmentStats = [
    { value: "100%", label: "Placement Rate" },
    { value: "20+", label: "Research Publications" },
    { value: "15", label: "Industry Partners" },
    { value: "₹50L", label: "Research Grants" }
  ];
  
  const eceHighlights = [
    {
      title: "Hermes Communication Systems", // Keeping original titles
      description: "Cutting-edge research and training in wireless communications, signal processing, and network infrastructure development.",
      icon: <Wifi className="w-6 h-6" />,
    },
    {
      title: "Hephaestus VLSI Design",
      description: "Advanced integrated circuit design, semiconductor physics, and electronic system architecture for next-generation technology.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: "Zeus Embedded Systems",
      description: "Innovative approaches to IoT, real-time computing, microcontroller programming, and hardware-software integration.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const achievements = [
    "Golden Laurel Award at IEEE International Conference 2024",
    "₹50 Lakh research grant for Olympus Innovation Lab",
    "Athena Partnership with leading semiconductor companies",
    "100% placement record for the past three consecutive years"
  ];
  
  const leadershipTeam = [
    {
      image: FounderImage,
      name: "Prof. K.R Sundararajan",
      role: "Founder (Ktistes)",
      description: "Prof. K.R. Sundararajan established the Indian Institute of Engineering Technology (IIET) in 1947 to address the shortage of engineering colleges. He later founded Meenakshi College for Women in 1974 and a full-fledged engineering college in 2001 to provide quality education. His legacy continues to shape engineering education in South India."
    },
    {
      image: CoFounderImage,
      name: "Dr. K.S. Babai",
      role: "Co-Founder (Synktistes)",
      description: "Dr. K.S. Babai, a graduate of College of Engineering, Guindy (1966), earned her master's from IIT Madras (1980) and a Ph.D. from Annamalai University. She excelled in technical education, leading Meenakshi Sundararajan Engineering College with dedication. Her perseverance and willpower continue to inspire generations."
    },
    {
      image: SecretaryImage,
      name: "Mr. N. Sreekanth",
      role: "Secretary (Grammateus)",
      description: "Mr. N. Sreekanth, our secretary, actively encourages participation in programs that enhance skills like communication, problem-solving, teamwork, and creativity. His dedication to fostering institutional clubs strengthens our learning experience. By prioritizing extracurricular activities, he empowers us to become well-rounded professionals ready for the future."
    },
    {
      image: PrincipalImage,
      name: "Dr. S. V. Saravanan",
      role: "Principal (Archon)", // Keeping the Greek titles
      description: "Dr. S. V. Saravanan, our principal, seamlessly integrates technical skills with academics, fostering a holistic learning environment. His mentorship, motivational guidance, and hands-on approach empower students to thrive. Committed to student success, he ensures a well-rounded educational journey toward excellence."
    },
    {
      image: HodImage,
      name: "Mrs. Siji",
      role: "Head of Department (Kephale)",
      description: "Mrs. Siji, as the Head of the Department, has been a guiding force in shaping the success of the Electronics and Communication Engineering Department. Her leadership has fostered an environment of innovation, excellence, and academic growth. With her vision, the department continues to excel in education, research, and technological advancements."
    }
  ];
  
  const handleCardClick = () => {
    navigate("/event/technical");
  };

  // Add scrolling progress indicator for mobile
  const { scrollYProgress } = useScroll();
  const scrollProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={mainRef} className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Mobile Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left md:hidden"
        style={{ scaleX: scrollProgress }}
      />
      
      {/* Mobile Scroll Navigation */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5"/>
            <path d="m5 12 7-7 7 7"/>
          </svg>
        </button>
      </div>
      
      {/* Hero Section with Improved Background and Mobile Optimizations */}
      <ScrollSection id="about">
        <section 
          className="hero-section relative py-20 md:py-28 overflow-hidden bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 32, 64, 0.85), rgba(0, 32, 64, 0.75)), url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Electronics & Communication Engineering
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Pioneering the future of electronic systems and communication technologies through
                innovation, research, and industry-aligned education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => navigate("/programs")}
                  className="cta-button px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Our Programs
                </button>
                <button 
                  onClick={() => navigate("/contact")}
                  className="cta-button px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Stats Section with Equal Height Cards */}
          <div className="container mx-auto px-4 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {departmentStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <StatCard value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

     

      <div className="greek-divider mx-auto max-w-4xl"></div>

      {/* Leadership Team Section with Horizontal Scrolling on Mobile */}
      <ScrollSection>
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-4 greek-header relative"
              >
                Our Leadership Team
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300"
              >
                Meet the experienced professionals guiding our department to excellence
              </motion.p>
            </div>
            
            {/* Mobile horizontal scroll carousel for Leadership team */}
            <div className="relative max-w-6xl mx-auto carousel-navigation">
              {/* Mobile scroll hint (only visible on small screens) */}
              <div className="md:hidden text-center text-sm text-gray-500 mb-4">
                <span>← Swipe to see more →</span>
              </div>
              
              {/* Navigation buttons for mobile carousel */}
              <button 
                className="carousel-button left"
                onClick={() => scrollCarousel('left')}
                disabled={currentIndex <= 0}
                aria-label="Previous professor"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              
              <button 
                className="carousel-button right"
                onClick={() => scrollCarousel('right')}
                disabled={currentIndex >= leadershipTeam.length - 1}
                aria-label="Next professor"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
              
              {/* Leadership team carousel (horizontal on mobile, grid on desktop) */}
              <div 
                ref={carouselRef}
                className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 
                           md:overflow-visible overflow-x-auto pb-8 leadership-carousel
                           flex md:flex-wrap flex-nowrap"
              >
                {leadershipTeam.map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 md:flex-shrink px-2 first:pl-4 last:pr-4 md:px-0 w-auto"
                  >
                    <LeadershipProfile 
                      image={leader.image} 
                      name={leader.name} 
                      role={leader.role} 
                      description={leader.description} 
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      <div className="greek-divider mx-auto max-w-4xl"></div>

      {/* CTA Section with Improved Gradient and Mobile Scroll Animation */}
      <ScrollSection>
        <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-white mb-6"
              >
                Ready to Join Our Department?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-blue-100 mb-8"
              >
                Discover opportunities in Electronics & Communication Engineering
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => navigate("/admissions")}
                  className="cta-button px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => navigate("/contact")}
                  className="cta-button px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      <div className="greek-divider mx-auto max-w-4xl"></div>

      {/* Research Spotlight Section with Mobile-Optimized Layout */}
      <ScrollSection>
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-4 greek-header relative"
              >
                Research & Innovation
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300"
              >
                Exploring the frontiers of electronics and communication technology
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-4" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Publications</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our faculty and students have published over 20 research papers in prestigious international journals and conferences, focusing on wireless communication, VLSI design, and embedded systems.
                </p>
                <button 
                  onClick={() => navigate("/research")}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                >
                  View Publications
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 mr-4" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Industry Partnerships</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We collaborate with 15+ leading technology companies to provide real-world experience, internship opportunities, and joint research projects for our students and faculty.
                </p>
                <button 
                  onClick={() => navigate("/partners")}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                >
                  Our Partners
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* Footer Navigation Links with Improved Mobile Layout */}
      
    </div>
  );
};

export default About;