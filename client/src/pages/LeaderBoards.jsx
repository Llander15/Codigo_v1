import { useEffect, useState } from "react"; 
import { NavLink } from "react-router-dom";

export default function LeaderBoards(){
    //const[ name,setName ] = useEffect('llander');
    const [ leaderBoard, setLeaderBoard ] = useState([]);
    useEffect(() => {
        const getCollection = async () => {
            const resLeaderBoard = await fetch("/api/leaderBoard");
            const leaderBoard = await resLeaderBoard.json();
            
            setLeaderBoard(leaderBoard);
        };

        getCollection();
    }, [])
    const stage1 = leaderBoard.filter(item => item.stage==="Winter");
    stage1.sort((a,b) => a.timer - b.timer);
    for(let x=0; x<stage1.length ;x++){
        stage1[x].rank = (x+1);
    }

    const stage2 = leaderBoard.filter(item => item.stage==="Autum");
    stage2.sort((a,b) => a.timer - b.timer);
    for(let x=0; x<stage2.length ;x++){
        stage2[x].rank = (x+1);
    }

    const stage3 = leaderBoard.filter(item => item.stage==="Grassland");
    stage3.sort((a,b) => a.timer - b.timer);
    for(let x=0; x<stage3.length ;x++){
        stage3[x].rank = (x+1);
    }

    return(
        <div className="container">
            <div className="leader-board">
                <h2>Leader Boards</h2>
                <div className="leaderboard-section">
                    <div className="leaderboard">
                        <h3>Winter</h3>
                        <div>
                            <table className="leaderboard-table">
                                <thead>
                                <tr className="leaderboard-head">
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Time</th>
                                </tr>
                                </thead>
                                <tbody className="leaderboard-body">
                                    {(stage1.length > 0) && //loop for stage 1 scores
                                    stage1.map((score) => (
                                        <>
                                            <tr>
                                                <td>{score.rank}</td>
                                                <td>{score.username}</td>
                                                <td>{score.timer}s</td>
                                            </tr>
                                            
                                        </>
                                    ))
                                    }
                                </tbody> 
                            </table>
                        </div>

                    </div>

                    <div className="leaderboard">
                        <h3>Autum</h3>
                        <div>
                            <table className="leaderboard-table">
                                <thead>
                                <tr className="leaderboard-head">
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Time</th>
                                </tr>
                                </thead>
                                <tbody className="leaderboard-body">
                                    {(stage2.length > 0) && //loop for stage 2 scores
                                    stage2.map((score) => (
                                        <>
                                            <tr>
                                                <td>{score.rank}</td>
                                                <td>{score.username}</td>
                                                <td>{score.timer}s</td>
                                            </tr>
                                            
                                        </>
                                    ))
                                    }
                                </tbody> 
                            </table>
                        </div>
                    </div>  

                    <div className="leaderboard">
                        <h3>Grassland</h3>
                        <div>
                            <table className="leaderboard-table">
                                <thead>
                                <tr className="leaderboard-head">
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Time</th>
                                </tr>
                                </thead>
                                <tbody className="leaderboard-body">
                                    {(stage3.length > 0) && //loop for stage 3 scores
                                    stage3.map((score) => (
                                        <>
                                            <tr>
                                                <td>{score.rank}</td>
                                                <td>{score.username}</td>
                                                <td>{score.timer}s</td>
                                            </tr>
                                            
                                        </>
                                    ))
                                    }
                                </tbody> 
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
            <NavLink to="/home">Back</NavLink>
        </div>
    );
}