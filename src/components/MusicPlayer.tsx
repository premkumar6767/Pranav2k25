import React, { useState, useEffect, useRef } from 'react';
import './music-player.css';

// Update your MusicPlayer component to accept this prop
interface MusicPlayerProps {
  audioPath: string;
  onMusicPreferenceSet: () => void;
  isMobile?: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioPath, onMusicPreferenceSet }) => {
  const [showDialog, setShowDialog] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Always show dialog when component mounts - no longer check localStorage
    setShowDialog(true);
  }, []);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(audioPath);
    audio.loop = true;
    audio.volume = 0.7;
    audioRef.current = audio;
    
    // Handle page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isPlaying && audioRef.current) {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioPath, isPlaying]);

  // Control audio playback whenever isPlaying changes
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Audio playback failed:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleYesClick = () => {
    setShowDialog(false);
    setMusicEnabled(true);
    setIsPlaying(true);
    // Removed localStorage saving
    onMusicPreferenceSet();
  };

  const handleNoClick = () => {
    setShowDialog(false);
    setMusicEnabled(true); // Still show the button
    setIsPlaying(false);
    // Removed localStorage saving
    onMusicPreferenceSet();
  };

  const toggleMusic = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    // Removed localStorage saving
  };

  return (
    <div className="music-player">
      {showDialog && (
        <div className="music-dialog">
          <div className="music-dialog-header">
            <div className="greek-ornament left"></div>
            <h3>Would you like to play music?</h3>
            <div className="greek-ornament right"></div>
          </div>
          <p>Would you like to listen to background music while browsing?</p>
          <div className="music-buttons">
            <button onClick={handleYesClick} className="btn-yes">
              <span className="btn-text">Yes</span>
            </button>
            <button onClick={handleNoClick} className="btn-no">
              <span className="btn-text">No</span>
            </button>
          </div>
        </div>
      )}
      
      {musicEnabled && !showDialog && (
        <button 
          onClick={toggleMusic} 
          className="music-toggle"
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default MusicPlayer; 
