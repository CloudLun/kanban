import React, { useState, useContext } from "react";

import Button from "../Elements/Button";

import { DarkThemeContext } from "../Context/ThemeContext";

import logoMobile from "../assets/logo-mobile.svg"
import logoDark from "../assets/logo-dark.svg"
import logoLight from "../assets/logo-light.svg"
import chevronDown from "../assets/icon-chevron-down.svg"
import chevronUp from "../assets/icon-chevron-up.svg"
import ellipsis from "../assets/icon-vertical-ellipsis.svg"

interface NavProps {
    boardSelect: boolean;
    editBoardCard:boolean
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
    boardSelectsShownHandler(): void;
    addNewTaskHandler(): void
    editBoardCardHandler():void
    editBoardHandler(): void
    deletBoardHandler(): void
}

const Nav = ({ boardSelect, editBoardCard, editBoardCardHandler, boardSelectsShownHandler, addNewTaskHandler, editBoardHandler, deletBoardHandler, desktop, tablet, mobile }: NavProps) => {

    const logo: string = tablet ? logoDark : logoMobile;
    const { darkTheme, setDarkTheme } = useContext(DarkThemeContext)
    // const [editBoardCard, setEditBoardCard] = useState<boolean>(false)

    // const SetEditBoardShownHandler = () => {
    //     setEditBoardCard(!editBoardCard)
    // }

    return <div className={`relative flex justify-between items-center  w-[100vw] ${desktop ? "h-[96px] px-[34px] py-[33px]" : tablet ? "h-[80px] px-[26px] py-[33px]" : "h-[64px] px-[16px] py-[20px]"}  ${darkTheme ? "bg-grey-dark" : "bg-white"}`}>
        <div className="flex items-center">
            <div className={`flex items-center ${desktop ? "w-[266px] h-[96px] " : tablet ? "w-[234px] h-[80px]" : "pr-0 h-[64px] border-r-0"}`}>
                {
                    mobile ? <img src={logo} alt="" /> : <img src={darkTheme ? logoLight : logoDark} alt="" />
                }
            </div>
            <h1 className={`mr-[10px] ${tablet ? "ml-[25px]" : "ml-[16px]"} font-bold ${desktop ? "text-xl" : "text-lg"} ${darkTheme ? "text-white" : "text-black"} `}>Platform Launch</h1>
            {
                mobile &&
                <img src={boardSelect ? chevronUp : chevronDown} alt="" className="w-[15px] h-[9px] cursor-pointer" onClick={boardSelectsShownHandler} />
            }
        </div>
        <div className="relative flex items-center gap-[16px]">
            {
                mobile ?
                    <Button words={false} size="large" color="white" backgroundColor="purple" cta={null} clickHandler={addNewTaskHandler} />
                    : <Button words={true} size="large" color="white" backgroundColor="purple" cta='+ Add New Task' clickHandler={addNewTaskHandler} />
            }
            <img src={ellipsis} alt="" className="cursor-pointer" onClick={editBoardCardHandler} />
            {
                editBoardCard && <div className={`absolute top-[70px] flex flex-col gap-[16px] px-[16px] py-[20px]  w-[192px] h-[94px] ${darkTheme ? "bg-grey-veryDark" : "bg-white"} rounded-[6px] z-50`}>
                    <div className="text-sm text-grey-medium cursor-pointer" onClick={editBoardHandler}>Edit Board</div>
                    <div className="text-sm text-red-main cursor-pointer" onClick={deletBoardHandler}>Delete Board</div>
                </div>
            }

        </div>

    </div>
}

export default Nav