// src/data/events.js
import paperPresentation from "../images/paperpres.jpg";
import hackathon from "../images/Hackathon.jpeg";
import wiredWonders from "../images/wirewond.jpg";
import roleAndDice from "../images/rolldice.jpg";
import robotCraze from "../images/robotcraze.jpg";
import designedToDev from "../images/d2dev.jpg";
import reverseCoding from "../images/decodex.jpg";
import ojingeoGame from "../images/ojingeo.jpg";
import auralBliss from "../images/Aural-Bliss.jpeg";
import animeQuiz from "../images/Senpai-fans.jpeg";
import treasureHunt from "../images/treashunt.jpg";
import cricbuzz from "../images/sport.jpg";
import zeuseSpark from "../images/Zeuspark.jpg";

export const events = {
  technical: [
    {
      id: "1",
      title: "Paper Presentation",
      description: "Present your research and innovative ideas in a structured format.",
      about: "Present your research and innovative ideas in a structured format. Improve your presentation skills and showcase your technical knowledge.",
      details: "Submit an abstract (200-500 words) highlighting your key findings and methodology. Q&A session follows to evaluate your understanding and depth of research.",
      timing: "March 15, 2025 | 10:00 AM",
      teamSize: "1-2 Members",
      rules: [
        "Abstract submission deadline: 1 week before the event",
        "Presentation time: 8-10 minutes",
        "Q&A session: 5 minutes",
        "Bring your own laptop for presentation"
      ],
      image: paperPresentation
    },
    {
      id: "2",
      title: "Hackathon",
      description: "A two-round innovation challenge for developers and problem solvers.",
      about: "A two-round innovation challenge focused on developing innovative solutions to real-world problems.",
      details: "Round 1: Teams analyze problem statements, develop solutions, and present their ideas. Round 2: Shortlisted teams build prototypes of their proposed solutions.",
      timing: "April 5, 2025 | 9:00 AM",
      teamSize: "2-4 Members",
      rules: [
        "Teams must bring their own laptops and development tools",
        "Internet access will be provided",
        "Solutions must be original and created during the event",
        "Round 1: 3 hours for ideation and planning",
        "Round 2: 8 hours for prototype development"
      ],
      image: hackathon
    },
    {
      id: "3",
      title: "Wired Wonders",
      description: "An electrifying multi-round competition for electronics enthusiasts.",
      about: "Test your electronics knowledge and circuit-building skills in this exciting competition.",
      details: "Round 1: Decode resistor color bands and fix circuit malfunctions. Round 2: Blindfolded circuit building with partner guidance. Round 3: Strategic bidding for components.",
      timing: "April 12, 2025 | 11:00 AM",
      teamSize: "2 Members",
      rules: [
        "Basic knowledge of electronic components is required",
        "All necessary components will be provided",
        "Teams must complete each round within the given timeframe",
        "Judges' decision will be final"
      ],
      image: wiredWonders
    },
    {
      id: "4",
      title: "Byte The Dice",
      description: "Test your critical thinking and problem-solving through tech-based challenges.",
      about: "An exciting event that combines luck and skill through tech-focused challenges.",
      details: "Roll the dice to face unpredictable quizzes or tasks. Progress through knockout, challenge, and final showdown rounds with increasing difficulty.",
      timing: "April 18, 2025 | 1:00 PM",
      teamSize: "2 Members",
      rules: [
        "Each round has different rules based on dice rolls",
        "Teams must solve problems within the allocated time",
        "Use of mobile phones or external resources is prohibited",
        "Team with most points after all rounds wins"
      ],
      image: roleAndDice
    },
    {
      id: "6",
      title: "Design 2 Dev",
      description: "A professional workshop bridging UI/UX design and development.",
      about: "Learn how to transform design concepts into functional websites in this hands-on workshop.",
      details: "Round 1: Design a single-page website using Canva or Figma within 50 minutes. Round 2: Convert your design into a functional website using HTML, CSS, and JavaScript.",
      timing: "May 2, 2025 | 10:00 AM",
      teamSize: "1-2 Members",
      rules: [
        "Participants must bring their own laptops",
        "Basic knowledge of HTML, CSS, and JavaScript is recommended",
        "Design tools will be provided if needed",
        "Final websites will be judged on functionality, aesthetics, and code quality"
      ],
      image: designedToDev
    },
    {
      id: "7",
      title: "Decodex",
      description: "Challenge your coding skills through reverse engineering tasks.",
      about: "Put your logical thinking and programming skills to the test in this reverse engineering challenge.",
      details: "Round 1: Deduce the logic behind simple input-output pairs. Round 2: Analyze complex patterns and reconstruct algorithms. Round 3: Optimize and write executable code.",
      timing: "May 10, 2025 | 2:00 PM",
      teamSize: "2 Members",
      rules: [
        "Programming languages allowed: Python, Java, C++, JavaScript",
        "Internet access will be restricted during the contest",
        "Solutions must be optimized for efficiency",
        "Plagiarism will result in immediate disqualification"
      ],
      image: reverseCoding
    }
  ],
  nonTechnical: [
    {
      id: "8",
      title: "Ojingeo Game",
      description: "Test your critical thinking through Korean-inspired games.",
      about: "Experience the thrill of Korean-inspired games that test your skills and strategic thinking.",
      details: "Games include Ddakji (paper tile flipping), balloon shooting, marble picking with chopsticks, code games, and Skribbl drawing competitions.",
      timing: "May 18, 2025 | 11:00 AM",
      teamSize: "2-3 Members",
      rules: [
        "Teams must participate in all games",
        "Each game has specific rules that will be explained before starting",
        "Points will be awarded based on performance in each game",
        "Team with the highest total points wins"
      ],
      image: ojingeoGame
    },
    {
      id: "9",
      title: "Aural Bliss",
      description: "A thrilling musical event testing your knowledge and speed.",
      about: "Test your musical knowledge and quick thinking in this fast-paced competition.",
      details: "Round 1: Guess songs from instrumental BGM. Round 2: Connect images to identify songs. Round 3: Recognize celebrities from childhood photos. Round 4: Unscramble jumbled lyrics.",
      timing: "May 25, 2025 | 3:00 PM",
      teamSize: "2 Members",
      rules: [
        "No use of mobile phones or external devices",
        "Quick response time is crucial",
        "In case of a tie, a lightning round will determine the winner",
        "Judges' decision will be final"
      ],
      image: auralBliss
    },
    {
      id: "10",
      title: "Senpai Fans",
      description: "A fun event for anime enthusiasts to explore art, culture, and fiction.",
      about: "Calling all anime fans! Show off your knowledge and passion for anime culture.",
      details: "Round 1: Otaku Blitz rapid-fire quiz. Round 2: Anime Battle Royale debates. Round 3: Ultimate Weeb Challenge with screenshots, audio clips, and character identification.",
      timing: "June 1, 2025 | 12:00 PM",
      teamSize: "1-2 Members",
      rules: [
        "Questions will cover popular and classic anime series",
        "Cosplay is encouraged but not mandatory",
        "No internet usage during the competition",
        "Respect all participants and opinions during debates"
      ],
      image: animeQuiz
    },
    {
      id: "11",
      title: "Unscramble & Hunt",
      description: "The ultimate test of speed, logic, and teamwork.",
      about: "Put your word skills and searching abilities to the test in this exciting two-round event.",
      details: "Round 1: Unscramble words within 2 minutes. Round 2: Search for hidden puzzle pieces across the venue and assemble them correctly.",
      timing: "June 8, 2025 | 2:00 PM",
      teamSize: "2-3 Members",
      rules: [
        "Teams must complete round 1 to qualify for round 2",
        "No electronic devices allowed during the hunt",
        "Puzzle pieces must not be damaged or altered",
        "First team to complete both challenges wins"
      ],
      image: treasureHunt
    },
    {
      id: "12",
      title: "Cricbuzz",
      description: "Test your cricket knowledge and strategic thinking.",
      about: "Cricket enthusiasts, showcase your knowledge of the game and strategic thinking abilities.",
      details: "Round 1: Answer questions about tournaments, IPL history, and cricket records. Round 2: Form strategic teams based on specific cricket scenarios.",
      timing: "June 15, 2025 | 1:00 PM",
      teamSize: "3-4 Members",
      rules: [
        "Questions will cover international cricket, IPL, and historic matches",
        "Team auction strategy will be evaluated by judges",
        "Specific scenarios and budgets will be provided for team formation",
        "Knowledge of current cricket rankings and statistics is recommended"
      ],
      image: cricbuzz
    },
    {
      id: "13",
      title: "Zeus' Spark",
      description: "An exciting event to ignite creativity, teamwork, and fun through engaging activities.",
      about: "Have fun while testing your knowledge of popular culture and movies in this entertaining event.",
      details: "Round 1: Emoji Quiz - guess movie titles from emoji combinations. Round 2: Movie Plots Challenge. Round 3: Silent Acting - guess famous movie scenes.",
      timing: "June 22, 2025 | 4:00 PM",
      teamSize: "2-3 Members",
      rules: [
        "Each round has a time limit of 10 minutes",
        "No use of mobile phones or internet",
        "For acting round, no speaking or lip movements allowed",
        "Points from all rounds will be accumulated for final scoring"
      ],
      image: zeuseSpark
    }
  ],
  workshop: [
    {
      id: "5",
      title: "Robot Craze",
      description: "An action-packed game where players control robots in various challenges.",
      about: "Learn about robotics and programming in this interactive workshop and competition.",
      details: "Customize your robots with different weapons, armor, and abilities before each round. Engage in combat using tactics like dodging, attacking, and defending to outsmart opponents.",
      timing: "April 25, 2025 | 9:00 AM",
      teamSize: "2-3 Members",
      rules: [
        "No prior robotics experience required",
        "All robot kits and tools will be provided",
        "Teams will have 1 hour to build and 1 hour to program their robots",
        "Competition will include obstacle courses and battle rounds"
      ],
      image: robotCraze
    }
  ],
  onlineevents: [
    {
      id: "14",
      title: "Code Marathon",
      description: "A 24-hour online coding competition to solve complex algorithmic problems.",
      about: "Participate from anywhere in the world in this intensive coding challenge.",
      details: "Solve a series of increasingly difficult algorithmic problems within 24 hours. Submissions will be evaluated on correctness, efficiency, and code quality.",
      timing: "June 29-30, 2025 | Starting at 10:00 AM",
      teamSize: "1-3 Members",
      rules: [
        "Registration must be completed 3 days before the event",
        "Solutions can be submitted in Python, Java, C++, or JavaScript",
        "Partial solutions will receive partial points",
        "Internet can be used for reference, but solutions must be original"
      ],
      image: hackathon // Using hackathon image as placeholder
    }
  ]
};

export default events;