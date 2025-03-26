import { useState } from "react";
import { difficulty } from "../js/difficulty";
import { setDiff, setInitialSkill } from "../js/script";
import { NavLink } from "react-router-dom";
import './Selection.css';

const autumn = require('../Components/Assets/autumn.png');
const grassland = require('../Components/Assets/grassland.png');
const winter = require('../Components/Assets/winter.png');

export default function Selection() {
    const [bossName, setBossName] = useState(difficulty[0].bossName);
    const [selectedDifficulty, setDifficulty] = useState(difficulty[0].difficultyName);
    const [bossHp, setBossHp] = useState(difficulty[0].enemyHp);

    const selectDifficulty = (index) => {
        setBossName(difficulty[index].bossName);
        setDifficulty(difficulty[index].difficultyName);
        setBossHp(difficulty[index].enemyHp);
        setDiff(index);
        setInitialSkill();
    };

    return (
        <div className="container">
            <div className="selection-head">
                <NavLink to="/home" className="game-btn">Back</NavLink>               
                <h1>Select Level</h1>
            </div>
            
            <div className="selection">
                <div className="difficultyCard" onClick={() => selectDifficulty(0)}>
                    <img src={winter} alt="Winter" width={'200px'} />
                    <h4>Winter</h4>
                </div>

                <div className="difficultyCard" onClick={() => selectDifficulty(1)}>
                    <img src={autumn} alt="Autumn" width={'200px'} />
                    <h4>Autumn</h4>
                </div>

                <div className="difficultyCard" onClick={() => selectDifficulty(2)}>
                    <img src={grassland} alt="Grassland" width={'200px'} />
                    <h4>Grassland</h4>
                </div>
            </div>

            <div className="selection-confirmation-section">
                <div className="selected-difficulty-banner">
                    <h4>Boss: {bossName}</h4>
                    <p>Difficulty: {selectedDifficulty}</p>
                    <p>Boss HP: {bossHp}</p>
                </div>
                <div className="selection-btn">
                    <NavLink to='/game' className={'game-btn'}>Confirm</NavLink>
                </div>
            </div>
        </div>
    );
}