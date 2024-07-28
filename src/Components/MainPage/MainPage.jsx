import TheHeader from './MainPageElement/TheHeader/TheTxtOfHeader';
import TheMainInput from './MainPageElement/TheMainInput/TheMainInput'
export default function TheMainPage(){
    return(
        <div className="TheMainPageParnt">
            <div className="TheMainPage">
                <TheHeader motiTitle="Today Main focus" discr="Design team meeting"></TheHeader>
                <TheMainInput></TheMainInput>
            </div>
        </div>
    )
}