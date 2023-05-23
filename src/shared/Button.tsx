import React, { useState } from "react";


interface ButtonProps {
    size: 'large' | 'small';
    color: "purple" | 'white';
    backgroundColor: 'purple' | 'white' | "red";
    cta: string;
}

const Button = ({ size, color, backgroundColor, cta }: ButtonProps) => {

    return <div className={`flex justify-center items-center w-[255px] ${size === 'large' ? '48px' : '40px'} ${backgroundColor === "purple" ? 'bg-purple-main' : backgroundColor === 'white' ? 'bg-white' : "bg-red-main"} rounded-[24px]`}>
        <h2 className={`my-[10px] ${size === 'large' ? 'text-md' : "text-sm"} ${color === 'white' ? 'text-white' : "text-main"}`}>{cta}</h2>
    </div>
}

export default Button