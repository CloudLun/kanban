import React, { useState, useContext } from "react";

import Button from "../Elements/Button";

import { DarkThemeContext } from "../Context/ThemeContext";
import { useMediaQuery } from "usehooks-ts";

import { boardActions } from "../App";

import logoisMobile from "../assets/logo-mobile.svg"
import logoDark from "../assets/logo-dark.svg"
import logoLight from "../assets/logo-light.svg"
import chevronDown from "../assets/icon-chevron-down.svg"
import chevronUp from "../assets/icon-chevron-up.svg"
import ellipsis from "../assets/icon-vertical-ellipsis.svg"

interface NavProps {
    boardSelect: boolean;
    editBoardCard: boolean
    boardsClickHandler: (type: boardActions) => void

}

const Nav = ({ boardSelect, editBoardCard, boardsClickHandler }: NavProps) => {
    const isDesktop = useMediaQuery('(min-width:1024px)')
    const isTablet = useMediaQuery('(min-width:768px)')
    const isMobile = useMediaQuery('(max-width:767px)')

    const logo: string = isTablet ? logoDark : logoisMobile;
    const { darkTheme } = useContext(DarkThemeContext)
    // const [editBoardCard, setEditBoardCard] = useState<boolean>(false)

    // const SetEditBoardShownHandler = () => {
    //     setEditBoardCard(!editBoardCard)
    // }

    return <div className={`relative flex justify-between items-center  w-[100vw] ${isDesktop ? "h-[96px] px-[34px] py-[33px]" : isTablet ? "h-[80px] px-[26px] py-[33px]" : "h-[64px] px-[16px] py-[20px]"}  ${darkTheme ? "bg-grey-dark" : "bg-white"}`}>
        <div className="flex items-center">
            <div className={`flex items-center ${isDesktop ? "w-[266px] h-[96px] " : isTablet ? "w-[234px] h-[80px]" : "pr-0 h-[64px] border-r-0"}`}>
                {
                    isMobile ? <img src={logo} alt="" /> : <img src={darkTheme ? logoLight : logoDark} alt="" />
                }
            </div>
            <h1 className={`mr-[10px] ${isTablet ? "ml-[25px]" : "ml-[16px]"} font-bold ${isDesktop ? "text-xl" : "text-lg"} ${darkTheme ? "text-white" : "text-black"} `}>Platform Launch</h1>
            {
                isMobile &&
                <img src={boardSelect ? chevronUp : chevronDown} alt="" className="w-[15px] h-[9px] cursor-pointer" onClick={() => boardsClickHandler('board_select')} />
            }
        </div>
        <div className="relative flex items-center gap-[16px]">
            {
                isMobile ?
                    <Button words={false} size="large" color="white" backgroundColor="purple" cta={null} clickHandler={() => boardsClickHandler('board_select')} />
                    : <Button words={true} size="large" color="white" backgroundColor="purple" cta='+ Add New Task' clickHandler={() => boardsClickHandler("add_new_task")} />
            }
            <img src={ellipsis} alt="" className="cursor-pointer" onClick={() => boardsClickHandler("edit_board_card")} />
            {
                editBoardCard && <div className={`absolute top-[70px] flex flex-col gap-[16px] px-[16px] py-[20px]  w-[192px] h-[94px] ${darkTheme ? "bg-grey-veryDark" : "bg-white"} rounded-[6px] z-50`}>
                    <div className="text-sm text-grey-medium cursor-pointer" onClick={() => boardsClickHandler("edit_board")}>Edit Board</div>
                    <div className="text-sm text-red-main cursor-pointer" onClick={() => boardsClickHandler("delete_board")}>Delete Board</div>
                </div>
            }

        </div>

    </div>
}

export default Nav