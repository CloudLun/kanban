import React, { useState } from "react";

import board from "../../assets/icon-board.svg"
import boardSelect from "../../assets/icon-board-select.svg"

interface SidebarItemProps {
    name: string
    index: number
    selected: boolean[]
    setSelectedHandler(): void
}

const SidebarItem = ({ name, index, selected, setSelectedHandler }: SidebarItemProps) => {
    return <div id={`${index}`} className="relative" onClick={setSelectedHandler}>
        <div className="relative flex items-center gap-[12px] py-[16px] cursor-pointer z-50">
            <img src={selected[index] ? boardSelect : board} alt="" />
            <p className={`font-bold text-[15px] ${selected[index] ? "text-white" : "text-grey-medium"} `}>{name}</p>
        </div>
        {
            selected[index] &&
            <div className="absolute top-0 left-[-32px] w-[240px] h-full bg-purple-main rounded-r-[100px] z-40"></div>
        }

    </div>
}

export default SidebarItem