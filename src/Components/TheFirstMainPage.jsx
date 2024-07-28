import TheSideBar from './sidebar/SideBar'
import TheMainPage from './MainPage/MainPage'
export default function TheFirstMainPage(){
    return(
        <div className='TheRoot'>
            <TheSideBar/>
            <TheMainPage/>
        </div>
    )
}