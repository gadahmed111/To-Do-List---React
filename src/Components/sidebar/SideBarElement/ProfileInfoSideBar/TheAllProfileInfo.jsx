/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TheProfileImage from './ThePhotoElement';
import TheTitleOfProfile from './TheProFileTitleInfo';
export default function TheProfileInfo(props){
    return(
        <div className='TheProfileInfo'>
            <TheProfileImage src="./image's/ElOsatAbdo.heic"/>
            <TheTitleOfProfile TilteMoti={props.title} TheNameOfUser={props.username}/>

        </div>
    )
}