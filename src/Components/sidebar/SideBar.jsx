/* eslint-disable react/jsx-key */
import TheAllInfoProfileOfSideBar from './SideBarElement/ProfileInfoSideBar/TheAllProfileInfo'
import TheTasksPart from './SideBarElement/TasksSideBar/TheUlListWithThereElements'
// eslint-disable-next-line no-unused-vars
let TheLiItemsInfo = [
    {
        TheLiTitle: "Personal",
        TheClass: "C1",
    },
    {
        TheLiTitle: "Freelance",
        TheClass: "C2",
    },
    {
        TheLiTitle: "work",
        TheClass: "C3",
    }
]
export default function TheSideBarBarnt() {
    // eslint-disable-next-line no-unused-vars
    let theMapList = TheLiItemsInfo.map((ele) => {
        return (
            <li className={ele.TheClass}><p className="TheTitleOfli">{ele.TheLiTitle}</p></li>
        )
    })
    return (
        <div className="TheSideBarBarnt">
            <div className="CintraingTheElement">
                <TheAllInfoProfileOfSideBar title="if you are a man" username="El osta abdo"/>
            <hr />
                <div className="TheCi">

                <TheTasksPart SrcOfICon="./image's/calendar (1).svg" titleOfUl="Today tasks" >
                
                    {
                        theMapList
                    }
                    <li className="C4"><p className="TheTitleOfli graytion">Add filter  <b className='TheDots'>....</b></p>
                        
                    </li>
                    
                </TheTasksPart>
                <TheTasksPart SrcOfICon="./image's/clock.svg" titleOfUl="Schedule  tasks" >
                </TheTasksPart>
                <TheTasksPart SrcOfICon="./image's/SettingsIcon.svg" titleOfUl="Settings" >
                </TheTasksPart>
                </div>
            </div>
        </div>
        
        

    )
}