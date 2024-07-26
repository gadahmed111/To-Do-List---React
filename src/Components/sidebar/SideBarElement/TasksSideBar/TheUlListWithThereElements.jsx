/* eslint-disable react/prop-types */
export default function TheUITitle(props){
    return(
        <div className="TheUiBody">
            <div className="TheTitleWithIcon">
                <div className="Icon">
                    <img className="TheIconOfTheUl" src={props.SrcOfICon} alt="" />
                    {/* <img className="TheIconOfTheUl" src="./image's/calendar (1).svg" alt="" /> */}
                </div>
                <div className="title">
                    <p className="TheTitleofUl">{props.titleOfUl}</p>
                    {/* <p className="TheTitleofUl">Tody tasks</p> */}
                </div>
            </div>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}