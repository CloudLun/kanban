import React from "react";

import Check from "../assets/icon-check.svg"

interface CheckboxProps {
    name: string;
}

const Checkbox = ({ name }: CheckboxProps) => {
    return <div className={`flex gap-[16px] py-[12px] w-[350px] h-[40px] bg-grey-light hover:bg-purple-hover hover:bg-opacity-[25%] rounded-[4px]`}>
        <div className="relative z-5">
            <input id="checkbox" type="checkbox" className="appearance-none ml-[12px] w-[16px] h-[16px] border-[1.5px] bg-white focus:bg-purple-main border-grey-medium focus:border-purple-main border-opacity-[25%] focus:border-opacity-[100%] rounded-[2px] accent-black " />
            <img src={Check} alt="" className="absolute top-[6px] left-[13.5px] w-[12px] z-2" />
        </div>

        <label htmlFor="checkbox" className="text-sm text-black" >{name}</label>

    </div>
}

export default Checkbox