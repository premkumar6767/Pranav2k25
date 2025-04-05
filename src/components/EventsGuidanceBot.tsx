import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface EventData {
  name: string;
  description: string;
  format?: string;
  rounds?: string[];
  team?: string;
  instructions?: string[];
  games?: string[];
  note?: string;
  notes?: string;
  languages?: string;
}

interface EventsData {
  [key: string]: EventData;
}

interface Message {
  role: 'user' | 'bot';
  content: string;
}

interface Position {
  x: number;
  y: number;
}

export default function EventsGuidanceBot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      content: "Greetings, mortal! I am Hermes, messenger of Zeus, your guide to Pranav2k25 events. How may I assist you today? You can ask me about any event like 'Tell me about Hackathon' or 'What is Paper Presentation?'" 
    }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const chatButtonRef = useRef<HTMLDivElement | null>(null);
  
  // For draggable functionality
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  
  // For window size
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  // Initialize position based on window size
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({
        x: window.innerWidth - 80,
        y: window.innerHeight - 150
      });
    }
  }, []);

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      // Keep button within bounds when window is resized
      if (chatButtonRef.current) {
        const buttonRect = chatButtonRef.current.getBoundingClientRect();
        
        setPosition(prevPosition => ({
          x: Math.min(prevPosition.x, window.innerWidth - buttonRect.width),
          y: Math.min(prevPosition.y, window.innerHeight - buttonRect.height)
        }));
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize(); // Set initial size
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Adjust chat window position when window is resized
  useEffect(() => {
    if (isOpen && chatContainerRef.current) {
      const chatWidth = chatContainerRef.current.offsetWidth;
      const chatHeight = chatContainerRef.current.offsetHeight;
      
      // Ensure chat doesn't go off screen
      if (chatWidth > windowSize.width) {
        chatContainerRef.current.style.width = `${windowSize.width - 20}px`;
      }
      
      if (chatHeight > windowSize.height) {
        chatContainerRef.current.style.height = `${windowSize.height - 20}px`;
      }
    }
  }, [isOpen, windowSize]);

  // Dragging handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (chatButtonRef.current) {
      const rect = chatButtonRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (chatButtonRef.current && e.touches[0]) {
      const rect = chatButtonRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const x = e.clientX - dragOffset.x;
      const y = e.clientY - dragOffset.y;
      
      // Keep button within viewport bounds
      const buttonSize = chatButtonRef.current?.getBoundingClientRect() || { width: 56, height: 56 };
      
      const boundedX = Math.max(0, Math.min(windowSize.width - buttonSize.width, x));
      const boundedY = Math.max(0, Math.min(windowSize.height - buttonSize.height, y));
      
      setPosition({ x: boundedX, y: boundedY });
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      const x = e.touches[0].clientX - dragOffset.x;
      const y = e.touches[0].clientY - dragOffset.y;
      
      // Keep button within viewport bounds
      const buttonSize = chatButtonRef.current?.getBoundingClientRect() || { width: 56, height: 56 };
      
      const boundedX = Math.max(0, Math.min(windowSize.width - buttonSize.width, x));
      const boundedY = Math.max(0, Math.min(windowSize.height - buttonSize.height, y));
      
      setPosition({ x: boundedX, y: boundedY });
      
      // Prevent page scrolling while dragging
      e.preventDefault();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add and remove event listeners for drag
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleMouseUp);
      }
    };
  }, [isDragging, dragOffset]);

  const processUserQuery = (query: string): string => {
    // Logic to determine which event the user is asking about
    query = query.toLowerCase();
    
    // Event information from PDF
    const events: EventsData = {
      "paper presentation": {
        name: "PAPER PRESENTATION",
        description: "A paper presentation is an opportunity for participants to showcase their research, technical knowledge, or innovative ideas in a structured manner.",
        format: "Participants submit an abstract of their paper (200-500 words) and then present their research followed by a Q&A session.",
        team: "3-4 members per team",
        instructions: [
          "Arrive on time and ensure all technical requirements are met",
          "Stick to the time limit allocated",
          "Use visual aids to enhance understanding",
          "Maintain professional body language and clarity in speech",
          "Be prepared for challenging questions"
        ]
      },
      "hackathon": {
        name: "HACKATHON",
        description: "A two-round competition focused on innovation and technical proficiency.",
        rounds: [
          "Round 1: Ideation and Proposal Presentation - Teams analyze problems, develop solutions, and present their ideas.",
          "Round 2: Prototype/Simulation Development - Top 10 teams build functional demonstrations of their solutions."
        ],
        team: "3-4 members per team",
        instructions: [
          "Arrive on time with all required equipment",
          "Bring laptops, chargers, and other necessary items",
          "Maintain professional conduct",
          "Be prepared for challenging questions"
        ]
      },
      "wired wonders": {
        name: "WIRED WONDERS",
        description: "An electrifying multi-round competition designed for electronics enthusiasts.",
        rounds: [
          "Round 1: Resistor Riddle & Circuit Conundrum - Decode resistor color bands and solve circuit challenges",
          "Round 2: Blind Build Battle - One team member builds a circuit based on verbal instructions from teammates",
          "Round 3: Bidding for Brilliance - Teams bid on components to design innovative systems"
        ],
        team: "3-4 members per team",
        notes: "Mobile phone usage is prohibited during the event"
      },
      "byte the dice": {
        name: "BYTE THE DICE",
        description: "A tech-based quiz and task event where dice rolls determine challenges.",
        rounds: [
          "Round 1: Qualifier Round - Teams roll dice to land on blocks with tech quizzes or tasks",
          "Round 2: Challenge Round - More complex tasks like circuit connections or debugging code",
          "Round 3: Final Showdown - Series of challenges including quizzes and rapid-fire rounds"
        ],
        team: "2 members per team",
        format: "One member rolls the dice, the other completes the task"
      },
      "robot craze": {
        name: "ROBOT CRAZE",
        description: "An action-packed game where players control robots in various challenges.",
        format: "Players customize robots with different weapons, armor, and abilities to compete in combat or complete missions.",
        team: "3-4 members per team"
      },
      "design 2 dev": {
        name: "DESIGN 2 DEV",
        description: "A two-round event focused on UI/UX design and development.",
        rounds: [
          "Round 1: UI Design Challenge - Create a single-page website design in Canva or Figma (50 min)",
          "Round 2: Design to Code Challenge - Convert the design into a functional website using HTML, CSS (1-1.5 hrs)"
        ],
        team: "3-4 members per team",
        instructions: ["Bring laptops, chargers, and other essentials"]
      },
      "decodex": {
        name: "DECODEX EVENT",
        description: "A coding event to test logical thinking and problem-solving skills.",
        rounds: [
          "Round 1: Logic Deduction - Derive formulas from simple input-output pairs",
          "Round 2: Pattern Recognition & Algorithm Building - Analyze complex outputs",
          "Round 3: Code Optimization & Reconstruction - Write optimized code for intricate outputs"
        ],
        team: "Individual or up to 4 members",
        languages: "Python, C++",
        note: "Strict time limits apply for each challenge"
      },
      "ojingeo": {
        name: "OJINGEO",
        description: "A series of games testing critical thinking and quick decision-making.",
        games: [
          "DDAKJI: A 1v1 Korean game where players try to flip their opponent's cover",
          "BALLOON SHOOTING: Players get 5 shots to hit balloons, highest score wins",
          "PICK THE GEMS: Using chopsticks to pick up marbles within a time limit",
          "CODE GAMES: Team game where members must guess a word",
          "SKRIBBL: Drawing game where team members guess what's being drawn"
        ],
        note: "Some games require teams while others are individual"
      },
      "aural bliss": {
        name: "AURAL BLISS",
        description: "A musical event testing knowledge and speed.",
        rounds: [
          "Round 1: Guess the Song from BGM within 10-15 seconds",
          "Round 2: Image Connection - Find the Song based on related images",
          "Round 3: Identify Actors/Actresses from Childhood Photos",
          "Round 4: Unscramble Song Lyrics"
        ],
        team: "Maximum 3 members",
        note: "Teams must answer within strict time limits"
      },
      "senpai fans": {
        name: "SENPAI FANS",
        description: "An event for anime lovers to test their knowledge of anime, manga, and comics.",
        rounds: [
          "Round 1: Otaku Blitz - Rapid-fire quiz",
          "Round 2: Anime Battle Royale - Debate round on anime topics",
          "Round 3: The Ultimate Weeb Challenge - Picture rounds, audio clips, and buzzer rounds"
        ],
        team: "3-5 members",
        note: "Use of phones or external assistance will result in disqualification"
      },
      "unscramble & hunt": {
        name: "UNSCRAMBLE & HUNT",
        description: "A word-solving and treasure hunting challenge.",
        rounds: [
          "Round 1: Unscramble Rush - Decode scrambled words within 2 minutes",
          "Round 2: Puzzle Hunt - Find hidden puzzle pieces and assemble them"
        ],
        team: "Maximum 4 members",
        note: "Use of mobile phones is prohibited"
      },
      "cricbuzz": {
        name: "CRICBUZZ",
        description: "A cricket knowledge and strategy event.",
        rounds: [
          "Round 1: Cricket Moment Analysis and General Knowledge Quiz",
          "Round 2: Strategic Team Formation and Scenario-Based Analysis"
        ],
        team: "3-4 members",
        note: "Usage of mobile phones is prohibited"
      },
      "zeus' spark": {
        name: "ZEUS' SPARK",
        description: "A fun event testing creativity and teamwork.",
        rounds: [
          "Round 1: Emoji Quiz - Guess movie titles from emojis",
          "Round 2: Movie Plots - Guess movies from their plots",
          "Round 3: Silent Acting - Act out movie scenes without dialogue"
        ],
        team: "3-5 members",
        note: "All decisions made by judges are final"
      }
    };

    // Find relevant event
    let response = "";
    
    if (query.includes("list all events") || query.includes("what events") || query.includes("tell me about all events") || query.includes("all events")) {
      response = "By the power of Olympus, here are all the events at Pranav2k25:\n\n";
      
      Object.values(events).forEach(event => {
        response += `• ${event.name}\n`;
      });
      
      response += "\nAsk about any specific event, and I shall share the divine details!";
    } else {
      // Try to match the query to a specific event
      const matchedEventKey = Object.keys(events).find(key => query.includes(key));
      
      if (matchedEventKey && matchedEventKey in events) {
        const event = events[matchedEventKey];
        response = `**${event.name}**\n\n${event.description}\n\n`;
        
        if (event.rounds) {
          response += "Rounds: \n";
          event.rounds.forEach((round: string) => {
            response += `- ${round}\n`;
          });
          response += "\n";
        }
        
        if (event.format) {
          response += `Format: ${event.format}\n\n`;
        }
        
        if (event.games) {
          response += "Games: \n";
          event.games.forEach((game: string) => {
            response += `- ${game}\n`;
          });
          response += "\n";
        }
        
        if (event.team) {
          response += `Team Size: ${event.team}\n\n`;
        }
        
        if (event.instructions) {
          response += "Instructions: \n";
          event.instructions.forEach((instruction: string) => {
            response += `- ${instruction}\n`;
          });
          response += "\n";
        }
        
        if (event.note) {
          response += `Note: ${event.note}\n`;
        }
        
        if (event.notes) {
          response += `Note: ${event.notes}\n`;
        }
        
        if (event.languages) {
          response += `Programming Languages: ${event.languages}\n`;
        }
      } else if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
        response = "Greetings, mortal! By Zeus's thunderbolt, I welcome you to Pranav2k25! I am Hermes, messenger of the gods, here to guide you through our divine events. What knowledge do you seek?";
      } else if (query.includes("thank") || query.includes("thanks")) {
        response = "You honor me with your gratitude! May the gods of Olympus smile upon your journey. Should you require more divine knowledge about our events, simply call upon me!";
      } else if (query.includes("team size") || query.includes("members") || query.includes("group")) {
        response = "As decreed by the Olympian council, most events allow teams of 3-4 members. However, some events have different sacred numbers:\n\n" +
          "• Byte the Dice: 2 members per team\n" +
          "• Aural Bliss: Maximum 3 members\n" +
          "• Senpai Fans: 3-5 members\n" +
          "• Unscramble & Hunt: Maximum 4 members\n" +
          "• Zeus' Spark: 3-5 members\n" +
          "• Decodex: Individual or up to 4 members";
      } else if (query.includes("who are you") || query.includes("what can you do") || query.includes("help")) {
        response = "I am Hermes, swift messenger of Zeus and official herald of Pranav2k25! With the wisdom of Olympus, I can share knowledge of any event, their formats, team sizes, and divine instructions. Simply ask about specific events like 'Tell me about Hackathon' or 'What is Paper Presentation?' You may also command me to 'list all events'!";
      } else {
        response = "By Apollo's wisdom, I don't possess knowledge about that specific query. You may ask about our glorious events like Hackathon, Paper Presentation, Robot Craze, Wired Wonders, Byte the Dice, Design 2 Dev, Decodex, Ojingeo, Aural Bliss, Senpai Fans, Unscramble & Hunt, Cricbuzz, or Zeus' Spark. Or command me to 'list all events' to behold all we offer!";
      }
    }
    
    return response;
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { role: 'user', content: inputMessage }]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Process the query and generate response
    setTimeout(() => {
      const botResponse = processUserQuery(inputMessage);
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 1000);
    
    // Clear input
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Calculate chat window position based on button position
  const getChatWindowPosition = () => {
    // Button dimensions
    const buttonWidth = 56; // Approximate width of the button
    const buttonHeight = 56; // Approximate height of the button
    
    // Chat window dimensions
    const chatWidth = windowSize.width < 640 ? windowSize.width - 40 : 350;
    const chatHeight = windowSize.height < 500 ? windowSize.height - 40 : 400;
    
    // Determine which quadrant of the screen the button is in
    const isRightHalf = position.x > windowSize.width / 2;
    const isBottomHalf = position.y > windowSize.height / 2;
    
    let chatX, chatY;
    
    // Position chat window based on button quadrant
    if (isRightHalf) {
      // Button is on right half, position chat to the left of button
      chatX = Math.max(10, position.x - chatWidth);
    } else {
      // Button is on left half, position chat to the right of button
      chatX = Math.min(windowSize.width - chatWidth - 10, position.x + buttonWidth);
    }
    
    if (isBottomHalf) {
      // Button is on bottom half, position chat above button
      chatY = Math.max(10, position.y - chatHeight);
    } else {
      // Button is on top half, position chat below button
      chatY = Math.min(windowSize.height - chatHeight - 10, position.y + buttonHeight);
    }
    
    // Ensure chat stays within viewport
    chatX = Math.max(10, Math.min(windowSize.width - chatWidth - 10, chatX));
    chatY = Math.max(10, Math.min(windowSize.height - chatHeight - 10, chatY));
    
    return { x: chatX, y: chatY };
  };

  const chatPosition = getChatWindowPosition();

  return (
    <>
      {/* Draggable chat button */}
      <div 
        ref={chatButtonRef}
        className={`fixed z-50 transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-grab active:cursor-grabbing'}`}
        style={{ 
          left: `${position.x}px`,
          top: `${position.y}px`,
          touchAction: 'none', // Prevents touch scrolling while dragging
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <button 
          onClick={toggleChat}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white shadow-lg hover:scale-105 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #F2C94C, #BB8C12)', 
            border: '2px solid #FFEBC4',
            boxShadow: '0 4px 15px rgba(242, 201, 76, 0.5)'
          }}
          aria-label="Open chat"
        >
          {/* Greek messenger icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L3 10H5V20H19V10H21L12 3Z" fill="white"/>
            <path d="M10 14H14V20H10V14Z" fill="white"/>
            <circle cx="12" cy="10" r="2" fill="white"/>
          </svg>
        </button>
      </div>
      
      {/* Chat window - positioned relative to the button */}
      <div 
        ref={chatContainerRef}
        className={`fixed z-50 rounded-lg shadow-xl flex flex-col transition-all duration-300 overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{
          left: `${chatPosition.x}px`,
          top: `${chatPosition.y}px`,
          width: windowSize.width < 640 ? 'calc(100% - 40px)' : '350px',
          maxWidth: '100%',
          height: windowSize.height < 500 ? 'calc(100% - 40px)' : '400px',
          maxHeight: 'calc(100vh - 40px)',
          border: '2px solid #D4AF37',
          transformOrigin: `${isOpen ? 'center' : `${position.x - chatPosition.x}px ${position.y - chatPosition.y}px`}`
        }}
      >
        {/* Header */}
        <div className="p-2 sm:p-3 flex justify-between items-center" style={{
          background: 'linear-gradient(135deg, #F2C94C, #BB8C12)',
          borderBottom: '2px solid #D4AF37'
        }}>
          <div className="flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 3L3 10H5V20H19V10H21L12 3Z" fill="white"/>
              <path d="M10 14H14V20H10V14Z" fill="white"/>
              <circle cx="12" cy="10" r="2" fill="white"/>
            </svg>
            <h3 className="font-bold text-white text-sm sm:text-base">Hermes - Divine Event Guide</h3>
          </div>
          <button 
            onClick={toggleChat} 
            className="text-white hover:text-gray-200"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>
        
        {/* Messages container */}
        <div className="flex-1 p-2 sm:p-3 overflow-y-auto" style={{
          background: 'linear-gradient(to bottom, #FFFAF0, #FFF8DC)',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M30 30m-28 0a28 28 0 1 0 56 0a28 28 0 1 0 -56 0M30 15L45 40H15L30 15z\'/%3E%3C/g%3E%3C/svg%3E")'
        }}>
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-2 sm:mb-3 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`p-2 sm:p-3 rounded-lg max-w-[85%] text-sm sm:text-base ${
                  message.role === 'user' 
                    ? 'rounded-br-none text-white' 
                    : 'rounded-bl-none text-gray-800'
                }`}
                style={{
                  background: message.role === 'user' 
                    ? 'linear-gradient(135deg, #8B7E4E, #705B26)' 
                    : 'linear-gradient(135deg, #F2E5BC, #E9D18B)',
                  border: message.role === 'user' 
                    ? '1px solid #A89860' 
                    : '1px solid #D4AF37',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                {message.content.split('\n').map((line, i) => (
                  <p key={i} className={`${line.startsWith('**') && line.endsWith('**') ? 'font-bold' : ''} ${i > 0 ? 'mt-1' : ''}`}>
                    {line.startsWith('**') && line.endsWith('**') 
                      ? line.substring(2, line.length - 2) 
                      : line.startsWith('• ') 
                        ? <span>• {line.substring(2)}</span>
                        : line.startsWith('- ') 
                          ? <span className="ml-2">- {line.substring(2)}</span>
                          : line}
                  </p>
                ))}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start mb-2 sm:mb-3">
              <div className="p-2 sm:p-3 rounded-lg rounded-bl-none" style={{
                background: 'linear-gradient(135deg, #F2E5BC, #E9D18B)',
                border: '1px solid #D4AF37'
              }}>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#BB8C12' }}></div>
                  <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#BB8C12', animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#BB8C12', animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <div className="border-t p-2 sm:p-3 flex" style={{
          borderColor: '#D4AF37',
          background: '#FFFAF0'
        }}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask the messenger of Zeus..."
            className="flex-1 rounded-l-lg px-2 py-1 sm:px-3 sm:py-2 focus:outline-none text-sm sm:text-base text-white"
            style={{ 
              border: '1px solid #D4AF37',
              borderRight: 'none',
              background: '#2D2D2D'
            }}
          />
          <button
            onClick={handleSendMessage}
            className="px-2 sm:px-4 rounded-r-lg text-white flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #F2C94C, #BB8C12)',
              border: '1px solid #D4AF37',
              borderLeft: 'none'
            }}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
}