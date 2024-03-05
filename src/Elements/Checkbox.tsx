import React, { useState } from "react";

import Check from "../assets/icon-check.svg"

interface CheckboxProps {
    darkTheme: boolean
    subtask:string
    index:number
    checked:boolean[]
    checkHandler(index:number):void
}


const Checkbox = ({ darkTheme, subtask, index, checked, checkHandler }: CheckboxProps) => {
    return <>
        <div className={`flex items-center gap-[16px] py-[16px] w-full  bg-grey-light ${darkTheme ? "bg-grey-veryDark" : "bg-grey-light"} hover:bg-purple-hover hover:bg-opacity-[25%] rounded-[4px]`}>
                <input id={`checkbox-${index}`} type="checkbox" className={`relative ml-[12px] w-[16px] h-[16px] border-[1.5px]  focus:bg-purple-main border-grey-medium focus:border-purple-main border-opacity-[25%] focus:border-opacity-[100%] rounded-[2px] accent-black z-5`} checked={checked[index]} onClick={() => checkHandler(index)} />
                {/* <img src={Check} alt="" className="absolute top-[6px] left-[13.5px] w-[12px] z-2" /> */}
            <label htmlFor={`checkbox-${index}`} className={`font-bold text-sm ${checked[index] ? "text-grey-medium line-through decoration-1" : darkTheme ? "text-white" : "text-black"}`} >{subtask}</label>
        </div>
        {/* <div className={`flex gap-[16px] py-[12px] w-full  bg-grey-light ${darkTheme ? "bg-grey-veryDark" : "bg-white"} hover:bg-purple-hover hover:bg-opacity-[25%] rounded-[4px]`}>
            <div className="relative z-5">
                <input id="checkbox-1" type="checkbox" className={`relative ml-[12px] w-[16px] h-[16px] border-[1.5px]  focus:bg-purple-main border-grey-medium focus:border-purple-main border-opacity-[25%] focus:border-opacity-[100%] rounded-[2px] accent-black z-5`} checked={checked[1]} onClick={() => checkHandler(1)} />
                <img src={Check} alt="" className="absolute top-[6px] left-[13.5px] w-[12px] z-2" />
            </div>
            <label htmlFor="checkbox-1" className={`font-bold text-sm ${checked[1] ? "text-grey-medium line-through decoration-1" : darkTheme ? "text-white" : "text-black"}`} >Outline a business model that works for our solution</label>
        </div>
        <div className={`flex gap-[16px] py-[12px] w-full  bg-grey-light ${darkTheme ? "bg-grey-veryDark" : "bg-white"} hover:bg-purple-hover hover:bg-opacity-[25%] rounded-[4px]`}>
            <div className="relative z-5">
                <input id="checkbox-2" type="checkbox" className={`relative ml-[12px] w-[16px] h-[16px] border-[1.5px]  focus:bg-purple-main border-grey-medium focus:border-purple-main border-opacity-[25%] focus:border-opacity-[100%] rounded-[2px] accent-black z-5`} checked={checked[2]} onClick={() => checkHandler(2)} />
                <img src={Check} alt="" className="absolute top-[6px] left-[13.5px] w-[12px] z-2" />
            </div>
            <label htmlFor="checkbox-2" className={`font-bold text-sm ${checked[2] ? "text-grey-medium line-through decoration-1" : darkTheme ? "text-white" : "text-black"}`} >Talk to potential customers about our proposed solution and ask for fair price expectancy</label>
        </div> */}

    </>
}

export default Checkbox