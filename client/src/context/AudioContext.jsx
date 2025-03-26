import React, { createContext, useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import menuMusic from "../Components/Assets/menu-music.mp3"; // Ensure correct path

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio(menuMusic));
  const [volume, setVolume] = useState(0.5);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    audio.loop = true;

    if (location.pathname === "/game") {
      // Pause if on the Game page
      audio.pause();
    } else {
      // Play otherwise
      audio.play().catch((error) => console.log("Autoplay prevented:", error));
    }

    return () => {
      audio.pause();
    };
  }, [volume, location.pathname]);

  return (
    <AudioContext.Provider value={{ audioRef, volume, setVolume }}>
      {children}
    </AudioContext.Provider>
  );
};
