import React, { useState } from "react";
import chevronDown from "../assets/icon-chevron-down.svg"

interface DropdownProps {
    darkTheme: boolean
}

const Dropdown = ({ darkTheme }: DropdownProps) => {
    const [drop, setDrop] = useState<boolean>(false)

    const dropHandler = () => {
        setDrop(!drop)
    }

    return <div className="w-full">
        {/* <div className={`flex justify-between items-center px-[12px] w-full h-[40px] text-sm  border-[1px] border-grey-medium focus:border-l-purple-main border-opacity-[25%] rounded-[4px] cursor-pointer`} onClick={dropHandler}>
            <p className={`${darkTheme ? `text-white` : 'text-black'}`}>Doing</p>
            <img src={chevronDown} alt="" />
        </div>
        <div className={`${drop ? 'flex' : 'hidden'} flex-col gap-[8px] px-[12px] py-[8px] text-sm text-white bg-grey-dark bg-opacity-[90%] rounded-[4px]`}>
            <p>Doing</p>
            <p>Todo</p>
            <p>Done</p>
        </div> */}
        <select name="status" id="status" className={`px-[12px] py-[10px] w-full text-sm ${darkTheme ? "text-white" : "text-black"}  ${darkTheme ? "bg-grey-dark" : "bg-white"} border-[1px] border-grey-medium focus:border-l-purple-main border-opacity-[25%] rounded-[4px] cursor-pointer`}>
            <option value="Doing">Doing</option>
            <option value="Todo">Todo</option>
            <option value="Done">Done</option>
        </select>

    </div>
}

export default Dropdown