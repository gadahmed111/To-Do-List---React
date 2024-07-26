/* eslint-disable react/prop-types */
export default function TheTitleOfProfile(props){
    return(
        <div className="TheTitleProfileInfoParnt">
            <h3 className="MotiTitle">{props.TilteMoti}</h3>
            <h1 className="TheUserNameTitle">{props.TheNameOfUser}</h1>
        </div>
    )
}