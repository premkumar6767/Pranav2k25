import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Phone } from "lucide-react";
import shortFilm from "../images/short-film.jpeg";
import eSports from "../images/e-sports.jpg";
import decode from "../images/decoodexx.jpeg";
import cricbuzz from "../images/sport.jpg";
import droneWorkshop from "../images/drone-workshop.webp";
import paperPresentation from "../images/Paper-presentaion.jpeg";
import wiredWonders from "../images/Wired-Wonders.jpeg";
import roleAndDice from "../images/Halt-the-dice.jpeg";
import designedToDev from "../images/Design2dev.jpeg";
import ojingeoGame from "../images/Ojngeo.jpeg";
import animeQuiz from "../images/Senpai-fans.jpeg";
import auralBliss from "../images/Aural-Bliss.jpeg";
import treasureHunt from "../images/Treasure-hunt.jpeg";
import hackathon from "../images/Hackathon.jpeg";
import robot from "../images/robotcraze.jpg";
import zeusspark from "../images/Zeusspark.jpeg";
const events = {
  technical: [
    {
      title: "Paper Presentation",
      image: paperPresentation,
      description:
        "Showcase your research ideas and innovative findings to a distinguished panel of academicians and industry professionals.",
      teamSize: "1-4",
      timing: "April 16th 10:00Am - 1:00Pm",
      about:
        "This event provides an opportunity for students to present their research papers on emerging technologies, scientific innovations, and engineering advancements. Participants will receive expert feedback and gain recognition for their contributions.",
      rules: [
        "Each participant/team can present only one research paper.",
        "Papers must be original and should not have been published elsewhere.",
        "A soft copy of the paper must be submitted before the event for screening.",
        "Presentation time is 10 minutes, followed by a **5-minute Q&A session.",
        "Use of plagiarized content will lead to immediate disqualification.",
        "Presentations must follow IEEE format and should be in PPT format.",
        "Judging criteria: Originality, Technical Content, Presentation Skills, and Q&A handling.",
        "Decision of the judges will be final and binding.",
      ],
      details:
        "The event will be conducted in Hall A. Participants must bring their presentation on a USB drive and report 30 minutes before their scheduled time.",
      coordinators: [
        {
          name: "KS Kishore",
          phone: "9940096759",
        },
        {
          name: "Sai Prasath",
          phone: "956622942",
        },
      ],
    },
    {
      title: "Hackathon",
      image: hackathon,
      description:
        "This event will unfold across two distinct rounds, designed to foster innovation and technical proficiency among participating teams.",
      teamSize: "1-4",
      timing: "April 16th, 8:30 AM",
      about:
        "Participants will engage in ideation, proposal presentation, and hands-on development. This event promotes creativity, real-time problem-solving, and teamwork across multiple domains such as AI, IoT, Cyber Security, and more.",
      rules: [
        "A team should consist of a maximum of 4 members.",
        "Presentation template must be submitted in the given format (PPT or PDF).",
        "Participants must bring their own laptops, accessories, and hardware components (if required).",
        "Inter-disciplinary participants are welcome.",
        "Teams must complete tasks within the given time limit.",
        "Judge’s decisions are final; any misconduct will lead to disqualification.",
      ],
      details:
        "🔹 ROUND 1: Ideation and Proposal Presentation\n\n" +
        "Participants will conceptualize and present innovative solutions to predefined domains. This round includes:\n" +
        "• Problem Statement Analysis\n" +
        "• Solution Ideation\n" +
        "• Presentation Development\n" +
        "• Evaluation\n\n" +
        "📚 DOMAINS:\n" +
        "• IoT Simulation\n" +
        "• Home Automation Simulation\n" +
        "• Wearable Technology\n" +
        "• E-Waste Management Using IoT\n" +
        "• AI & Machine Learning\n" +
        "• Web3 & Blockchain\n" +
        "• Sustainable Development\n" +
        "• Cyber Security\n" +
        "• Game Development\n" +
        "• Virtual Reality\n\n" +
        "📤 PRESENTATION FORMAT & SUBMISSION:\n" +
        "Submit your presentation (PPT or PDF) to the mentioned email.\n" +
        "Template and submission link will be shared soon.\n\n" +
        "✅ Top 10 teams with the highest scores in Round 1 will proceed to the final round.\n\n" +
        "🔹 ROUND 2: Prototype/Simulation Development\n\n" +
        "Shortlisted teams will receive a problem statement on the spot.\n" +
        "They must develop a prototype or simulation based on it within the allotted time.\n\n" +
        "📍 Venue: LIC LAB\n" +
        "🕒 Participants must report 30 minutes before their scheduled time\n" +
        "with their presentation ready on a USB drive.",
      coordinators: [
        {
          name: "Aadhitya S V",
          phone: "94983 83681",
        },
        {
          name: "Sutharsan V",
          phone: "6369953709",
        },
      ],
    },
    {
      title: "Wired Wonders",
      image: wiredWonders,
      description:
        "Test your knowledge of circuit design and troubleshooting in this electrifying competition!",
      teamSize: "2-4",
      timing: "April 16th 10:00AM to 12:30PM & 2:00PM to 3:00 PM",
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
        "The competition will be held in Electronics Lab B. Participants must report **15 minutes before the event begins.",
      coordinators: [
        {
          name: " Manoj",
          phone: "7305921931",
        },
        {
          name: "Sabareesan",
          phone: "9894789245",
        },
      ],
    },
    {
      title: "DecodeX",
      image: decode,
      objectFit: "contain",
      description:
        "Deconstruct and debug pre-written code to reveal its intended functionality.",
      teamSize: "2-4",
      timing: "April 16th 10:30AM to 12:30PM & 2:30PM to 3:30 PM",
      about:
        "Participants will be given obfuscated or scrambled code snippets and will need to reverse engineer them to understand their logic. The goal is to identify errors, optimize the code, and restore its original functionality.",
      rules: [
        "Programming languages allowed: C, Python.",
        "Marks will be based on correctness, efficiency, and explanation clarity.",
        "Online Compilers can be used   ",
        "Final submissions must be in text or code file format.",
        "Judging will consider code quality, logic, and optimization techniques used.",
      ],
      

      details: "The event will be conducted in IT common lab.\n\n• Round 1: Rapid Fire Tech Quiz –\n  - Buzzer-based quiz on C and Python fundamentals.\n  - 20 questions including theory, output predictions, and syntax.\n  - First correct team gets points.\n  - Top 10 teams advance.\n\n• Round 2: Code Charades –\n  - Coding-themed dumb charades.\n  - One member acts out programming terms, others guess.\n  - Top scoring teams proceed.\n\n• Round 3: Code & Conquer –\n  - Write code to replicate displayed output pattern.\n  - Judged on correctness, efficiency, and execution time.\n\n• Prizes:\n  🥇 Rs. 1500\n  🥈 Rs. 1000\n  🥉 Rs. 500",
      coordinators: [
        {
          name: "Barath A",
          phone: "9043057100",
        },
        {
          name: "Peranandan",
          phone: "7010893206",
        },
      ],
    },
    {
      title: "Byte the Dice",
      image: roleAndDice,
      description:
        "A unique event where rolling the dice leads to unpredictable tech-based quizzes and problem-solving challenges.",
      teamSize: "1-2",
      timing: "April 16th 11:00AM to 12:30PM & 2:30PM to 3:30 PM",
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
          name: "Aditya P",
          phone: "9940398918",
        },
        {
          name: "Rackesh U",
          phone: "8639486845",
        },
      ],
    },
    {
      title: "Design 2 Dev",
      image: designedToDev,
      description:
        "A UI/UX design and development challenge where participants create a website prototype and then convert it into a functional site.",
      teamSize: "3-4",
      timing: "April 16th 10:00AM to 12:30PM ",
      about:
        "This event focuses on transforming creative UI/UX designs into real-world web applications. Participants will showcase both their design thinking and development skills by working through two rounds using tools like Figma/Canva for design and HTML, CSS, and JavaScript for development.",
      rules: [
        "Teams must consist of 2 to 3 members.",
        "All team members must actively contribute to both design and development.",
        "All work must be completed within the given time frame during the event.",
        "AI tools may only be used for minor enhancements. Complete AI-generated designs or code are not allowed.",
        "Submissions must be original. Plagiarism will lead to disqualification.",
        "Designs must creatively follow the assigned theme.",
        "The website must include working interactive elements.",
        "Entries will be judged on creativity, functionality, and responsiveness.",
      ],
      details:
        "The event consists of two rounds:\n" +
        "Round 1: UI Design Challenge – Design a theme-based website prototype in Figma or Canva.\n" +
        "➤ The theme will be given on the spot.\n" +
        "➤ Teams must complete an original design from scratch.\n" +
        "➤ AI tools are not allowed in this round.\n\n" +
        "Round 2: Development Challenge – Convert your design into a responsive and functional website using HTML, CSS, and JavaScript.\n" +
        "➤ The final site must be responsive and reflect the original design.\n" +
        "➤ Teams can use any code editor or framework, but must stick to HTML, CSS, and JavaScript.\n" +
        "➤ AI tools may be used for minor enhancements or assistance, but complete code generation is not allowed.",
      coordinators: [
        {
          name: "Prem Kumar M",
          phone: "74486 31031",
        },
      ],
    },
  ],

  nonTechnical: [
    {
      title: "Ojingeo Game",
      image: ojingeoGame,
      description:
        "Inspired by the viral Korean survival game, this event will push your strategic thinking and endurance to the limit.",
      teamSize: "1-3",
      timing: "April 16th 11:00AM ",
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
          phone: "88386 05968",
        },
      ],
    },
    {
      title: "Senpai Fans",
      image: animeQuiz,
      description:
        "Test your anime and manga knowledge in this ultimate quiz showdown!",
      teamSize: "1-3",
      timing: "April 16th 2:00PM to 4:00 PM",
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
        "The event will be conducted in Hall B. Participants should report **15 minutes before the event begins.",
      coordinators: [
        {
          name: "Kishore M",
          phone: "63811 79497",
        },
        {
          name: "Sai Mathesh",
          phone: "63815 82411",
        },
      ],
    },
    {
      title: "Aural Bliss",
      image: auralBliss,
      description:
        "A music lover's paradise! 'Aural Bliss' is an exhilarating competition that tests your auditory perception and musical knowledge.",
      teamSize: "1-3",
      timing: "April 16th 11:30AM to 12:30PM & 2:00PM to 4:00 PM",
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
        "The event will take place in Music Room 2. Participants should arrive **15 minutes early.",
      coordinators: [
        {
          name: " Manikandan",
          phone: "6361854170",
        },
        {
          name: " Rackesh K",
          phone: "8877665533",
        },
      ],
    },
    {
      title: "Treasure Hunt",
      image: treasureHunt,
      description:
        "Solve cryptic clues and uncover hidden treasures across the campus. An adventurous race against time and opponents!",
      teamSize: "3-5",
      timing: "April 16th 2:00PM to 4:00 PM",
      about:
        "Teams will solve riddles and navigate through multiple checkpoints to uncover the hidden treasure. The fastest team to complete all challenges wins.",
        rules: [
          "Each team should have atleast one pen with them.",
          "Team Size: Maximum of 5 members per team.",
          "No phones or gadgets allowed. This is a no-tech zone – it’s all about brains and luck.",
          "All rounds are time-bound. Don’t delay or you'll be eliminated!",
          "Volunteers’ instructions must be followed strictly. Ignoring them means disqualification.",
          "Do not tamper with other teams’ clues or game items. Play fair.",
          "No running in unsafe zones. Safety comes first.",
          "Hidden Twist Alert: One round has a surprise twist. Stay sharp!",
          "Most importantly – Have fun and go wild!"
        ],
      details:
        "Participants will receive their first clue at the starting point. Each clue leads to a hidden location where the next clue awaits. The final clue will guide the team to the treasure.\n\n Round 1 – Code of Clues: You’ll face 3 quirky questions – not your typical quiz stuff. Think Tamil cinema hints, Clue Chronicles, and cartoon chaos! Each one comes in a different format and must be decoded fast – it's a time-based round!\n\nRound 2 – Dice Dungeons: Pure chance meets chaos! Roll the dice to collect puzzle pieces, but be careful – some rolls might make you lose a piece or skip a turn. Complete your puzzle first to move on!\n\nRound 3 – The Golden Chase: The ultimate treasure rush! Hunt for golden coins hidden all over the building. Fill your treasure box – but beware... there’s a surprise twist waiting!",
      coordinators: [
        {
          name: "Madhan Raj M",
          phone: "91760 70805",
        },
        {
          name: " Monish",
          phone: "8877665544",
        },
      ],
    },
    {
      title: "Zeus' Spark",
      image: zeusspark,
      description:
        "An exciting event to ignite creativity, teamwork, and fun through engaging activities. Round 1: Emoji Quiz - guess movie titles from emoji combinations. Round 2: Movie Plots Challenge - identify movies from their plot descriptions. Round 3: Silent Acting - guess famous movie scenes acted out without dialogue.",
      teamSize: "2-3",
      timing: "April 16th 1 & 2:00PM to 4:00 PM",
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
          name: "Diwakar",
          phone: "6380406486",
        },
        {
          name: "Jayshaal",
          phone: "91760 70805",
        },
      ],
    },
    {
      title: "Robot Craze",
      image: robot, // replace with actual image reference
      description:
        "A thrilling robotics showdown featuring quiz rounds, rover races, and intense mini soccer matches using Bluetooth-controlled robots.",
      teamSize: "3-4",
      timing: "April 16th, 10:30 AM to 12:00 PM & 2:00 PM to 3:30 PM",
      about:
        "Fuel your passion for robotics and battle it out in Robo Craze — a high-energy, tech-packed event where knowledge, control, and strategy collide. Teams will compete in multiple rounds to test their technical know-how, driving skills, and gameplay tactics.",
      rules: [
        "Participants must arrive at the venue on time and be ready before the rounds begin.",
        "Strict adherence to time slots is required to ensure smooth conduct of the event.",
        "Maintain professionalism, clarity in communication, and teamwork throughout.",
        "Each team must consist of 3-4 members.",
        "Inform the event coordinator before taking any photos or recordings.",
      ],
      details:
        "The event includes three main rounds:\n\n1. Tech Check (Quiz Round) – A fast-paced quiz testing participants' knowledge of electronics, microcontrollers, motor drivers, and Bluetooth modules.\n\n2. **Rover Rush (Race Round)** – Navigate a Bluetooth-controlled rover through a challenging obstacle course where speed and control are crucial.\n\n3. **Robo Soccer Showdown** – Teams compete in a mini soccer match using their rovers to score goals. Precision, coordination, and team strategy will determine the winner.",
      coordinators: [
        {
          name: "Abishek",
          phone: "9488271971",
        },
        {
          name: "Naresh M",
          phone: "8098504465",
        },
      ],
    },
    {
      title: "Cricbuzz",
      image: cricbuzz,
      description:
        "A series of mini sports challenges and quizzes for sports enthusiasts.",
      timing: "April 16th - 2:00 PM to 4:00 PM",
      teamSize: "2-3",
      about:
        "Cricbuzz is designed for cricket and sports lovers! This event challenges your knowledge of sports and puts your strategic thinking to the test with two exciting rounds: a quiz and a squad selection round.",
      rules: [
        "The event consists of two exciting rounds.\n\n In Round 1, teams will face a sports quiz covering various aspects of sports knowledge. From this round, only the top 8 teams will qualify for Round 2. \n\nIn the final round, teams will take part in a unique squad selection challenge, where they will be given different scenarios and must build their best possible team. The winners will be declared based on the total points earned in Round 2. Each team should consist of 2 to 3 members. Use of mobile phones or any external help during the quiz is strictly prohibited. Teams are expected to maintain discipline and demonstrate fair play throughout the event.",
      ],
      details:
        "The event will be conducted in two round. Teams must report 30 minutes prior to the event start time for briefing and attendance.",
        coordinators: [
          {
            name: "Hariharan",
            phone: "63794 25941",
          },
          {
            name: "Mahider",
            phone: "8765432188",
          }
        ],
    },
  ],
  online: [
    {
      title: "Film Fest",
      image: shortFilm,
      description:
        "Unleash your creativity by making a compelling short film in just a few minutes. Show off your storytelling, directing, and editing skills!",
      timing: "Submit by 15th April - 9:00 PM",
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
          name: "Jaisurya S",
          phone: "7708310607",
        },
      ],
    },
    {
      title: "E-Sports",
      image: eSports,
      description:
        "Compete in an adrenaline-pumping online gaming tournament featuring some of the most popular multiplayer games!",
      timing: "Day 2 - Online",

      teamSize: "4-max",
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
          name: "Chatriyan",
          phone: "8877665511",
        },
      ],
    },
  ],
  workshop: [
    {
      title: "Drone Workshop",
      image: droneWorkshop,
      description:
        "Learn the fundamentals of drone technology, including assembly, calibration, and flying techniques. A must-attend for drone enthusiasts!",
      timing: "10 AM",
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
          name: "Kamesh",
          phone: "9360195640",
        },
        {
          name: "Vishalan",
          phone: "9789018392",
        },
      ],
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
        <div
          className="h-full w-full bg-contain bg-repeat-y"
          style={{ backgroundImage: "url(/images/greek-column-left.png)" }}
        ></div>
      </div>
      <div className="absolute top-0 right-0 h-full w-16 opacity-50 hidden lg:block">
        <div
          className="h-full w-full bg-contain bg-repeat-y"
          style={{ backgroundImage: "url(/images/greek-column-right.png)" }}
        ></div>
      </div>

      {/* Olympian Scroll Container */}
      <div
        className="bg-amber-50/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-3xl w-full backdrop-blur-md text-white border-2 border-amber-200/30"
        style={{
          backgroundImage: `url(/images/greek-papyrus-texture.jpg)`,
          backgroundBlendMode: "overlay",
        }}
      >
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
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/laurel-wreath.png)" }}
            ></div>
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-3 rounded-lg font-bold flex items-center gap-2 transition transform hover:scale-105 border-b-4 border-blue-800 w-full sm:w-auto"
          >
            <Share2 className="w-5 h-5" /> Spread the Word
          </button>
        </div>

        {/* Ancient Tablet Navigation */}
        <div className="mt-10 bg-stone-900/50 p-4 rounded-lg backdrop-blur-lg shadow-lg border border-amber-200/30">
          <div className="flex flex-col md:flex-row justify-around text-amber-300 font-bold text-lg cursor-pointer font-serif">
            <span
              className={`p-2 transition-all duration-300 ${
                activeTab === "about"
                  ? "text-white border-b-2 border-amber-300"
                  : "hover:text-amber-100"
              }`}
              onClick={() => setActiveTab("about")}
            >
              Prophecy
            </span>
            <span
              className={`p-2 transition-all duration-300 ${
                activeTab === "rules"
                  ? "text-white border-b-2 border-amber-300"
                  : "hover:text-amber-100"
              }`}
              onClick={() => setActiveTab("rules")}
            >
              Decrees
            </span>
            <span
              className={`p-2 transition-all duration-300 ${
                activeTab === "details"
                  ? "text-white border-b-2 border-amber-300"
                  : "hover:text-amber-100"
              }`}
              onClick={() => setActiveTab("details")}
            >
              Omens
            </span>
            <span
              className={`p-2 transition-all duration-300 ${
                activeTab === "coordinators"
                  ? "text-white border-b-2 border-amber-300"
                  : "hover:text-amber-100"
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
                <div className="mt-4 p-3 bg-amber-900/20 rounded-lg">
                  <p className="font-semibold text-amber-300">Team Size:</p>
                  <p>{event.teamSize} participants</p>
                </div>
              </div>
            )}

            {activeTab === "rules" && (
              <div>
                <h3 className="text-xl font-bold text-amber-300 mb-3 font-serif">
                  Sacred Rules
                </h3>
                <ul className="list-disc pl-5 space-y-2 font-serif">
                  {event.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "details" && (
              <div className="whitespace-pre-wrap text-sm">
                <h3 className="text-xl font-bold text-amber-300 mb-3 font-serif">
                  Event Details
                </h3>
                <p className="font-serif">{event.details}</p>
              </div>
            )}

            {activeTab === "coordinators" && (
              <div>
                <h3 className="text-xl font-bold text-amber-300 mb-3 font-serif">
                  Event Oracles
                </h3>
                <div className="space-y-4">
                  {event.coordinators.map((coordinator, index) => (
                    <div key={index} className="bg-amber-900/20 p-3 rounded-lg">
                      <p className="font-bold">{coordinator.name}</p>

                      <div className="flex flex-col mt-2 space-y-2">
                        <a
                          href={`tel:${coordinator.phone}`}
                          className="flex items-center text-amber-200 hover:text-amber-100"
                        >
                          <Phone className="w-4 h-4 mr-2" /> {coordinator.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Event Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <img
            src={event.image}
            alt={event.title}
            className="rounded-lg w-full object-cover h-64 shadow-lg border-2 border-amber-200/30"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetail;
