/* eslint-disable react/prop-types */
export default function TheTxtOfHeader(props){
    return(
        <div className="TheTxtParntDiv">
            <p className="TheMotiHeaderTitle">{props.motiTitle}</p>
            <p className="TheDic">{props.discr}</p>
        </div>
    )
}