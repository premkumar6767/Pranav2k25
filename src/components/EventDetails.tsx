import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Phone } from "lucide-react";

import shortFilm from "../images/short-film.jpeg";
import eSports from "../images/e-sports.jpg";
import cricbuzz from "../images/sport.jpg";
import droneWorkshop from "../images/drone-workshop.webp";
import paperPresentation from "../images/Paper-presentaion.jpeg";
import wiredWonders from "../images/Wired-Wonders.jpeg";
import roleAndDice from "../images/Halt-the-dice.jpeg";
import designedToDev from "../images/Design2dev.jpeg";
import reverseCoding from "../images/Decodex.jpeg";
import ojingeoGame from "../images/Ojngeo.jpeg";
import animeQuiz from "../images/Senpai-fans.jpeg";
import auralBliss from "../images/Aural-Bliss.jpeg";
import treasureHunt from "../images/Treasure-hunt.jpeg";
import hackathon from "../images/Hackathon.jpeg";
import zeuseSpark from "../images/Zeusspark.jpeg";

const events = {
  technical: [
    {
      title: "Paper Presentation",
      image: paperPresentation,
      description:
        "Showcase your research ideas and innovative findings to a distinguished panel of academicians and industry professionals.",
      teamSize: "1-2",
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
      coordinators: [
        {
          name: "Sai Mathesh",
          phone: "63815 82241",
          
        },
        // {
        //   name: " Abinaya N",
        //   phone: "8765432109",
         
        // }
      ]
    },
    {
      title: "Hackathon",
      image: hackathon,
      description:
        "Showcase your research ideas and innovative findings to a distinguished panel of academicians and industry professionals.",
      teamSize: "1-2",
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
      coordinators: [
        {
          name: "Aditya Kumar",
          phone: "9988776655",
        },
        {
          name: "Sneha Patel",
          phone: "8899776655",
        }
      ]
    },
    {
      title: "Wired Wonders",
      image: wiredWonders,
      description:
        "Test your knowledge of circuit design and troubleshooting in this electrifying competition!",
      teamSize: "1-2",
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
      coordinators: [
        {
          name: " Manoj",
          phone: "7305921931",
          
        },
        {
          name: "Sabareesan",
          phone: "8877665544",
          
        }
      ]
    },

    {
      title: "DecodeX",
      image: reverseCoding,
      description:
        "Deconstruct and debug pre-written code to reveal its intended functionality.",
      teamSize: "1-2",
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
      coordinators: [
        {
          name: "Barath A",
          phone: "9043057100",
          
        },
        {
          name: "Jesilia",
          phone: "8765123450",
        }
      ]
    },
    {
      title: "Halt the Dice",
      image: roleAndDice,
      description:
        "A unique event where rolling the dice leads to unpredictable tech-based quizzes and problem-solving challenges.",
      teamSize: "2",
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
      coordinators: [
        {
          name: "Karthik Raman",
          phone: "9988776600",
        },
        {
          name: "Neha Gupta",
          phone: "8877665500",
        }
      ]
    },

    {
      title: "Design to Dev",
      image: designedToDev,
      description:
        "A UI/UX design and development challenge where participants create a website prototype and then convert it into a functional site.",
      teamSize: "3-4",
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
      coordinators: [
        {
          name: " Prem Kumar M",
          phone: "7448631031",
         
        },
      ]
    },
  ],
  nonTechnical: [
    {
      title: "Ojingeo Game",
      image: ojingeoGame,
      description:
        "Inspired by the viral Korean survival game, this event will push your strategic thinking and endurance to the limit.",
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
      coordinators: [
        {
          name: " Balasundharam",
          phone: "70101 60569",
         
        },
        {
          name: "Suyash Ashwin",
          phone: "8776655440",
         
        }
      ]
    },
    {
      title: "Zeus' Spark",
      image: zeuseSpark,
      description: "An exciting event to ignite creativity, teamwork, and fun through engaging activities.",
      teamSize: "2-3",
      about: "Have fun while testing your knowledge of popular culture and movies in this entertaining event.",
      rules: [
        "Each round has a time limit of 10 minutes",
        "No use of mobile phones or internet",
        "For acting round, no speaking or lip movements allowed",
        "Points from all rounds will be accumulated for final scoring"
      ],
      details: "Round 1: Emoji Quiz - guess movie titles from emoji combinations. Round 2: Movie Plots Challenge. Round 3: Silent Acting - guess famous movie scenes.",
      coordinators: [
        {
          name: " Jayshaal",
          phone: "84284 24948",
         
        }
      ]
      
    },
    
    {
      title: "Senpai Fans",
      image: animeQuiz,
      description:
        "Test your anime and manga knowledge in this ultimate quiz showdown!",
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
      coordinators: [
        {
          name: "Kishore M",
          phone: "63811 79497",
          
        },
        {
          name: "Sai Mathesh",
          phone: "63815 82411",
         
        }
      ]
    },
    {
      title: "Aural Bliss",
      image: auralBliss,
      description:
        "A music lover's paradise! 'Aural Bliss' is an exhilarating competition that tests your auditory perception and musical knowledge.",
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
      coordinators: [
        {
          name: " Manikandan",
          phone: "6361854170",
         
        },
        {
          name: " Rackesh K",
          phone: "8877665533",
         
        }
      ]
    },
    {
      title: "Unscramble & Hunt",
      image: treasureHunt,
      description:
        "Solve cryptic clues and uncover hidden treasures across the campus. An adventurous race against time and opponents!",
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
      coordinators: [
        {
          name: "Madhan Raj M",
          phone: "91760 70805",
          
        },
        {
          name: " Monish",
          phone: "8877665544",
        }
      ]
    },
    {
      title: "Cricbuzz",
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
      coordinators: [
        {
          name: "Hariharan ",
          phone: "63794 25941",
         
        },
        {
          name: "Mahider ",
          phone: "8765432188",
          
        }
      ]
    },
  ],
  online: [
    {
      title: "Short Film",
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
      coordinators: [
        {
          name: "Dhruv Patel",
          phone: "9876543299",
        },
        {
          name: "Nisha Rajput",
          phone: "8765432199",
        }
      ]
    },

    {
      title: "E-Sports",
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
      coordinators: [
        {
          name: "Vishal Nair",
          phone: "9988776611",
        },
        {
          name: "Shreya Kapoor",
          phone: "8877665511",
        }
      ]
    },
  ],
  workshop: [
    {
      title: "Drone Workshop",
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
      coordinators: [
        {
          name: "Amit Khanna",
          phone: "9988776633",
        },
        {
          name: "Ritu Sharma",
          phone: "8877665533",
        }
      ]
    },
  ],
};

