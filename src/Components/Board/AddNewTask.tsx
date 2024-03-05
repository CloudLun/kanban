import React, { useState } from "react";

import cross from "../../assets/icon-cross.svg"
import Button from "../../Elements/Button";
import Dropdown from "../../Elements/Dropdown";
import Textfield from "../../Elements/Textfield";


interface AddNewTaskProps {
    darkTheme: boolean;
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
}

const clickHandler = () => {

}


const AddNewTask = ({ darkTheme, mobile, tablet, desktop }: AddNewTaskProps) => {
    const [{ subtasks }, setSubtasks] = useState<{
        subtasks: JSX.Element[]
    }>({ subtasks: [] })

    const addSubtasksHandler = () => {
        subtasks.push(<div key={subtasks.length - 1} className="flex justify-between items-center">
            <Textfield placeholder="e.g. Make Coffee" width="w-[92%]" />
            <img src={cross} alt="" className="w-[15px] h-[15px] cursor-pointer" onClick={() => deleteSubtasksHandler(subtasks.length - 1)} />
        </div>)
        setSubtasks({ subtasks: [...subtasks] })
    }

    const deleteSubtasksHandler = (subtaskIndex: number) => {
        const newSubtasks = subtasks.filter((subtask, index) => index != subtaskIndex)
        setSubtasks({ subtasks: [...newSubtasks] })
    }





    return <div className={`absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[24px] px-[24px] py-[30px] ${desktop ? 'w-[480px]' : tablet ? 'w-[calc(100vw-288px)]' : 'w-[calc(100vw-32px)]'} ${darkTheme ? "bg-grey-dark" : "bg-white"}  bg-opacity-[100%] rounded-[4px] z-50`}>
        <div className={`font-bold text-lg ${darkTheme ? "text-white" : "text-black"} `}>Add New Task</div>
        <div>
            <div className={`mb-[8px] font-bold text-sm ${darkTheme ? "text-white" : "text-grey-medium"} `}>Title</div>
            <Textfield placeholder="e.g. Take coffe break" width="w-full" />
        </div>
        <div>
            <div className={`mb-[8px] font-bold text-sm ${darkTheme ? "text-white" : "text-grey-medium"} `}>Description</div>
            <textarea placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little." className="px-[15px] pt-[7px] w-full h-[112px] text-sm break-all bg-grey-dark bg-opacity-[0%] border-[1.5px] border-grey-medium border-opacity-[25%] focus:outline-none  focus:border-purple-main focus:border-opacity-1 rounded-[4px] cursor-pointer"></textarea>
        </div>
        <div className="flex flex-col gap-[8px]">
            <div className={`font-bold text-sm ${darkTheme ? "text-white" : "text-grey-medium"} `}>Subtasks</div>
            {/* <div className="flex flex-col gap-[8px] max-h-[200px] overflow-scroll">
                {subtasks}
            </div> */}
            <div className="flex justify-between items-center">
                <Textfield placeholder="e.g. Drink Coffe & smile" width="w-[92%]" />
                <img src={cross} alt="" className="w-[15px] h-[15px]" />
            </div> 
            <div className="mt-[8px] m-auto w-full">
                <Button words={"full"} size={"small"} color={'purple'} backgroundColor={darkTheme ? 'white' : "lightGrey"} cta={"+ Add New Subtask"} clickHandler={addSubtasksHandler} />
            </div>
        </div>
        <div className="flex flex-col gap-[8px]">
            <div className={`font-bold text-sm ${darkTheme ? "text-white" : "text-grey-medium"} `}>Status</div>
            <Dropdown darkTheme={darkTheme} />
        </div>
        <div className="m-auto w-full">
            <Button words={'full'} size={"small"} color={'white'} backgroundColor={'purple'} cta={"Create Task"} clickHandler={clickHandler} />
        </div>


    </div>
}

export default AddNewTask