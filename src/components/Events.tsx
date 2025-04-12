import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Events.css";

// Import all images
// Technical Events
import zeuseSpark from "../images/Zeusspark.jpeg";
import shortFilm from "../images/shortfilm.jpg";
import eSports from "../images/esports.jpg";
import cricbuzz from "../images/sport.jpg";
import droneWorkshop from "../images/drone.jpg";
import Paperpres from "../images/paperpres.jpg";
import wiredWonders from "../images/wirewond.jpg";
import roleAndDice from "../images/Halt-the-dice.jpeg";
import designedToDev from "../images/d2dev.jpg";
import reverseCoding from "../images/decodex.jpg";
import ojingeoGame from "../images/ojingeo.jpg";
import animeQuiz from "../images/anime.jpg";
import hack from "../images/Hackathon-1.jpg";
import auralBliss from "../images/auralbliss.jpg";
import treasureHunt from "../images/treashunt.jpg";
import robot from "../images/robotcraze.jpg" ;
// Define types for the event objects
interface EventItem {
  id: string;
  name: string;
  image: string;
  description: string;
  timing: string;
  teamSize: string;
  about: string;
  rules: string[];
  details: string;
  price?: string;
}

// Define the structure of the EVENTS object
interface EventsData {
  technical: EventItem[];
  nonTechnical: EventItem[];
  online: EventItem[];
  workshop: EventItem[];
  [key: string]: EventItem[]; // Index signature to allow string indexing
}

// Define the structure of the CATEGORY_TITLES object
interface CategoryTitles {
  technical: string;
  nonTechnical: string;
  workshop: string;
  online: string;
  [key: string]: string; // Index signature to allow string indexing
}

