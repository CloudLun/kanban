import React, { useState } from "react";
import Tasks from "./Tasks";

interface ColumnProps {
    darkTheme: boolean
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
    data: {
        name: string,
        tasks:
        {
            "title": string,
            "description": string,
            "status": string,
            "subtasks": []
        }[]
    }[]
}


const circleColors: string[] = ["bg-[#49C4E5]", "bg-[#8471F2]", "bg-[#67E2AE]"]


const Column = ({ darkTheme, data, mobile, tablet, desktop }: ColumnProps) => {
    let tasksLength = data.map(c => c.tasks.map(t => t).length)
    let accuTasksLength = [0, tasksLength[0], tasksLength[0] + tasksLength[1]]
    let tasksTotal = tasksLength.reduce((a, c) => a + c, 0)
    let checkedArray = []
    for (let i = 0; i < tasksTotal; i++) checkedArray.push(false)
    console.log(checkedArray)
    const [checked, setChecked] = useState<boolean[]>([...Array()])

    return (<>
        {
            data && data.map((d, i) => {
                return (
                    <div key={i}>
                        <div className="flex items-center gap-[10px] mb-[24px]">
                            <div className={`w-[15px] h-[15px] ${circleColors[i]} rounded-full`}></div>
                            <div className={`font-bold text-sm uppercase  text-grey-medium tracking-[2.4px]`}>{d['name']}({data.length})</div>
                        </div>
                        <Tasks key={i} darkTheme={darkTheme} data={d['tasks']} columns={accuTasksLength[i]} checked={checked} setChecked={setChecked} mobile={mobile} tablet={tablet} desktop={desktop} />

                    </div>

                )
            })
        }</>)
}

export default Column