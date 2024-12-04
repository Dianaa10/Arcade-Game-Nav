import React, { useEffect, useRef } from 'react';
import "./Audio.wav";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current; // Store the ref value in a local variable

    // Play the music when the component is mounted
    audioElement.play();
    
    // Loop the music
    audioElement.loop = true;

    // Cleanup on unmount
    return () => {
      // Use the local variable for cleanup
     
      audioElement.currentTime = 0;
    };
  }, []); // Empty dependency array to run the effect only once (on mount and unmount)

  return (
    <audio ref={audioRef} src="/Audio.wav" />
  );
};

export default BackgroundMusic;