// Define EVENTS object to be used in the component
const EVENTS: EventsData = {
  technical: [
    {
      id: "paper-presentation",
      name: "Paper Presentation",
      image: Paperpres,
      description:
        "Showcase your research ideas and innovative findings to a distinguished panel of academicians and industry professionals.",
      timing: "10:00 AM to 1:00 PM",
      teamSize: "MAX 4",
      about:
        "This event provides an opportunity for students to present their research papers on emerging technologies, scientific innovations, and engineering advancements. Participants will receive expert feedback and gain recognition for their contributions.",
      rules: [
        "Each participant/team can present only one research paper.",
        "Papers must be original and should not have been published elsewhere.",
        "A soft copy of the paper must be submitted before the event for screening.",
        "Presentation time is 10 minutes, followed by a 5-minute Q&A session.",
        "Use of plagiarized content will lead to immediate disqualification.",
        "Presentations must follow IEEE format and should be in PPT format.",
        "Judging criteria: Originality, Technical Content, Presentation Skills, and Q&A handling.",
        "Decision of the judges will be final and binding.",
      ],
      details:
        "The event will be conducted in Hall A. Participants must bring their presentation on a USB drive and report 30 minutes before their scheduled time.",
    },
    {
      id: "hackathon",
      name: "Hackathon",
      image: hack,
      description:
        "Showcase your research ideas and innovative findings to a distinguished panel of academicians and industry professionals.",
      timing: "10:00 AM to 1:00 PM",
      teamSize: "MAX 4",
      about:
        "This event provides an opportunity for students to present their research papers on emerging technologies, scientific innovations, and engineering advancements. Participants will receive expert feedback and gain recognition for their contributions.",
      rules: [
        "Each participant/team can present only one research paper.",
        "Papers must be original and should not have been published elsewhere.",
        "A soft copy of the paper must be submitted before the event for screening.",
        "Presentation time is 10 minutes, followed by a 5-minute Q&A session.",
        "Use of plagiarized content will lead to immediate disqualification.",
        "Presentations must follow IEEE format and should be in PPT format.",
        "Judging criteria: Originality, Technical Content, Presentation Skills, and Q&A handling.",
        "Decision of the judges will be final and binding.",
      ],
      details:
        "The event will be conducted in LIC LAB. Participants must bring their presentation on a USB drive and report 30 minutes before their scheduled time.",
    },
    {
      
      id: "robot-craze",
      name:"Robot Craze",
      image: robot,
      description:
        "Robot craze is an action packed game where players control robots in various challenges often set in futuristic scifi environments",
      timing: "10:00 AM to 1:00 PM",
      teamSize: "MAX 4",
      about:
        "Robot craze where the goal is to compete objectives or defeat opponents  player control the robots either individually or as team",
      rules: [
        "Each participant/team can present only one research paper.",
        "Papers must be original and should not have been published elsewhere.",
        "A soft copy of the paper must be submitted before the event for screening.",
        "Presentation time is 10 minutes, followed by a 5-minute Q&A session.",
        "Use of plagiarized content will lead to immediate disqualification.",
        "Presentations must follow IEEE format and should be in PPT format.",
        "Judging criteria: Originality, Technical Content, Presentation Skills, and Q&A handling.",
        "Decision of the judges will be final and binding.",
      ],
      details:
        "The event will be conducted in Hall A. Participants must bring their presentation on a USB drive and report 30 minutes before their scheduled time.",
    },
    {
      id: "wired-wonders",
      name: "Wired Wonders",
      image: wiredWonders,
      description:
        "Test your knowledge of circuit design and troubleshooting in this electrifying competition!",
      timing: "2:00 PM to 5:00 PM",
      teamSize: "MAX 4",
      about:
        "This event challenges participants to design, analyze, and troubleshoot circuits. Participants will be provided with real-world problems and required to build functional circuits within the given time.",
      rules: [
        "Participants must bring their own calculators and circuit design tools (if needed).",
        "All circuit components and breadboards will be provided on-site.",
        "Each round consists of different tasks: circuit design, debugging, and real-time implementation.",
        "Time limit for each round: 30 minutes.",
        "Marks will be awarded based on circuit functionality, design efficiency, and time taken.",
        "Short-circuiting or mishandling of components will lead to disqualification.",
        "Finalists will have to build a working prototype of a given circuit.",
      ],
      details:
        "The competition will be held in Electronics Lab B. Participants must report 15 minutes before the event begins.",
    },
    {
      id: "decodex",
      name: "DecodeX",
      image: reverseCoding,
      description:
        "Deconstruct and debug pre-written code to reveal its intended functionality.",
      timing: "9:00 AM to 12:00 PM",
      teamSize: "MAX 4",
      about:
        "Participants will be given obfuscated or scrambled code snippets and will need to reverse engineer them to understand their logic. The goal is to identify errors, optimize the code, and restore its original functionality.",
      rules: [
        "Each team will receive multiple code snippets that need to be debugged and reconstructed.",
        "Programming languages allowed: C, C++, Python, and Java.",
        "Participants must provide comments and explanations for their solutions.",
        "Marks will be based on correctness, efficiency, and explanation clarity.",
        "Use of online compilers or external help is strictly prohibited.",
        "Final submissions must be in text or code file format.",
        "Judging will consider code quality, logic, and optimization techniques used.",
      ],
      details:
        "The event will be conducted in Coding Lab 2. Participants should bring their own laptops if required.",
    },
    {
      id: "byte-the-dice",
      name: "Byte the Dice",
      image: roleAndDice,
      description:
        "A unique event where rolling the dice leads to unpredictable tech-based quizzes and problem-solving challenges.",
      timing: "1:00 PM to 4:00 PM",
      teamSize: "MAX 4",
      about:
        "Participants will roll dice and complete various technical challenges, including debugging, circuit connections, and quizzes.",
      rules: [
        "Each team must consist of two members.",
        "Participants will roll a dice to determine the challenge they will attempt.",
        "The challenges will include debugging code, circuit problem-solving, and technical quizzes.",
        "Each team gets a limited amount of time to complete their assigned challenge.",
        "Mobile phones and external reference materials are not allowed.",
        "Teams that fail to complete their challenge will be eliminated.",
        "The team with the highest cumulative score after all rounds will be declared the winner.",
        "Judges' decisions on challenge completion and scoring are final.",
      ],
      details:
        "The event includes three rounds: Qualifier (knockout stage), Challenge Round (technical tasks), and Final Showdown (intense competition).",
    },
    {
      id: "design-2-dev",
      name: "Design 2 Dev",
      image: designedToDev,
      description:
        "A UI/UX design and development challenge where participants create a website prototype and then convert it into a functional site.",
      timing: "11:00 AM to 2 PM",
      teamSize: "MAX 4",
      about:
        "This event focuses on transforming UI/UX designs into functional web applications through creativity and coding.",
      rules: [
        "Each team must consist of 3-4 members.",
        "Participants must first create a UI/UX design before proceeding to development.",
        "UI/UX designs must be made using either Figma or Canva.",
        "The final website implementation must use HTML, CSS, and JavaScript.",
        "Teams will be given a limited time frame to complete their projects.",
        "Judges will evaluate based on creativity, functionality, and responsiveness.",
        "Plagiarized or copied designs will result in disqualification.",
        "All team members must contribute to both design and development.",
      ],
      details:
        "The event consists of two rounds: UI Design Challenge (designing a website in Figma/Canva) and Development Challenge (converting the design into a working website).",
    },
  ],
  nonTechnical: [
    {
      id: "ojingeo-game",
      name: "Ojingeo Game",
      image: ojingeoGame,
      description:
        "Inspired by the viral Korean survival game, this event will push your strategic thinking and endurance to the limit.",
      timing: "10:00 AM to 2:00 PM",
      teamSize: "1-4",
      about:
        "This event is a survival-based challenge inspired by the famous Squid Game. Participants will compete in multiple rounds of physically and mentally challenging games. The last team standing wins the ultimate prize!",
      rules: [
        "Each round will have elimination-based mini-games.",
        "Participants must follow the given rules for each game to avoid elimination.",
        "Any form of cheating or misbehavior will result in immediate disqualification.",
        "Eliminated players must exit the playing area immediately.",
        "Finalists will compete in a mystery challenge for the grand prize.",
        "Judging will be based on survival, performance, and strategy.",
      ],
      details:
        "The event will be conducted in Ground Area C. Participants must wear comfortable clothing suitable for physical activities.",
    },
    {
      id: "senpai-fans",
      name: "Senpai Fans",
      image: animeQuiz,
      description:
        "Test your anime and manga knowledge in this ultimate quiz showdown!",
      timing: "10:00 AM to 12:00 PM",
      teamSize: "1-2",
      about:
        "Are you an anime and manga expert? This quiz will challenge your knowledge across different anime genres, famous characters, theme songs, and classic storylines.",
      rules: [
        "The quiz will consist of multiple rounds: MCQs, image recognition, and audio rounds.",
        "Teams can have up to 2 members.",
        "Each correct answer earns points; incorrect answers do not result in penalties.",
        "Use of mobile phones, notes, or any external help is prohibited.",
        "Tiebreaker questions will be conducted if necessary.",
        "The team with the highest points at the end wins!",
      ],
      details:
        "The event will be conducted in Hall B. Participants should report 15 minutes before the event begins.",
    },
    {
      id: "aural-bliss",
      name: "Aural Bliss",
      image: auralBliss,
      description:
        "A music lover's paradise! 'Aural Bliss' is an exhilarating competition that tests your auditory perception and musical knowledge.",
      timing: "2:00 PM to 4:00 PM",
      teamSize: "1-3",
      about:
        "This event is for all music enthusiasts who love identifying songs, artists, and lyrics. Contestants will go through multiple rounds of music-related challenges, testing their auditory skills and knowledge.",
      rules: [
        "Participants must guess the song, artist, or lyrics based on instrumentals, sound clips, or scrambled words.",
        "Each correct answer gives points, and incorrect answers do not have penalties.",
        "Bonus rounds will be included for extra points.",
        "Participants are not allowed to use mobile phones or any external help.",
        "Finalists will face a rapid-fire round.",
        "The participant/team with the highest score at the end wins.",
      ],
      details:
        "The event will take place in Music Room 2. Participants should arrive 15 minutes early.",
    },
    {
      id: "treasure-hunt",
      name: "Treasure Hunt",
      image: treasureHunt,
      description:
        "Solve cryptic clues and uncover hidden treasures across the campus. An adventurous race against time and opponents!",
      timing: "1:00 PM to 5:00 PM",
      teamSize: "3-5",
      about:
        "Teams will solve riddles and navigate through multiple checkpoints to uncover the hidden treasure. The fastest team to complete all challenges wins.",
      rules: [
        "Each team consists of 3-5 members.",
        "Teams must follow the clue sequence provided at each checkpoint.",
        "The use of mobile phones or external help is strictly prohibited.",
        "Each checkpoint must be completed before moving to the next location.",
        "A team caught tampering with clues or misguiding others will be disqualified.",
        "All team members must stay together during the hunt.",
        "Teams must respect campus rules and avoid disturbing other events.",
        "The winning team is determined by the fastest completion time.",
      ],
      details:
        "Participants will receive their first clue at the starting point. Each clue leads to a hidden location where the next clue awaits. The final clue will guide the team to the treasure.",
    },
    {
      id: "zeus'-spark",
      name: "Zeus' Spark",
      image: zeuseSpark,
      description:
        "A series of fun and interactive electronic-themed challenges designed for tech enthusiasts.",
      timing: "11:00 AM to 2:00 PM",
      teamSize: "2-3",
      about:
        "This event is a hands-on electronics challenge where participants must complete tasks involving circuits, sensors, and basic robotics.",
      rules: [
        "Teams must complete 3 electronic challenges within the given time.",
        "Challenges include circuit building, component identification, and logic debugging.",
        "All required electronic components will be provided on-site.",
        "Use of pre-made circuits or mobile assistance is not allowed.",
        "Judging will be based on accuracy, speed, and efficiency.",
        "Any misuse of components may result in disqualification.",
      ],
      details:
        "The competition will be held in Electronics Lab 3. Participants should bring their own basic tools (screwdrivers, pliers, etc.) if needed.",          
    },
    {
      id: "cricbuzz",
      name: "Cricbuzz",
      image: cricbuzz,
      description:
        "A series of mini sports challenges and quizzes for sports enthusiasts.",
      timing: "Day 2 - 11:00 AM to 2:00 PM",
      teamSize: "2-3",
      about:
        "Sports Buzz is a combination of physical mini-games and sports knowledge quizzes. Test your athletic abilities and sports trivia in this exciting event!",
      rules: [
        "Teams will participate in both physical challenges and sports quizzes.",
        "Each team must have 2-3 members who will participate in different activities.",
        "Physical challenges include mini versions of popular sports.",
        "Quiz sections cover international sports, championships, and famous athletes.",
        "Points from both physical challenges and quizzes will be aggregated.",
        "Teams must wear appropriate sportswear for the physical challenges.",
        "Use of external reference material during quizzes is prohibited.",
      ],
      details:
        "The event will be held at the college sports complex. Teams should arrive 30 minutes before the scheduled time for registration and briefing.",
    },
  ],
  online: [
    {
      id: "film-fest",
      name: "Film Fest",
      image: shortFilm,
      description:
        "Unleash your creativity by making a compelling short film in just a few minutes. Show off your storytelling, directing, and editing skills!",
      timing: "Submit by Day 1 - 5:00 PM",
      price: "₹300",
      teamSize: "3-5",
      about:
        "Participants will create a short film based on a given theme within the specified time limit. The best films will be showcased at the closing ceremony.",
      rules: [
        "Each team must consist of 3-5 members.",
        "The theme for the short film will be revealed on the event day.",
        "The maximum duration of the short film should be 5 minutes.",
        "All content (video, audio, images) must be original and free from copyright infringement.",
        "Films must be submitted in MP4 format with a resolution of at least 720p.",
        "Any form of plagiarism or pre-recorded content will lead to disqualification.",
        "Offensive, vulgar, or inappropriate content is strictly prohibited.",
        "Judging will be based on creativity, storytelling, cinematography, and editing skills.",
        "Late submissions will not be considered.",
      ],
      details:
        "Participants must submit their films online before the deadline. The best films will be screened during the closing ceremony, and winners will receive prizes.",
    },
    {
      id: "e-sports",
      name: "E-Sports",
      image: eSports,
      description:
        "Compete in an adrenaline-pumping online gaming tournament featuring some of the most popular multiplayer games!",
      timing: "Day 2 - Online",
      price: "₹200",
      teamSize: "2",
      about:
        "This high-intensity gaming competition brings together e-sports enthusiasts to battle it out in their favorite online multiplayer games. The tournament format will vary based on the selected games.",
      rules: [
        "The tournament will feature multiple games (e.g., BGMI, Valorant, CS:GO, FIFA).",
        "Each participant must register for their preferred game before the deadline.",
        "Teams must follow the game-specific rules and fair play policies.",
        "Any form of cheating, hacking, or unfair play will result in an immediate ban.",
        "Participants must have a stable internet connection and be available during match timings.",
        "Judging criteria: Kill count, survival, teamwork, and strategy.",
        "Winners will be determined based on game-specific scoring and tournament brackets.",
      ],
      details:
        "Participants will receive match schedules and lobby details via Discord before the tournament begins. Ensure your game account is ready and updated before the event.",
    },
  ],
  workshop: [
    {
      id: "drone-workshop",
      name: "Drone Workshop",
      image: droneWorkshop,
      description:
        "Learn the fundamentals of drone technology, including assembly, calibration, and flying techniques. A must-attend for drone enthusiasts!",
      timing: "Day 1 - Full Day",
      price: "₹1000",
      teamSize: "1",
      about:
        "A hands-on workshop covering drone aerodynamics, control systems, and live flying sessions. Participants will gain practical experience in drone assembly and operation.",
      rules: [
        "This is an individual participation workshop (no teams allowed).",
        "Participants will learn about drone components, assembly, and programming.",
        "All required materials and drones will be provided at the workshop.",
        "Participants must handle drones with care and responsibility.",
        "No unauthorized modifications to the drones are allowed during the session.",
        "A live flight demonstration will be conducted under expert supervision.",
        "Each participant must complete a mini project using the concepts learned in the workshop.",
        "Certificates of completion will be awarded to all attendees.",
      ],
      details:
        "The workshop consists of theory sessions, hands-on drone building, and live flight demonstrations. By the end, participants will have a basic understanding of UAV technology and flight mechanics.",
    },
  ],
};

