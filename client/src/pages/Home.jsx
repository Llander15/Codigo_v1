import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AudioContext } from "../context/AudioContext"; // ✅ Make sure the path is correct
import "./Home.css";
import logo from "../Components/Assets/logo.png";

export default function Home() {
  const { audioRef } = useContext(AudioContext); // ✅ Use Context

  return (
    <div className="menu-container">
      <img src={logo} alt="CODIGO Logo" className="game-logo" />

      <div className="menu-buttons">
        <NavLink to="/selection" className="menu-button">Play</NavLink>
        <NavLink to="/settings" className="menu-button">Settings</NavLink>
        <NavLink to="/quit" className="menu-button">Quit</NavLink>
      </div>

      <div className="menu-top-right">
        <NavLink to="/profile" className="menu-link">Profile & Cards</NavLink>
        <NavLink to="/leaderBoards" className="menu-link">Leader Boards</NavLink>
        <NavLink to="/login" className="menu-link">Sign In</NavLink>
      </div>
    </div>
  );
}
