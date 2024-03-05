import React, { useState } from "react";


interface TextfieldProps {
    placeholder: string
    width: string
}


const Textfield = ({ placeholder, width }: TextfieldProps) => {

    const [error, setError] = useState<boolean>(false)


    return <input type="text" placeholder={placeholder} className={`pl-[15px] ${width} h-[40px] text-sm bg-grey-dark bg-opacity-[0%] border-[1px] border-grey-medium border-opacity-[25%] focus:outline-none  focus:border-purple-main focus:border-opacity-1 rounded-[4px] cursor-pointer `} />

}

export default Textfield