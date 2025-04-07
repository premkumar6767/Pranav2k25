import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import greek from "../../public/Greek-Owl-background.jpeg";
import paperPresentation from "../images/paperpres.jpg";
import wiredWonders from "../images/wirewond.jpg";
import roleAndDice from "../images/rolldice.jpg";
import designedToDev from "../images/d2dev.jpg";
import reverseCoding from "../images/decodex.jpg";
import ojingeoGame from "../images/ojingeo.jpg";
import animeQuiz from "../images/Senpai-fans.jpeg";
import auralBliss from "../images/Aural-Bliss.jpeg";
import treasureHunt from "../images/treashunt.jpg";
import hackathon from "../images/Hackathon.jpeg";
import robotCraze from "../images/robotcraze.jpg";
import cricbuzz from "../images/sport.jpg";
import zeuseSpark from "../images/Zeusspark.jpeg";
// import EventTree from "./EventDetails";

interface Event {
  id: string;
  title: string;
  description: string;
  date?: string;
  imageUrl?: string;
  category: "technical" | "nonTechnical" | "online" | "workshop";
}

interface EventTreeProps {
  events: Event[];
  backgroundImageUrl: string;
}

const EventTree: React.FC<EventTreeProps> = ({
  events,
  backgroundImageUrl,
}) => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [screenSize, setScreenSize] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth > 1024) {
        setScreenSize("desktop");
      } else if (window.innerWidth > 768) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const arrangeEventsByCategory = () => {
    const technical = events.filter((event) => event.category === "technical");
    const nonTechnical = events.filter(
      (event) => event.category === "nonTechnical"
    );
    const workshop = events.filter((event) => event.category === "workshop");
    const online = events.filter((event) => event.category === "online");

    const arrangedEvents: Event[] = [];
    arrangedEvents[0] = technical[1] || events[0]; //tech
    arrangedEvents[1] = technical[3] || technical[0]; //tech
    arrangedEvents[2] = nonTechnical[0] || events[0]; //non-tech
    arrangedEvents[3] = technical[2] || technical[0]; //tech
    arrangedEvents[4] = nonTechnical[1] || nonTechnical[0];
    arrangedEvents[5] = technical[0]; //tech
    arrangedEvents[6] = technical[4] || technical[0];
    arrangedEvents[7] = nonTechnical[2] || nonTechnical[0]; //non-tech
    arrangedEvents[8] = workshop[0] || events[0];
    arrangedEvents[9] = nonTechnical[3] || nonTechnical[0]; //non-tech
    arrangedEvents[10] = events[6]; //tech
    arrangedEvents[11] = events[11];
    arrangedEvents[12] = events[events.length - 1];

    return arrangedEvents;
  };

  const arrangedEvents = arrangeEventsByCategory();

  const positions = {
    desktop: [
      { top: "19vh", left: "50vw" },
      { top: "32vh", left: "29vw" },
      { top: "32vh", left: "71vw" },
      { top: "43vh", left: "37vw" },
      { top: "43vh", left: "62.5vw" },
      { top: "50vh", left: "19vw" },
      { top: "50vh", left: "50vw" },
      { top: "50vh", left: "81vw" },
      { top: "57vh", left: "37vw" },
      { top: "57vh", left: "62.5vw" },
      { top: "68vh", left: "29vw" },
      { top: "68vh", left: "71vw" },
      { top: "81vh", left: "50vw" },
    ],
    tablet: [
      { top: "19vh", left: "50vw" },
      { top: "32vh", left: "29vw" },
      { top: "32vh", left: "71vw" },
      { top: "43vh", left: "37vw" },
      { top: "43vh", left: "62.5vw" },
      { top: "50vh", left: "19vw" },
      { top: "50vh", left: "50vw" },
      { top: "50vh", left: "81vw" },
      { top: "57vh", left: "37vw" },
      { top: "57vh", left: "62.5vw" },
      { top: "68vh", left: "29vw" },
      { top: "68vh", left: "71vw" },
      { top: "81vh", left: "50vw" },
    ],
    mobile: [
      { top: "23vh", left: "50vw" },
      { top: "25vh", left: "20vw" },
      { top: "25vh", left: "79vw" },
      { top: "42vh", left: "21vw" },
      { top: "42vh", left: "80vw" },
      { top: "60vh", left: "15vw" },
      { top: "41vh", left: "50vw" },
      { top: "60vh", left: "86vw" },
      { top: "72vh", left: "50vw" },
      { top: "57vh", left: "50vw" },
      { top: "76vh", left: "24vw" },
      { top: "76vh", left: "76vw" },
      { top: "88vh", left: "50vw" },
    ],
  };

  const getCategoryColor = (category: string) => {
    if (category === "technical") {
      return {
        background:
          "radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(255, 215, 0, 0.1) 70%)", // Gold
        boxShadow:
          "0 0 15px 4px rgba(255, 215, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.5)",
        border: "2px solid rgba(255, 215, 0, 0.6)",
        titleBackground: "rgba(255, 215, 0, 0.7)",
        titleBorder: "1px solid rgba(255, 235, 59, 0.8)",
        glowColor: "rgba(255, 215, 0, 0.4)",
        pingBorder: "2px solid rgba(255, 215, 0, 0.6)",
      };
    } else if (category === "nonTechnical") {
      return {
        background:
          "radial-gradient(circle, rgba(0, 0, 139, 0.3) 0%, rgba(0, 0, 139, 0.1) 70%)", // Deep Blue
        boxShadow:
          "0 0 15px 4px rgba(0, 0, 139, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.5)",
        border: "2px solid rgba(0, 0, 139, 0.6)",
        titleBackground: "rgba(0, 0, 139, 0.7)",
        titleBorder: "1px solid rgba(0, 0, 139, 0.8)",
        glowColor: "rgba(0, 0, 139, 0.4)",
        pingBorder: "2px solid rgba(0, 0, 139, 0.6)",
      };
    } else {
      // For any other category (e.g., online or workshop)
      return {
        background:
          "radial-gradient(circle, rgba(139, 69, 19, 0.3) 0%, rgba(139, 69, 19, 0.1) 70%)", // Brown
        boxShadow:
          "0 0 15px 4px rgba(139, 69, 19, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.5)",
        border: "2px solid rgba(139, 69, 19, 0.6)",
        titleBackground: "rgba(139, 69, 19, 0.7)",
        titleBorder: "1px solid rgba(139, 69, 19, 0.8)",
        glowColor: "rgba(139, 69, 19, 0.4)",
        pingBorder: "2px solid rgba(139, 69, 19, 0.6)",
      };
    }
  };

  const getNodeStyle = (index: number, category: string) => {
    const baseStyle = {
      position: "absolute" as "absolute",
      top: positions[screenSize][index].top,
      left: positions[screenSize][index].left,
      width: "70px",
      height: "70px",
      transform: "translate(-50%, -50%)",
      cursor: "pointer",
      zIndex: 10,
    };

    const categoryStyle = getCategoryColor(category); // Get category styles

    return {
      ...baseStyle,
      background: categoryStyle.background,
      boxShadow: categoryStyle.boxShadow,
      border: categoryStyle.border,
      borderRadius: "50%",
    };
  };

  // New function to get title styles
  const getTitleStyle = (category: string) => {
    const categoryStyle = getCategoryColor(category);
    return {
      background: categoryStyle.titleBackground,
      border: categoryStyle.titleBorder,
    };
  };
  const handleEventClick = (event: Event) => {
    const formattedTitle = event.title.replace(/\s+/g, "-").toLowerCase();
    navigate(`/event/${formattedTitle}`);
  };

  const viewEventPreview = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-10" />
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-yellow-100 bg-opacity-30"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 5px 1px rgba(255, 255, 255, 0.2)",
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
      <svg className="absolute inset-0 w-full h-full z-5 pointer-events-none opacity-40">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {screenSize === "mobile" ? (
          <>
            <path
              d={`M ${window.innerWidth * 0.5} ${window.innerHeight * 0.2} L ${
                window.innerWidth * 0.5
              } ${window.innerHeight * 0.5}`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
            />
            <path
              d={`M ${window.innerWidth * 0.5} ${window.innerHeight * 0.2} L ${
                window.innerWidth * 0.2
              } ${window.innerHeight * 0.25}`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
            />
            <path
              d={`M ${window.innerWidth * 0.5} ${window.innerHeight * 0.2} L ${
                window.innerWidth * 0.79
              } ${window.innerHeight * 0.25}`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
            />
          </>
        ) : (
          <>
            <path
              d={`M ${window.innerWidth * 0.5} ${window.innerHeight * 0.19} L ${
                window.innerWidth * 0.5
              } ${window.innerHeight * 0.5}`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
            />
            <path
              d={`M ${window.innerWidth * 0.5} ${window.innerHeight * 0.19} L ${
                window.innerWidth * 0.29
              } ${window.innerHeight * 0.32}`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
            />
            <path
              d={`M ${window.innerWidth * 0.5} ${window.innerHeight * 0.19} L ${
                window.innerWidth * 0.71
              } ${window.innerHeight * 0.32}`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
            />
          </>
        )}
      </svg>

      {arrangedEvents.map((event, index) => {
        if (!event) return null;

        const nodeStyle = getNodeStyle(index, event.category); // Get node styles
        const titleStyle = getTitleStyle(event.category); // Get title styles
        const position = positions[screenSize][index];

        return (
          <div key={`node-${index}`} className="group">
            <div
              style={nodeStyle}
              onClick={() => viewEventPreview(event)}
              className="transition-all duration-500 hover:scale-110"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {event.imageUrl ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-yellow-100">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 bg-opacity-50 flex items-center justify-center border border-yellow-100">
                    <div className="text-xl font-bold text-white drop-shadow-sm">
                      ⚡
                    </div>
                  </div>
                )}
              </div>

              <div
                className="absolute inset-0 rounded-full opacity-40 animate-ping"
                style={{
                  animationDuration: "3s",
                  border: nodeStyle.border, // Use the border from nodeStyle
                }}
              ></div>
            </div>

            <div
              className="absolute z-20 text-center transform -translate-x-1/2"
              style={{
                top: `calc(${position.top} + 40px)`,
                left: position.left,
                background: titleStyle.background, // Use the title background from titleStyle
                border: titleStyle.border, // Use the title border from titleStyle
                borderRadius: "4px",
                padding: "2px 8px",
                maxWidth: "150px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              <span className="text-white text-xs font-bold whitespace-nowrap">
                {event.title}
              </span>
            </div>
          </div>
        );
      })}

{selectedEvent && (
  <div className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-yellow-400 text-white max-w-md w-full relative overflow-hidden">
      <div
        className="absolute inset-0 border-8 border-transparent box-border"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255, 215, 0, 0.1) 0, rgba(255, 215, 0, 0.1) 10px, transparent 10px, transparent 20px)",
          pointerEvents: "none",
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.6) 0%, rgba(255, 215, 0, 0) 70%)",
          backgroundSize: "100% 100%",
        }}
      ></div>

      <div className="flex justify-between items-center mb-4 relative z-10">
        <h2 className="text-xl font-bold text-yellow-300">
          {selectedEvent.title}
        </h2>
        <button
          onClick={() => setSelectedEvent(null)}
          className="text-gray-400 hover:text-white text-xl"
        >
          ×
        </button>
      </div>

      {selectedEvent.imageUrl && (
        <div className="mb-4 flex justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-300">
            <img
              src={selectedEvent.imageUrl}
              alt={selectedEvent.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <p className="text-gray-100 relative z-10 overflow-y-auto max-h-40">
        {selectedEvent.description}
      </p>

      <div className="mt-6 flex justify-between items-center relative z-10">
        <button
          className="px-4 py-2 bg-gradient-to-r from-yellow-700 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-white rounded"
          onClick={() => setSelectedEvent(null)}
        >
          Close
        </button>

        <button
          className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded flex items-center"
          onClick={() => handleEventClick(selectedEvent)}
        >
          <span>View Full Oracle's Wisdom</span>
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  </div>
)}

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(0px) translateX(20px); }
          75% { transform: translateY(10px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
    </div>
  );
};

const EventsPage: React.FC = () => {
  const events: Event[] = [
    {
      id: "1",
      title: "Paper Presentation",
      description:
        "Present your research and innovative ideas in a structured format. Improve your presentation skills and showcase your technical knowledge. Submit an abstract (200-500 words) highlighting your key findings and methodology. Q&A session follows to evaluate your understanding and depth of research.",

      imageUrl: paperPresentation,
      category: "technical",
    },
    {
      id: "2",
      title: "Hackathon",
      description:
        "A two-round innovation challenge. Round 1: Teams analyze problem statements, develop solutions, and present their ideas. Round 2: Shortlisted teams build prototypes or simulations of their proposed solutions within a specified time frame, demonstrating core functionalities and technical implementation.",

      imageUrl: hackathon,
      category: "technical",
    },
    {
      id: "3",
      title: "Wired Wonders",
      description:
        "An electrifying multi-round competition for electronics enthusiasts. Round 1: Decode resistor color bands and fix circuit malfunctions. Round 2: Blindfolded circuit building with partner guidance. Round 3: Strategic bidding for components to design innovative systems within budget constraints.",

      imageUrl: wiredWonders,
      category: "technical",
    },
    {
      id: "4",
      title: "Halt the Dice",
      description:
        "Test your critical thinking and problem-solving through tech-based challenges. Roll the dice to face unpredictable quizzes or tasks. Progress through knockout, challenge, and final showdown rounds with increasing difficulty. Two-member teams collaborate to overcome a variety of technical challenges.",
 
      imageUrl: roleAndDice,
      category: "technical",
    },
    {
      id: "5",
      title: "robotcraze",
      description:
        "An action-packed game where players control robots in various challenges. Customize your robots with different weapons, armor, and abilities before each round. Engage in combat using tactics like dodging, attacking, and defending to outsmart opponents. Complete missions or defeat other robots to win.",
 
      imageUrl: robotCraze,
      category: "workshop",
    },
    {
      id: "6",
      title: "Design to Dev",
      description:
        "A professional workshop bridging UI/UX design and development. Round 1: Design a single-page website using Canva or Figma within 50 minutes. Round 2: Convert your design into a functional website using HTML, CSS, and JavaScript within 1-1.5 hours, demonstrating the design-to-code workflow.",

      imageUrl: designedToDev,
      category: "technical",
    },
    {
      id: "7",
      title: "DecodeX",
      description:
        "Challenge your coding skills through reverse engineering tasks. Round 1: Deduce the logic behind simple input-output pairs. Round 2: Analyze complex patterns and reconstruct algorithms. Round 3: Optimize and write executable code to generate exact outputs. Solutions must be efficient and accurate.",

      imageUrl: reverseCoding,
      category: "technical",
    },
    {
      id: "8",
      title: "Ojingeo Game",
      description:
        "Test your critical thinking and competitive skills through a variety of Korean-inspired games. Face unpredictable challenges requiring quick thinking and effective collaboration. Games include Ddakji (paper tile flipping), balloon shooting, marble picking with chopsticks, code games, and Skribbl drawing competitions.",

      imageUrl: ojingeoGame,
      category: "nonTechnical",
    },
    {
      id: "9",
      title: "Aural Bliss",
      description:
        "A thrilling musical event testing your knowledge and speed. Round 1: Guess songs from their instrumental BGM within seconds. Round 2: Connect images to identify songs. Round 3: Recognize celebrities from childhood photos. Round 4: Unscramble jumbled song lyrics. Teams with fastest correct answers advance.",
      imageUrl: auralBliss,
      category: "nonTechnical",
    },
    {
      id: "10",
      title: "Senpai Fans",
      description:
        "A fun event for anime enthusiasts to explore art, culture, and fiction. Round 1: Otaku Blitz rapid-fire quiz on anime knowledge. Round 2: Anime Battle Royale debates on topics like 'Who is the greatest anime protagonist?'. Round 3: Ultimate Weeb Challenge with screenshots, audio clips, and character identification.",
      imageUrl: animeQuiz,
      category: "nonTechnical",
    },
    {
      id: "11",
      title: "Unscramble & Hunt",
      description:
        "The ultimate test of speed, logic, and teamwork. Round 1: Race against time to unscramble as many words as possible within 2 minutes. Round 2: Search for hidden puzzle pieces across the venue and assemble them correctly before time runs out. The fastest team to complete both challenges wins.",
      imageUrl: treasureHunt,
      category: "nonTechnical",
    },
    {
      id: "12",
      title: "Cricbuzz",
      description:
        "Test your cricket knowledge and strategic thinking. Round 1: Analyze cricket moments and answer questions about tournaments, IPL history, and cricket records. Round 2: Form strategic teams based on specific cricket scenarios. Teams of 3-4 members compete to demonstrate their cricket expertise.",
      imageUrl: cricbuzz,
      category: "nonTechnical",
    },
    {
      id: "13",
      title: "Zeus' Spark",
      description:
        "An exciting event to ignite creativity, teamwork, and fun through engaging activities. Round 1: Emoji Quiz - guess movie titles from emoji combinations. Round 2: Movie Plots Challenge - identify movies from their plot descriptions. Round 3: Silent Acting - guess famous movie scenes acted out without dialogue.",
      imageUrl: zeuseSpark,
      category: "nonTechnical",
    },
  ];

  return (
    <div className="w-full h-screen">
      <EventTree events={events} backgroundImageUrl={greek} />
    </div>
  );
};

export default EventsPage;