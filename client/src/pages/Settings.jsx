import React, { useContext } from "react";
import { AudioContext } from "../context/AudioContext"; 
import { useNavigate } from "react-router-dom"; 
import "./Settings.css"; 

export default function Settings() {
  const { volume, setVolume } = useContext(AudioContext);
  const navigate = useNavigate(); 

  return (
    <div className="settings-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>

      <h1>Settings</h1>

      <div className="volume-control">
        <label htmlFor="volume">Volume: {Math.round(volume * 100)}%</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}
