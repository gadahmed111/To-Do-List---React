/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable no-unused-vars */
export default function ToTheElement(props) {
    const [checkBoxState, setCheckBoxState] = useState({
        TheSrc: "./public/image's/checkbox-unchecked.svg",
        TheStyle: { textDecoration: "none" }
    });
    let [ThAparanceOfParnt,SetApparncabilty] = useState({display:"none"})

    const handleCheckBoxClick = () => {
        if (checkBoxState.TheSrc === "./public/image's/checkbox-unchecked.svg") {
            setCheckBoxState({
                TheSrc: "./public/image's/checkbox-checked.svg",
                TheStyle: { textDecoration: "line-through" }
            });
        } else {
            setCheckBoxState({
                TheSrc: "./public/image's/checkbox-unchecked.svg",
                TheStyle: { textDecoration: "none" }
            });
        }
    };

    return (
        <div style={ThAparanceOfParnt} className="TheMainInputBody TheMainInputBodyEdit">
            <div className="ThePartOFIcons">
                <img className="TheBallSize" src="./public/image's/The bink Ball.svg" alt="" />
            </div>
            <div className="TheMainInputElement TheMainInputElementEdit">
                <h1 className="TheMainInput TheStyleOfTitl" style={checkBoxState.TheStyle}>This is The Title</h1>
                <h2 className="TheTime">24.00 PM</h2>
            </div>
            <div className="TheRowOFTODOLIST">
                <img 
                    onClick={handleCheckBoxClick} 
                    className="TheIconOfSend" 
                    src={checkBoxState.TheSrc} 
                    alt="" 
                />
                <img onClick={() => {
                    SetApparncabilty({display:"none"})
                    

                }} className="TheIconOfSend" src="./public/image's/trash.svg" alt="" />
                <img className="TheIconOfSend" src="./public/image's/edit.svg" alt="" />
            </div>
        </div>
    );
}
