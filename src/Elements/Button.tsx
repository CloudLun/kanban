import React, { useState } from "react";

import add from "../assets/icon-add-task-mobile.svg"

interface ButtonProps {
    words: boolean | 'full';
    size: 'large' | 'small';
    color: "purple" | 'white';
    backgroundColor: "lightGrey" | 'purple' | 'white' | "red";
    cta: string | null;
    clickHandler(): void;
}

const Button = ({ words, size, color, backgroundColor, cta, clickHandler }: ButtonProps) => {

    return <div className={`flex justify-center items-center gap-[4px] py-[10px] ${words === 'full' ? "w-full" : words ? "w-[164px]" : "w-[48px]"}  ${backgroundColor === "purple" ? 'bg-purple-main' : backgroundColor === 'white' ? 'bg-white' : backgroundColor === "lightGrey" ? "bg-grey-light" : "bg-red-main"} rounded-[24px] cursor-pointer`} onClick={clickHandler}>
        {
            words ? <h2 className={`${size === 'large' ? 'text-md' : "text-sm"} ${color === 'white' ? 'text-white' : "text-purple-main"}`}>{cta}</h2> : <img src={add} alt="" />
        }

    </div>
}

export default Button