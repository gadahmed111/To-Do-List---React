/* eslint-disable no-unused-vars */
import { useState } from "react";
import TheToElement from '../TheMainPageToDoListElement/TheToElement';
let TheNameOfColor;
export default function TheMainInput() {
    // State to hold the selected color and input value
    const [colorPath, setColorPath] = useState("./public/image's/The bink Ball.svg");
    const [inputValue, setInputValue] = useState("");
    const [elements, setElements] = useState([]);

    // Handle ball color switch
    function handleBallColorSwitch(e) {
        let TheLink = e.target.src;
        let TheIndexOfFirst20 = TheLink.indexOf("%20");
        let TheHalfTitle = TheLink.slice(TheIndexOfFirst20+3,TheLink.length)
        let TheIndexOfSecond20 = TheHalfTitle.indexOf("%20");
        TheNameOfColor = TheHalfTitle.slice(0,TheIndexOfSecond20)
        switch (TheNameOfColor) {
            case "gray":
                setColorPath("./public/image's/The gray Ball.svg");
                break;
            case "yellow":
                setColorPath("./public/image's/The yellow Ball.svg");
                break;
            case "blue":
                setColorPath("./public/image's/The blue Ball.svg");
                break;
            case "bink":
                setColorPath("./public/image's/The bink Ball.svg");
                break;
            default:
                break;
        }
    }

    // Handle input changes
    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    // Handle key press
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            // Add a new element to the list
            setElements([
                ...elements,
                <TheToElement
                    key={elements.length}
                    TheTime="23.00"
                    TheSRCOFColor={colorPath}
                    titleOfInput={inputValue}
                />
            ]);
            // Clear the input value
            setInputValue("");
        }
    }
    function TheSendImage(){
        setElements([
            ...elements,
            <TheToElement
                key={elements.length}
                TheTime="23.00"
                TheSRCOFColor={colorPath}
                titleOfInput={inputValue}
            />
        ]);
        setInputValue("");

    }
    return (
        <div>
            <div className="TheMainInputBody">
                <div className="ThePartOFIcons">
                    <img
                        onClick={handleBallColorSwitch}
                        className="TheBallSize"
                        src="./public/image's/The bink Ball.svg"
                        alt="Pink Ball"
                    />
                    <img
                        onClick={handleBallColorSwitch}
                        className="TheBallSize"
                        src="./public/image's/The blue Ball.svg"
                        alt="Blue Ball"
                    />
                    <img
                        onClick={handleBallColorSwitch}
                        className="TheBallSize"
                        src="./public/image's/The yellow Ball.svg"
                        alt="Yellow Ball"
                    />
                    <img
                        onClick={handleBallColorSwitch}
                        className="TheBallSize"
                        src="./public/image's/The gray Ball.svg"
                        alt="Gray Ball"
                    />
                </div>
                <div className="TheMainInputElement">
                    <input
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        placeholder="What is your next task?"
                        className="TheMainInput"
                        type="text"
                    />
                </div>
                <div className="TheRowOFTODOLIST">
                    <img className="TheIconOfSend" src="./public/image's/clock.svg" alt="Clock" />
                    <img className="TheIconOfSend" src="./public/image's/calendar (1).svg" alt="Calendar" />
                    <img onClick={TheSendImage} className="TheIconOfSend" src="./public/image's/AddToDoList.svg" alt="Add To Do" />
                </div>
            </div>
            {elements}
        </div>
    );
}
                             

// let TheLink = e.target.src;
// let TheIndexOfFirst20 = TheLink.indexOf("%20");
// let TheHalfTitle = TheLink.slice(TheIndexOfFirst20+3,TheLink.length)
// let TheIndexOfSecond20 = TheHalfTitle.indexOf("%20");
// TheNameOfColor = TheHalfTitle.slice(0,TheIndexOfSecond20)