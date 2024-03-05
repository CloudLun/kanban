import React, { Dispatch, SetStateAction } from "react";

import TaskInfo from "./TaskInfo";

interface BoardTasksProps {
    darkTheme: boolean
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
    data: {
        "title": string,
        "description": string,
        "status": string,
        "subtasks": []
    }[]
    columns: number;
    checked: boolean[];
    setChecked:Dispatch<SetStateAction<boolean[]>>;
}


const Tasks = ({ darkTheme, data, columns, checked,setChecked, mobile, tablet, desktop }: BoardTasksProps) => {
    const checkHandler = (index: number) => {
        const newChecked = checked.map((c, i) => {
            return i === index ? !c : c === true ? !c : c
        })
        setChecked(newChecked)
    }


    return <div className="flex flex-col gap-[20px]">
        {data && data.map((d, i) => {
            return (
                <div key={i} id={`${columns + i}`} onClick={() => checkHandler(columns + i)}>
                    <div className={`flex flex-col gap-[10px] justify-center pl-[16px] pr-[16px] py-[25px] w-[280px] ${darkTheme ? "bg-grey-dark" : "bg-white"} shadow-[0_4px_6px_rbga(54,78,126,0.5)] rounded-[8px] cursor-pointer`} >
                        <div className={`font-bold text-md ${darkTheme ? "text-white" : " text-black"}`}>{d.title}</div>
                        <div className={`font-bold text-sm  text-grey-medium`}> 0 of 3 substasks</div>
                    </div>
                    {
                        checked[columns + i] && <TaskInfo darkTheme={darkTheme} title={d.title} description={d.description} data={d["subtasks"]} mobile={mobile} tablet={tablet} desktop={desktop} />
                    }
                </div>
            )
        })}
    </div>
}

export default Tasks