const EventDetail = () => {
  const { eventTitle } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about"); // Default tab

  // Scroll to top when the event page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const event = Object.values(events)
    .flat()
    .find((e) => e.title.replace(/\s+/g, "-").toLowerCase() === eventTitle);

  if (!event) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        Event not found
      </div>
    );
  }

  const shareEvent = () => {
    const message = `We PRANAV2K25 team from MSEC presenting an event. Check out this event: ${event.title}! ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center px-6 py-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(/images/greek-temple-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Greek Column Decorations */}
      <div className="absolute top-0 left-0 h-full w-16 opacity-50 hidden lg:block">
        <div className="h-full w-full bg-contain bg-repeat-y" style={{ backgroundImage: "url(/images/greek-column-left.png)" }}></div>
      </div>
      <div className="absolute top-0 right-0 h-full w-16 opacity-50 hidden lg:block">
        <div className="h-full w-full bg-contain bg-repeat-y" style={{ backgroundImage: "url(/images/greek-column-right.png)" }}></div>
      </div>

      {/* Olympian Scroll Container */}
      <div className="bg-amber-50/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-3xl w-full backdrop-blur-md text-white border-2 border-amber-200/30"
        style={{
          backgroundImage: `url(/images/greek-papyrus-texture.jpg)`,
          backgroundBlendMode: "overlay",
        }}>
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center text-amber-200 hover:text-amber-100 mb-6 group font-serif"
          onClick={() => navigate("/events")}
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Return to Agora
        </motion.button>

        {/* Greek Laurel Wreath and Event Title */}
        <div className="relative flex flex-col items-center mb-6">
          <div className="absolute -top-16 w-44 h-44 opacity-70">
            <div className="w-full h-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/laurel-wreath.png)" }}></div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-300 mt-8 mb-4 text-center font-serif tracking-wider"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            {event.title}
          </motion.h1>
        </div>

        <p className="text-amber-100 text-lg text-center mb-6 font-serif italic">
          {event.description}
        </p>

        {/* Greek-styled Buttons */}
        <div className="flex flex-col sm:flex-row justify-center mt-6 gap-4">
          <button
            onClick={() => navigate("/register")}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold transition transform hover:scale-105 border-b-4 border-amber-800 w-full sm:w-auto"
          >
            Join the Contest
          </button>
          <button
            onClick={shareEvent}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition transform hover:scale-105 border-b-4 border-blue-800 w-full sm:w-auto"
          >
            <Share2 className="w-5 h-5" /> Spread the Word
          </button>
        </div>

        {/* Ancient Tablet Navigation */}
        <div className="mt-10 bg-stone-900/50 p-4 rounded-lg backdrop-blur-lg shadow-lg border border-amber-200/30">
          <div className="flex flex-col md:flex-row justify-around text-amber-300 font-bold text-lg cursor-pointer font-serif">
            <span
              className={`p-2 transition-all duration-300 ${
                activeTab === "about" ? "text-white border-b-2 border-amber-300" : "hover:text-amber-100"
              }`}
              onClick={() => setActiveTab("about")}
            >
              Prophecy
            </span>
            <span
              className={`p-2 transition-all duration-300 ${
                activeTab === "rules" ? "text-white border-b-2 border-amber-300" : "hover:text-amber-100"
              }`}
              onClick={() => setActiveTab("rules")}
            >
              Decrees
            </span>
            <span
              className={`p-2 transition-all duration-300 ${
                activeTab === "details" ? "text-white border-b-2 border-amber-300" : "hover:text-amber-100"
              }`}
              onClick={() => setActiveTab("details")}
            >
              Omens
            </span>
            <span
              className={`p-2 transition-all duration-300 ${
                activeTab === "coordinators" ? "text-white border-b-2 border-amber-300" : "hover:text-amber-100"
              }`}
              onClick={() => setActiveTab("coordinators")}
            >
              Oracles
            </span>
          </div>

          {/* Ancient Scroll Content */}
          <div className="mt-4 text-amber-100 bg-stone-800/30 p-4 rounded border border-amber-100/20">
            {activeTab === "about" && (
              <div className="font-serif">
                <p className="first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:text-amber-300">
                  {event.about}
                </p>
                <div className="mt-4 p-3 bg-amber-900/30 rounded-lg border border-amber-100/20">
                  <p className="font-medium text-amber-200">Team Size: <span className="text-white">{event.teamSize}</span></p>
                </div>
              </div>
            )}

            {activeTab === "rules" && (
              <div className="space-y-3 font-serif">
                <h3 className="text-xl text-amber-300 mb-4">Divine Laws</h3>
                <ul className="list-disc list-inside space-y-2">
                  {event.rules.map((rule, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: rule.replace(/\*(.*?)\*/g, '<span class="text-amber-300 font-semibold">$1</span>') }}></li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "details" && (
              <div className="font-serif">
                <h3 className="text-xl text-amber-300 mb-4">Sacred Details</h3>
                <p dangerouslySetInnerHTML={{ __html: event.details.replace(/\*(.*?)\*/g, '<span class="text-amber-300 font-semibold">$1</span>') }}></p>
              </div>
            )}

            {activeTab === "coordinators" && (
              <div className="font-serif">
                <h3 className="text-xl text-amber-300 mb-4">Event Oracles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.coordinators?.map((coordinator, index) => (
                    <div key={index} className="bg-stone-800/50 p-4 rounded-lg border border-amber-100/20">
                      <h4 className="text-lg font-semibold text-amber-200">{coordinator.name}</h4>
                      <div className="mt-2 flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-amber-300" />
                        <span>{coordinator.phone}</span>
                      </div>
                    
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;