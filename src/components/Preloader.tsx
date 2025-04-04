import React, { useEffect, useState } from "react";
import "./Preloader.scss";
import bgImage from "../images/preload.jpg"; // Import the background image

const fonts = ["GreekHouse", "GreekFreak", "RomanFont"];

// Generate random date string in DD-MM-YYYY format
const generateRandomDate = () => {
  const day = Math.floor(Math.random() * 30) + 1;
  const month = Math.floor(Math.random() * 12) + 1;
  const year = 2025 + Math.floor(Math.random() * 5);
  return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
};

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [letterStyles, setLetterStyles] = useState<string[]>(
    Array(10).fill(fonts[0])
  );
  const [isFinal, setIsFinal] = useState(false);
  const [randomDate, setRandomDate] = useState(generateRandomDate());
  const [isDateFinal, setIsDateFinal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Calculate time left until the event
  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-04-16T00:00:00');
      const difference = eventDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Disable scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    let count = 0;
    let dateCount = 0;

    const rollIntro = () => {
      setLetterStyles(
        "PRANAV 2K25"
          .split("")
          .map(() => fonts[Math.floor(Math.random() * fonts.length)])
      );
    };
    
    const rollDate = () => {
      setRandomDate(generateRandomDate());
      dateCount++;
      if (dateCount > 8) { // Reduced from 20 to show final date sooner
        setRandomDate("16-04-2025");
        setIsDateFinal(true);
      }
    };

    // Speed up the animation - changed from 150ms to 100ms
    const interval = setInterval(() => {
      rollIntro();
      rollDate();
      count++;
      if (count > 14) { // Reduced from 25 to make entire animation shorter
        clearInterval(interval);
        setIsFinal(true);
        
        // Show the final state for exactly 2 seconds
        setTimeout(() => {
          // Re-enable scrolling when preloader is complete
          document.body.style.overflow = "";
          onComplete();
        }, 2000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      // Ensure scrolling is re-enabled when component unmounts
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Calculate font size based on screen width
  const getFontSize = () => {
    const width = windowSize.width;
    if (width <= 480) return '2.8rem'; // Increased from 2.5rem for mobile
    if (width <= 768) return '4.2rem'; // Increased from 4rem for tablet
    if (width <= 1024) return '5.8rem'; // Increased from 5.5rem for small laptop
    return '7.5rem'; // Increased from 7rem for desktop
  };
  
  const getDateFontSize = () => {
    const width = windowSize.width;
    if (width <= 480) return '1.35rem'; // Increased for mobile
    if (width <= 768) return '1.9rem'; // Increased for tablet
    if (width <= 1024) return '2.3rem'; // Increased for small laptop
    return '2.7rem'; // Increased for desktop
  };
  
  const getCountdownFontSize = () => {
    const width = windowSize.width;
    if (width <= 480) return '1rem'; // Increased from 0.9rem for mobile
    if (width <= 768) return '1.3rem'; // Increased from 1.2rem for tablet
    return '1.6rem'; // Increased from 1.5rem for desktop
  };

  return (
    <div className="preloader-container">
      <div className="background-overlay animated-bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="content-wrapper">
        <h2 
          className="preloader-text"
          style={{ fontSize: getFontSize() }}
        >
          {"PRANAV 2K25".split("").map((char, index) => (
            <span
              key={index}
              className={isFinal ? "final-text" : ""}
              style={{ fontFamily: isFinal ? "RomanFont" : letterStyles[index] }}
            >
              {char}
            </span>
          ))}
        </h2>
        
        <div className="date-container">
          <h3 
            className={`date-text ${isDateFinal ? "final-date" : ""}`}
            style={{ fontSize: getDateFontSize() }}
          >
            {randomDate}
          </h3>
        </div>
        
        {isDateFinal && (
          <div className="countdown-container" style={{ fontSize: getCountdownFontSize() }}>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preloader;