const CATEGORY_TITLES: CategoryTitles = {
  technical: "ΤΕΧΝΙΚΆ (TECHNICAL)",
  nonTechnical: "ΜΗ ΤΕΧΝΙΚΆ (NON-TECHNICAL)",
  workshop: "ΕΡΓΑΣΤΉΡΙΑ (WORKSHOPS)",
  online: "ΔΙΑΔΙΚΤΥΑΚΆ (ONLINE)",
};

const Events = () => {
  // Define type for active category
  const [activeCategory, setActiveCategory] = useState<keyof EventsData>("technical");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [isCarouselFocused, setIsCarouselFocused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Detect if on mobile device and set visible items based on screen width
  useEffect(() => {
    const updateViewport = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (window.innerWidth <= 480) {
        setVisibleItems(1);
      } else if (window.innerWidth <= 768) {
        setVisibleItems(2);
      } else if (window.innerWidth <= 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(5);
      }
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // Function to handle card click and navigate to detail page
  const handleCardClick = (eventId: string) => {
    navigate(`/event/${eventId}`);
  };

  // Initialize active index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  // Function to scroll to next card
  const scrollNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const currentEvents = EVENTS[activeCategory];
    setActiveIndex((prevIndex) =>
      prevIndex === currentEvents.length - 1 ? 0 : prevIndex + 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Increased animation duration for smoother transitions
  };

  // Function to scroll to previous card
  const scrollPrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const currentEvents = EVENTS[activeCategory];
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? currentEvents.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Increased animation duration for smoother transitions
  };

  // Handle keyboard navigation for PC only
  useEffect(() => {
    // Only add keyboard listeners if not on mobile
    if (isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only process key events when carousel is focused or no other element is focused
      if (!isCarouselFocused && document.activeElement !== document.body) return;

      if (e.key === "ArrowLeft") {
        scrollPrev();
        e.preventDefault(); // Prevent page scrolling
      } else if (e.key === "ArrowRight") {
        scrollNext();
        e.preventDefault(); // Prevent page scrolling
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobile, isCarouselFocused, isAnimating, activeCategory]);

  // Handle touch events for swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        scrollNext();
      } else {
        scrollPrev();
      }
    }
  };

  // Render category tabs
  const renderCategoryTabs = () => {
    return (
      <div className="category-tabs">
        {Object.keys(EVENTS).map((category) => (
          <button
            key={category}
            className={`category-tab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category as keyof EventsData)}
          >
            {CATEGORY_TITLES[category]}
          </button>
        ))}
      </div>
    );
  };

  // Calculate which cards should be visible and their positions
  const renderCarousel = () => {
    const currentEvents = EVENTS[activeCategory];
    const halfVisible = Math.floor(visibleItems / 2);

    return (
      <div className="carousel-container">
        <button
          className="carousel-btn carousel-btn-prev greek-btn"
          onClick={scrollPrev}
          aria-label="Previous"
        >
          &alpha;
        </button>

        <div
          className="carousel-wrapper"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onFocus={() => setIsCarouselFocused(true)}
          onBlur={() => setIsCarouselFocused(false)}
          tabIndex={0} // Make the carousel focusable for keyboard events
          aria-label="Event carousel, use arrow keys to navigate"
        >
          <div className="carousel">
            {currentEvents.map((event, index) => {
              // Calculate relative position from active index
              let position = index - activeIndex;

              // Handle wrap-around positioning
              if (position < -halfVisible) {
                position += currentEvents.length;
              } else if (position > currentEvents.length - 1 - halfVisible) {
                position -= currentEvents.length;
              }

              // Only render cards that should be visible
              const isVisible = Math.abs(position) <= halfVisible + 1; // Added +1 to handle transitions
              if (!isVisible) return null;

              const isCentered = position === 0;

              // Calculate transform values based on position
              // Adjusted xOffset for larger cards and better spacing
              const xOffset = position * (isMobile ? 200 : 250);
              // Enhanced scale for more dramatic effect
              const scale = isCentered ? 1 : Math.max(0.8 - Math.abs(position) * 0.1, 0.6);
              // Enhanced opacity for more dramatic effect
              const opacity = isCentered ? 1 : Math.max(0.9 - Math.abs(position) * 0.2, 0.5);
              const zIndex = 20 - Math.abs(position) * 2;
              // Add slight rotation for a more dynamic feel
              const rotate = position * (isMobile ? -2 : -1);

              return (
                <motion.div
                  key={event.id}
                  className={`carousel-card ${isCentered ? "active" : ""}`}
                  style={{ backgroundImage: `url(${event.image})` }}
                  initial={{ x: xOffset, scale, opacity, zIndex, rotate }}
                  animate={{
                    x: xOffset,
                    scale: isCentered ? 1.2 : scale,
                    opacity: isCentered ? 1 : opacity,
                    zIndex,
                    rotate,
                    // Add a floating effect to the active card
                    y: isCentered ? [0, -5, 0] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    y: {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }
                  }}
                  whileHover={{
                    scale: isCentered ? 1.25 : scale * 1.08,
                    boxShadow: isCentered 
                      ? "0px 15px 35px rgba(0, 0, 0, 0.6), 0px 0px 15px rgba(255, 255, 255, 0.3)"
                      : "0px 10px 25px rgba(0, 0, 0, 0.5)",
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => handleCardClick(event.id)}
                >
                  {/* Card content with details shown ONLY on hover */}
                  <div className="card-title">
                    <h3>{event.name}</h3>
                  </div>
                  
                  {/* Hover detail overlay - only appears on hover */}
                  <motion.div 
                    className="card-hover-details"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="hover-details-content">
                      <p>{event.description}</p>
                      <div className="card-timing">{event.timing}</div>
                      <div className="team-size">Team: {event.teamSize}</div>
                      <div className="view-details-btn">Click for Details</div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <button
          className="carousel-btn carousel-btn-next greek-btn"
          onClick={scrollNext}
          aria-label="Next"
        >
          &omega;
        </button>
      </div>
    );
  };
  
  // Render the event detail indicator dots
  const renderIndicators = () => {
    const currentEvents = EVENTS[activeCategory];
    
    return (
      <div className="carousel-indicators">
        {currentEvents.map((_: EventItem, index: number) => (
          <div
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
          />
        ))}
      </div>
    );
  };
  
  // Main render function with category title and active event info
  return (
    <div className="events-container">
      <h1 className="events-title text-4xl md:text-5xl font-cinzel font-bold mb-4 text-gold glowing-title">ΕΚΔΗΛΏΣΕΙΣ (EVENTS)</h1>
      
      {/* Render category selection tabs */}
      {renderCategoryTabs()}
      
      {/* Render the interactive carousel */}
      {renderCarousel()}
      
      {/* Render the indicator dots for direct navigation */}
      {renderIndicators()}
    </div>
  );
};

export default Events;