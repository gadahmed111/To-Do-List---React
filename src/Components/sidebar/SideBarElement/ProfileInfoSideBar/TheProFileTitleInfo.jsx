/* eslint-disable react/prop-types */
export default function TheTitleOfProfile(props){
    return(
        <div className="TheTitleProfileInfoParnt">
            <h1 className="TheUserNameTitle">{props.TheNameOfUser}</h1>
            <h3 className="MotiTitle">{props.TilteMoti}</h3>
        </div>
    )
}