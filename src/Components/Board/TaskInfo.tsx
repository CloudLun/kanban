import React, { useState } from "react";


import Dropdown from "../../Elements/Dropdown";
import Checkbox from "../../Elements/Checkbox";

import ellipsis from "../../assets/icon-vertical-ellipsis.svg"


interface PricingModelProps {
    darkTheme: boolean;
    title: string
    description: string;
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
    data: {
        "title": string
        "isCompleted": boolean
    }[]
}


const TaskInfo = ({ darkTheme, title, description, data, mobile, tablet, desktop }: PricingModelProps) => {
    const [checked, setChecked] = useState<boolean[]>([false, false, false])

    const checkHandler = (index: number) => {
        const newChecked = checked.map((c, i) => {
            return i === index ? !c : c
        })
        setChecked(newChecked)
    }

    return <div className={`absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[24px] px-[24px] py-[30px] ${desktop ? 'w-[480px]' : tablet ? 'w-[calc(100vw-288px)]' : 'w-[calc(100vw-32px)]'} ${darkTheme ? "bg-grey-dark" : "bg-white"}  bg-opacity-[100%] rounded-[4px] z-50`}>
        <div className="flex items-center justify-between gap-[42px]">
            <div className={`font-bold text-lg ${darkTheme ? "text-white" : "text-black"}`}>{title}</div>
            <img src={ellipsis} alt="" className="" />
        </div>
        {
            description !== "" && <div className="text-sm text-grey-medium">
                {description}
            </div>
        }

        {/* <div className="flex flex-col gap-[8px]">
            <div className={`flex flex-col gap-[8px] mb-[12px] font-bold text-sm ${darkTheme ? "text-white" : "text-grey-medium"} `}>Subtasks</div>
            {
                data.map((d, i) => {

                    return <Checkbox key={i} darkTheme={darkTheme} subtask={d.title} index={i} checked={checked} checkHandler={checkHandler} />
                })
            }

        </div> */}
        <div className="flex flex-col gap-[8px]">
            <div className={`font-bold text-sm ${darkTheme ? "text-white" : "text-grey-medium"} `}>Current Status</div>
            <Dropdown darkTheme={darkTheme} />
        </div>
    </div>
}

export default TaskInfo