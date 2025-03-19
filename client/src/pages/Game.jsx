import { NavLink } from "react-router-dom";
import { diff, skill1, skill2, skill3, changeSkill1, changeSkill2, changeSkill3 } from "../js/script";
import { useEffect, useState } from "react";


    

const logo = require('../images/CLogo.png');
const logo2 = require('../images/mon22.png');
const logo3 = require('../images/ad.png');
const logo4 = require('../images/vince.png');
const logo5 = require('../images/mon3.png');
export let ssn;//selected skill name
export let score={
    name : "",
    diff : "",
    time : 0
};

export default function Game(){
    
    
    let[ currentHp, setCurrentHp ] = useState(diff.enemyHp);
    const [ message, setMessage ] = useState();//message used in score page
    const [ post, setPost ] = useState(false);//post status for score page

    const [name,setName] = useState();


    let timerInterval;
    //let time =0;
    //let totalTime; //get when player finishes
    let [ timer,setTimer ] = useState(0);
    function start(){//when a card was clicked start the timer
        if(!timerInterval){
            timerInterval = setInterval(()=>{
                timer++;
                setTimer(timer);
            },1000);
        }
    };
    // const pause = () =>{
    //     clearInterval(timerInterval);
    //     timerInterval=null;
    // }

    // }
    //skills
    let skill_1 = skill1;
    let skill_2 = skill2;
    let skill_3 = skill3;
    function setSkills(){
        skill_1 = skill1;
        skill_2 = skill2;
        skill_3 = skill3;
    }
    useEffect(() => {
        setSkills();
        updateSkills();
        console.log(skill1);
        console.log(selectedSkillNumber);
    });

    
    
    //skill cards 1-3
    //name
    const [ skillOneName, setSkillOneName ] = useState();
    const [ skillTwoName, setSkillTwoName ] = useState();
    const [ skillThreeName, setSkillThreeName ] = useState();
    //code
    const [ skillOneCode, setSkillOneCode ] = useState();
    const [ skillTwoCode, setSkillTwoCode ] = useState();
    const [ skillThreeCode, setSkillThreeCode ] = useState();
    //description -remove comment if needed
    // const [ skillOneDescription, setSkillOneDescription ] = useState();
    // const [ skillTwoDescription, setSkillTwoDescription ] = useState();
    // const [ skillThreeDescription, setSkillThreeDescription ] = useState();
    //Damage
    const [ skillOneDmg, setSkillOneDmg ] = useState();
    const [ skillTwoDmg, setSkillTwoDmg ] = useState();
    const [ skillThreeDmg, setSkillThreeDmg ] = useState();


    //Selected skill
    //let selectedSkillNumber;
    const [ selectedSkillNumber, setSelectedSkillNumber ] = useState(0);
    const [ selectedSkillName, setSelectedSkillName ] = useState();
    const [ selectedSkillCode, setSelectedSkillCode ] = useState();
    const [ selectedSkillDescription, setSelectedSkillDescription ] = useState();
    const [ selectedSkillDmg, setSelectedSkillDmg ] = useState(); 
    
    const select = (num) => {
        start();
        selectSkill(num);
      } 
    function selectSkill(num){
        if(!num){}
        else{

            //problem with re-rendering

            switch(num) {
                case 1:
                    setSelectedSkillNumber(1);
                    setSelectedSkillName(skill_1.name);
                    setSelectedSkillCode(skill_1.code);
                    setSelectedSkillDescription(skill_1.description);
                    setSelectedSkillDmg(skill_1.damage);
                  break;
                case 2:
                    setSelectedSkillNumber(2);
                    setSelectedSkillName(skill_2.name);
                    setSelectedSkillCode(skill_2.code);
                    setSelectedSkillDescription(skill_2.description);
                    setSelectedSkillDmg(skill_2.damage);
                  break;
                case 3:
                    setSelectedSkillNumber(3);
                    setSelectedSkillName(skill_3.name);
                    setSelectedSkillCode(skill_3.code);
                    setSelectedSkillDescription(skill_3.description);
                    setSelectedSkillDmg(skill_3.damage);
                  break;
                default:
            } 
            console.log(selectedSkillNumber)
        } 
    }

    function updateSkills(){
        setSkillOneName(skill_1.name);
        setSkillTwoName(skill_2.name);
        setSkillThreeName(skill_3.name);

        setSkillOneCode(skill_1.code);
        setSkillTwoCode(skill_2.code);
        setSkillThreeCode(skill_3.code);

        // setSkillOneDescription(skill1.description);
        // setSkillTwoDescription(skill2.description);
        // setSkillThreeDescription(skill3.description);

        setSkillOneDmg(skill_1.damage);
        setSkillTwoDmg(skill_2.damage);
        setSkillThreeDmg(skill_3.damage);
    }

    //coding
    ssn = selectedSkillName;
    let input=document.getElementById('player-input'); 
    function attack (){
        if(selectedSkillCode===input.value){
            currentHp=currentHp-selectedSkillDmg;
            if(currentHp<1){
                //score.name=;
                score.diff=diff.difficultyName;
                score.time=timer;
            }
            if(selectedSkillNumber===1){
                changeSkill1();
            }
            else if(selectedSkillNumber===2){
                changeSkill2();
            }
            else if(selectedSkillNumber===3){
                changeSkill3();
            }
            else{
                console.log('invalid number')
            }
            // switch(selectedSkillNumber){
            //     case 'one':
            //         changeSkill1();
            //         break;
            //     case 'two':
            //         changeSkill2();
            //         break;
            //     case 'three':
            //         changeSkill3();
            //         break;
            //     default:
            //         console.log('skill number is invalid')
            // }
        }
        else{  
        }
        setSelectedSkillNumber(0);
        setSelectedSkillName();
        setSelectedSkillCode();
        setSelectedSkillDescription();
        setSelectedSkillDmg();
        ssn='';
        setSkills();
        updateSkills();
        console.log('skill updated');
        input.value='';   
        setCurrentHp(currentHp);     
    }
    if (currentHp > 0) {
        return (
            <div className="container">
                <div className="game-section"> {/* display: flex; flex-direction: row; */}
                    <div className="game-visual"> {/* Left side: Battle descriptions and cards */}
                        <div className="game-descriptions">
                            <div className="boss-section">
                                <div className="boss-description"> {/* Boss details */}
                                    <div>
                                        <p>Boss: <span id="boss-name">{diff.bossName}</span></p>
                                        <p>Difficulty: <span id="difficulty">{diff.difficultyName}</span></p>
                                        <p>HP: <span id="current-hp">{currentHp}</span> / {diff.enemyHp}</p>
                                        <p><span id="timer">{timer}s</span></p>
                                    </div>
                                </div>
                                <div className="boss-img">
                                    <img id="boss-img" src={logo2} alt="Boss" />
                                </div>
                            </div>
    
                            <div className="player-section">
                                <div className="player-img">
                                    <img src={logo3} alt="Player" />
                                </div>
                                <div className="player-description">
                                    <p><span className="player-name">Codi</span></p>
                                </div>
                            </div>
                        </div>
    
                        <div className="skill-section">
                            <div className="game-options"> {/* Buttons: Quit, Tips, Run */}
                                <div className="game-options-left">
                                    <NavLink to="/selection">
                                        <p className="game-btn">Back</p>
                                    </NavLink>
                                </div>
                                <div className="game-options-right">
                                    <button className="game-btn" id="game-tips-btn">Tips</button>
                                    <button className="game-btn" id="game-run-btn" onClick={attack}>Run</button>
                                </div>
                            </div>
    
                            <div className="skill-selection">
                                <div className="skill-card" id="skill-card-1" onClick={() => select(1)}>
                                    <img src={logo} alt="Skill 1" />
                                    <p><span id="skill-name-1">{skillOneName}</span></p>
                                    <p>Skill code:<br /> {skillOneCode}</p>
                                    <p>Skill damage:<br /> {skillOneDmg}</p>
                                </div>
    
                                <div className="skill-card" id="skill-card-2" onClick={() => select(2)}>
                                    <img src={logo4} alt="Skill 2" />
                                    <p><span id="skill-name-2">{skillTwoName}</span></p>
                                    <p>Skill code:<br /> {skillTwoCode}</p>
                                    <p>Skill damage:<br /> {skillTwoDmg}</p>
                                </div>
    
                                <div className="skill-card" id="skill-card-3" onClick={() => select(3)}>
                                    <img src={logo5} alt="Skill 3" />
                                    <p><span id="skill-name-3">{skillThreeName}</span></p>
                                    <p>Skill code:<br /> {skillThreeCode}</p>
                                    <p>Skill damage:<br /> {skillThreeDmg}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="code-section"> {/* Right side: Selected code and player input */}
                        <div className="selected-code-description">
                            <p>Selected code: <span id="selected-code-name">{selectedSkillName}</span></p>
                            <p>Code:</p>
                            <p><span id="selected-code-code">{selectedSkillCode}</span></p>
                            <p>Description: <span id="selected-code-description">{selectedSkillDescription}</span></p>
                            <p>Damage: <span>{selectedSkillDmg}</span></p>
                        </div>
    
                        <div className="player-input-section">
                            <input type="text" name="player-input" id="player-input" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
     
    else{//Score or when the player defeated the enemy
        const postScore = async (e) => {
            e.preventDefault();
            if(!post){
                //code to post the score in db
                const res = await fetch("/api/leaderBoard", {
                    method: "POST",
                    body: JSON.stringify({ timer: score.time, stage: score.diff, username: name  }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                console.log(res)
                setMessage('Your score have been posted')
                setPost(true)
            }
            else{
                setMessage('Cannot post score twice!')
            }
        };
        return(
            <div className="container">
                <div className="score-section">
                    <form onSubmit={postScore}>
                        <h4>Difficulty: {score.diff}</h4>
                        <h4>Name:</h4>
                        <input type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <h4>Time: {score.time}</h4>
                        <p>{message}</p>
                        <button type="submit">Post score</button>
                    </form>
                    
                    <NavLink to='/home' className="game-btn">Exit</NavLink>
                </div>
            </div>
        );       
    }
}