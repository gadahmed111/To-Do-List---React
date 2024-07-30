/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react"
import TheToElement from '../TheMainPageToDoListElement/TheToElement'
let TheNameOfColor;
export default function TheMainInput(){
    let [TheMainBallColor,SetThBallColor] = useState("gray") 
    function TheBallColorSwitch(e) {
        let TheLink = e.target.src;
        let TheIndexOfFirst20 = TheLink.indexOf("%20");
        let TheHalfTitle = TheLink.slice(TheIndexOfFirst20+3,TheLink.length)
        let TheIndexOfSecond20 = TheHalfTitle.indexOf("%20");
        TheNameOfColor = TheHalfTitle.slice(0,TheIndexOfSecond20)
    }
    
    return(
        <div>

            <div className="TheMainInputBody">
                    <div className="ThePartOFIcons">
                        <img onClick={(e) => TheBallColorSwitch(e)} className="TheBallSize" value="./public/image's/The bink Ball.svg" src="./public/image's/The bink Ball.svg" alt=""/>
                        <img onClick={(e) => TheBallColorSwitch(e)} className="TheBallSize" value="./public/image's/The blue Ball.svg" src="./public/image's/The blue Ball.svg" alt=""/>
                        <img onClick={(e) => TheBallColorSwitch(e)} className="TheBallSize" value="./public/image's/The yellow Ball.svg" src="./public/image's/The yellow Ball.svg" alt=""/>
                        <img onClick={(e) => TheBallColorSwitch(e)} className="TheBallSize" value="./public/image's/The gray Ball.svg" src="./public/image's/The gray Ball.svg" alt=""/>
                    </div>
                    <div className="TheMainInputElement">
                        <input placeholder="What is your next task ?" className="TheMainInput" type="text" />
                    </div>
                    <div className="TheRowOFTODOLIST">
                        <img className="TheIconOfSend" src="./public/image's/clock.svg" alt="" />
                        <img className="TheIconOfSend" src="./public/image's/calendar (1).svg" alt="" />
                        <img className="TheIconOfSend" src="./public/image's/AddToDoList.svg" alt="" />
                    </div>
            </div>
            <TheToElement></TheToElement>
        </div>
        
    )
}                                   
