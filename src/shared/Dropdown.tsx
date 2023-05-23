import React, { useState } from "react";
import chevronDown from "../assets/icon-chevron-down.svg"

const Dropdown = () => {
    const [drop, setDrop] = useState<boolean>(false)

    const dropHandler = () => {
        setDrop(!drop)
    }

    return <div>
        <div className={`flex justify-between items-center mb-[30px] px-[12px] w-[350px] h-[40px] text-sm  border-[1px] border-grey-medium focus:border-l-purple-main border-opacity-[25%] rounded-[4px] cursor-pointer`} onClick={dropHandler}>
            <p>Doing</p>
            <img src={chevronDown} alt="" />
        </div>
        <div className={`${drop ? 'flex' : 'hidden'} flex-col gap-[8px] px-[12px] text-sm text-grey-medium`}>
            <p>Doing</p>
            <p>Todo</p>
            <p>Done</p>
        </div>

    </div>
}

export default Dropdown