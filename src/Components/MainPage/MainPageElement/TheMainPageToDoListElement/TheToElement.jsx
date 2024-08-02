/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ToTheElement(props) {
    const [checkBoxState, setCheckBoxState] = useState({
        TheSrc: "./public/image's/checkbox-unchecked.svg",
        TheStyle: { textDecoration: "none" }
    });

    const [TheValueOfInput, SetValueToInput] = useState({
        TheTitle: props.titleOfInput,
        TheSRCOFColor: props.TheSRCOFColor
    });

    const [ThAparanceOfParnt, SetApparncabilty] = useState({ display: "grid" });

    const handleCheckBoxClick = () => {
        // Directly check and update state without using prevState
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
                <img className="TheBallSize" src={TheValueOfInput.TheSRCOFColor} alt="" />
            </div>
            <div className="TheMainInputElement TheMainInputElementEdit">
                <h1 className="TheMainInput TheStyleOfTitl" style={checkBoxState.TheStyle}>
                    {TheValueOfInput.TheTitle}
                </h1>
                <h2 className="TheTime">{props.TheTime}</h2>
            </div>
            <div className="TheRowOFTODOLIST">
                <img
                    onClick={handleCheckBoxClick}
                    className="TheIconOfSend"
                    src={checkBoxState.TheSrc}
                    alt=""
                />
                <img
                    
                    className="TheIconOfSend"
                    src="./public/image's/trash.svg"
                    alt=""
                    data-bs-toggle="modal"
                    data-bs-target="#CenterModal"

                />
                <img
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrops"
                    className="TheIconOfSend"
                    src="./public/image's/edit.svg"
                    alt=""
                />
                <div className="modal fade" id="staticBackdrops" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" style={{ color: "black" }} id="staticBackdropLabel">Change Txt</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <input
                                    className="form-control"
                                    type="text"
                                    value={TheValueOfInput.TheTitle}
                                    onChange={(e) => {
                                        SetValueToInput({
                                            ...TheValueOfInput,
                                            TheTitle: e.target.value
                                        });
                                    }}
                                    aria-label="default input example"
                                />
                                <select
                                    className="TheSelect form-select form-select-sm"
                                    aria-label="Small select example"
                                    value={TheValueOfInput.TheSRCOFColor}
                                    onChange={(e) => {
                                        SetValueToInput({
                                            ...TheValueOfInput,
                                            TheSRCOFColor: e.target.value
                                        });
                                    }}
                                >
                                    <option
                                        value="./public/image's/The gray Ball.svg" src="./public/image's/The bink Ball.svg" style={{ backgroundColor: "gray" }}>Color of ball</option>
                                    <option
                                        value="./public/image's/The yellow Ball.svg" src="./public/image's/The bink Ball.svg" style={{ backgroundColor: "#f9c708" }}>Yellow</option>
                                    <option
                                        value="./public/image's/The bink Ball.svg" src="./public/image's/The bink Ball.svg" style={{ backgroundColor: "#fd98af" }}>Pink</option>
                                    <option
                                        value="./public/image's/The blue Ball.svg" style={{ backgroundColor: "#3fd4f4" }}>Baby blue</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="CenterModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 style={{color:"black"}} className="modal-title fs-5" id="exampleModalLabel">
                                Are you sure to delete this item?
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-danger " onClick={() => SetApparncabilty({ display: "none" })} data-bs-dismiss="modal">
                                delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
