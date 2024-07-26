export default function ThePhotoElement(props){
    return(
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <img className="TheMainImage" src={props.src} alt="" />
        </div>
    )
}