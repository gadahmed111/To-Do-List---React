import { useState, useCallback } from 'react';
import TheAllInfoProfileOfSideBar from './SideBarElement/ProfileInfoSideBar/TheAllProfileInfo';
import TheTasksPart from './SideBarElement/TasksSideBar/TheUlListWithThereElements';

const initialTasks = [
    { TheLiTitle: "Personal", TheClass: "C1" },
    { TheLiTitle: "Freelance", TheClass: "C2" },
    { TheLiTitle: "Work", TheClass: "C3" },
];

export default function TheSideBarBarnt() {
    const [tasks, setTasks] = useState(initialTasks);
    const [filterValue, setFilterValue] = useState("");
    const [colorPickerValue, setColorPickerValue] = useState("");

    const handleAddTask = useCallback(() => {
        if(filterValue == ""){
            alert("You must Add Any Thing")           
        }else{
            setTasks(Oldv => [
                ...Oldv,
                { TheLiTitle: filterValue, TheClass: colorPickerValue }
            ]);

        }
    }, [filterValue, colorPickerValue]);

    const handleFilterChange = useCallback((e) => {
        setFilterValue(e.target.value);
    }, []);

    const handleColorChange = useCallback((e) => {
        setColorPickerValue(e.target.value);
    }, []);

    return (
        <div className="TheSideBarBarnt">
            <div className="CintraingTheElement">
                <TheAllInfoProfileOfSideBar title="if you are a man" username="El osta abdo" />
                <hr />
                <div className="TheCi">
                    <TheTasksPart SrcOfICon="./image's/calendar (1).svg" titleOfUl="Today tasks">
                        {tasks.map((task) => (
                            <li key={task.TheLiTitle} className={task.TheClass}>
                                <p className="TheTitleOfli">{task.TheLiTitle}</p>
                            </li>
                        ))}
                        <li data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="C4">
                            <p className="TheTitleOfli graytion">Add filter <b className='TheDots'>....</b></p>
                        </li>
                    </TheTasksPart>
                    <TheTasksPart SrcOfICon="./image's/clock.svg" titleOfUl="Schedule tasks" />
                    <TheTasksPart SrcOfICon="./image's/SettingsIcon.svg" titleOfUl="Settings" />
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add filter</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <input className="form-control" type="text" placeholder="filter" aria-label="default input example" onChange={handleFilterChange} />
                                <select onChange={handleColorChange} className="TheSelect form-select form-select-sm" aria-label="Small select example">
                                    <option selected >Color of ball</option>
                                    <option className='F df' value="C3" style={{ backgroundColor: "#f9c708" }}><b className='TheColor'>Yellow</b></option>
                                    <option className='s df' value="C1" style={{ backgroundColor: "#fd98af" }}><b className='TheColor'>Pink</b></option>
                                    <option className='th df' value="C2" style={{ backgroundColor: "#3fd4f4" }}><b className='TheColor'>Baby blue</b></option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleAddTask}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    