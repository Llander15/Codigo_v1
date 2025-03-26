import React, { createContext, useState, useRef, useEffect } from "react";
import battleMusic from "../Components/Assets/battle-music.mp3"; // Ensure correct path

export const BattleAudioContext = createContext();

export const BattleAudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio(battleMusic));
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    audio.loop = true;

    audio.play().catch((error) => console.log("Autoplay prevented:", error));

    return () => {
      audio.pause();
    };
  }, [volume]);

  return (
    <BattleAudioContext.Provider value={{ audioRef, volume, setVolume }}>
      {children}
    </BattleAudioContext.Provider>
  );
};
