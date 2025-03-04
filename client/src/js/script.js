import { difficulty } from "./difficulty";
import {skills} from "./skills";
import {ssn} from "../pages/Game"

export let diff=difficulty[0];
export function setDiff(num){
    diff=difficulty[num];
}
//3 random cards
export let skill1;
export let skill2;
export let skill3;

export let setInitialSkill = () =>{
    skill1 = skills[Math.floor(Math.random() * skills.length)];
    skill2 = skills[Math.floor(Math.random() * skills.length)];
    skill3 = skills[Math.floor(Math.random() * skills.length)];
    if(skill2===skill1){
        skill2={};
        skill2 = skills[Math.floor(Math.random() * skills.length)];
        setInitialSkill();
    }
    if(skill3===skill1||skill3===skill2){
        skill3={};
        skill3 = skills[Math.floor(Math.random() * skills.length)];
        setInitialSkill();
    }
    console.log('skills have chamged');
}
//change skill after coding correctly
export function changeSkill1(){
    skill1 = skills[Math.floor(Math.random() * skills.length)];
    if(skill1===skill2){
        skill1 = skills[Math.floor(Math.random() * skills.length)];
        changeSkill1();
    }
    else if(skill1===skill3){
        skill1 = skills[Math.floor(Math.random() * skills.length)];
        changeSkill1();
    }
    else if(skill1.name===ssn){
        skill1 = skills[Math.floor(Math.random() * skills.length)];
        changeSkill1();
    }
}
export function changeSkill2(){
    skill2 = skills[Math.floor(Math.random() * skills.length)];
    if(skill2===skill1){
        skill2 = skills[Math.floor(Math.random() * skills.length)];
        changeSkill2();
    }
    else if(skill2===skill3){
        skill2 = skills[Math.floor(Math.random() * skills.length)];
        changeSkill2();
    }
    else if(skill2.name===ssn){
        skill2 = skills[Math.floor(Math.random() * skills.length)];
        changeSkill2();
    }
}
export function changeSkill3(){
    skill3 = skills[Math.floor(Math.random() * skills.length)];
    if(skill3===skill1){
        skill3 = skills[Math.floor(Math.random() * skills.length)];
        changeSkill3();
    }
    else if(skill3===skill2){
        skill3 = skills[Math.floor(Math.random() * skills.length)];
        changeSkill3();
    }
    else if(skill3.name===ssn){
        skill3 = skills[Math.floor(Math.random() * skills.length)];
        changeSkill3();
    }
}
setInitialSkill();