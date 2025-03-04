import { NavLink } from "react-router-dom";
export default function Home(){
    return(
        <div className="container">
            <h1>
                Home
            </h1>
            <NavLink to="./selection">Start</NavLink>
            <br />
            <a href="/leaderBoards">Leader Boards</a>
        </div>
    );

}