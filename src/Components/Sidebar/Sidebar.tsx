import React, { useState, useEffect } from "react";

import SidebarItem from "./SidebarItem";

import board from "../../assets/icon-board.svg"
import boardAdd from "../../assets/icon-board-add.svg"
import boardSelect from "../../assets/icon-board-select.svg"

import iconLight from "../../assets/icon-light-theme.svg"
import iconDark from "../../assets/icon-dark-theme.svg"

import hideSidebar from "../../assets/icon-hide-sidebar.svg"
import showSidebar from "../../assets/icon-show-sidebar.svg"

import { useMediaQuery } from "usehooks-ts";

interface SidebarProps {
    setDarkThemeHandler(): void;
    darkTheme: boolean;
}

const Sidebar = ({ setDarkThemeHandler, darkTheme }: SidebarProps) => {
    const isDesktop = useMediaQuery('(min-width:1024px)')
    const isTablet = useMediaQuery('(min-width:768px)')

    const [sidebar, setSidebar] = useState<boolean>(true)
    const [boards, setBoards] = useState<string[]>([
        "Platform Launch",
        "Marketing Plan",
        "Roadmap"
    ])
    let newBoards: string[] = localStorage.getItem('boards') === null ? boards : JSON.parse(localStorage.getItem('boards') || "")

    const [selected, setSelected] = useState<boolean[]>(boards.map(() => false))


    useEffect(() => {
        localStorage.setItem('boards', JSON.stringify(boards))

    }, [boards])

    const hideSidebarHandler = () => {
        setSidebar(!sidebar)
    }

    const addItemHandler = () => {
        let newItems: string[] = [...boards]
        newItems.push('successful')
        setBoards(newItems)
    }

    const setSelectedHandler = (index: number) => {
        let updatedSelected = selected.map((s, i) => i === index ? !s : s === true ? !s : s)
        setSelected(updatedSelected)
    }


    return <><div className={`absolute ${sidebar ? "translate-x-[0%]" : "translate-x-[-100%] "} duration-200 ${isDesktop ? "flex flex-col justify-between px-[32px] pt-[18px] pb-[45px] w-[300px] h-full" : isTablet ? "flex flex-col justify-between px-[24px] pt-[18px] pb-[45px] w-[260px] h-full" : "absolute top-[16px] left-[15%] px-[24px] py-[18px] w-[70%] rounded-[8px] "}  ${darkTheme ? "bg-grey-dark" : "bg-white"} `}>
        <div>
            <div className="font-bold text-sm text-grey-medium tracking-[2.4px]">
                ALL BOARDS (3)
            </div>
            <div className="my-[24px]">
                {
                    newBoards &&
                    newBoards.map((newboard: string, i: number) => {
                        return <SidebarItem key={i} name={newboard} index={i} selected={selected} setSelectedHandler={() => setSelectedHandler(i)} />
                    })
                }
                <div className="flex items-center gap-[12px] py-[16px]">
                    <img src={boardAdd} alt="" />
                    <p className="font-bold text-md text-purple-main">+Create New Board</p>
                </div>
            </div>
        </div>
        <div>
            <div className={`flex justify-center items-center gap-[24px] ${isDesktop ? "mb-[50px]" : "mb-[65px]"} w-full h-[48px] ${darkTheme ? "bg-grey-veryDark" : "bg-grey-light"}  rounded-[6px]`}>
                <img src={iconLight} alt="" className="w-[18px] h-[18px]" />
                <div className={`flex ${darkTheme ? "justify-end" : "justify-start"} items-center  px-[3px] w-[40px] h-[20px] bg-purple-main rounded-[12px] cursor-pointer`} onClick={setDarkThemeHandler}>
                    <div className="w-[14px] h-[14px] bg-white rounded-full"></div>
                </div>
                <img src={iconDark} alt="" className="w-[18px] h-[18px]" />
            </div>
        </div>
    </div>
        {
            isTablet &&
            <div className={`absolute bottom-[50px] ${isDesktop ? "pl-[32px]" : "pl-[24px]"} flex items-center gap-[14px] ${sidebar ? "" : "bottom-[36px] px-[0] pl-[10px] w-[56px] h-[48px] bg-purple-main hover:bg-purple-hover rounded-r-[100px]"}  cursor-pointer`} onClick={hideSidebarHandler}>
                <img src={sidebar ? hideSidebar : showSidebar} alt="" className={`${sidebar ? "w-[18px] h-[16px]" : "w-[16px] h-[12.22px]"}`} />
                {
                    sidebar && <p className="font-bold text-[15px] text-grey-medium">Hide Sidebar</p>
                }

            </div>
        }
    </>
}

export default Sidebar
