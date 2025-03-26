// import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudioProvider } from "./context/AudioContext"; // ✅ Correct Import
import Home from "./pages/Home";
import Selection from "./pages/Selection";
import Game from "./pages/Game";
import LeaderBoards from "./pages/LeaderBoards";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Score from "./pages/Score";
import Settings from "./pages/Settings";





export default function App(){
    // useEffect(() => {
    //     const getCollection = async () => {
    //       const resLeaderBoard = await fetch("/api/leaderBoard");
    //       const leaderBoard = await resLeaderBoard.json();
          
    //       console.log(leaderBoard);
    //     };

    //     getCollection();
    // }, [])


    return(
        <div>
            <BrowserRouter>
            <AudioProvider>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/selection" element={<Selection />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/leaderBoards" element={<LeaderBoards />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/score" element={<Score />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
                </AudioProvider>
            </BrowserRouter>
        </div>
    );
}