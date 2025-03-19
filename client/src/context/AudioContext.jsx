import React, { createContext, useState, useRef, useEffect } from "react";
import menuMusic from "../Components/Assets/menu-music.mp3"; // Ensure correct path

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio(menuMusic));
  const [volume, setVolume] = useState(0.5); // Default volume

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    audio.loop = true;

    // Attempt to play
    audio.play().catch((error) => console.log("Autoplay prevented:", error));

    return () => {
      audio.pause();
    };
  }, [volume]);

  return (
    <AudioContext.Provider value={{ audioRef, volume, setVolume }}>
      {children}
    </AudioContext.Provider>
  );
};
