import React, { useEffect, useContext, useState } from "react";

import Sidebar from "../sidebar/Sidebar";
import Column from "./Column";
import AddNewColumn from "./AddNewColumn"
import AddNewTask from "./AddNewTask"
import EditBoard from "./EditBoard"
import DeleteBoard from "./DeleteBoard";

import { DarkThemeContext } from "../../Context/ThemeContext";

interface BoardProps {
    boardSelect: boolean;
    deleteBoard: boolean;
    editBoard: boolean;
    addNewTask: boolean;
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
}

const Board = ({ boardSelect, addNewTask, editBoard, deleteBoard, mobile, tablet, desktop }: BoardProps) => {
    const { darkTheme, setDarkTheme } = useContext(DarkThemeContext)
    const [boards, setBoards] = useState<{ "name": string, "columns": [] }>({ "name": "", "columns": [] })

    const url = './data.json'
    const getData = () => {
        fetch(url).then(response => response.json())
            .then(data => setBoards(data[0]))
            .catch(err => console.log(err, "err"))
    }
    useEffect(() => {
        getData()
    }, [])

    const setDarkThemeHandler = () => {
        setDarkTheme(!darkTheme)
    }
    // boardSelect && 
    // pt-[18px]pl-[24px]pl-[24px]pl-[16px]
    return <div className={`relative w-[100vw] overflow-hidden ${desktop ? " h-[calc(100vh_-_96px)]" : tablet ? " h-[calc(100vh_-_80px)]" : "  h-[calc(100vh_-_64px)]"}  ${darkTheme ? "bg-grey-veryDark" : "bg-grey-light"} z-120`}>

        <Sidebar setDarkThemeHandler={setDarkThemeHandler} darkTheme={darkTheme} mobile={mobile} tablet={tablet} desktop={desktop} />

        {
            addNewTask && <AddNewTask darkTheme={darkTheme} mobile={mobile} tablet={tablet} desktop={desktop} />
        }
        <div className={`${desktop ? "pt-[24px] pl-[324px]" : "pt-[25px] pl-[25px]"} flex gap-[24px] h-full`}>
            <Column darkTheme={darkTheme} data={boards['columns']} mobile={mobile} tablet={tablet} desktop={desktop} />
            {
                desktop && <AddNewColumn darkTheme={darkTheme} />
            }
        </div>
        {
            deleteBoard && <DeleteBoard darkTheme={darkTheme} mobile={mobile} tablet={tablet} desktop={desktop} />
        }

        {
            editBoard && <EditBoard darkTheme={darkTheme} mobile={mobile} tablet={tablet} desktop={desktop} />
        }

    </div>
}

export default Board