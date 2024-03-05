import React, { useState } from "react";

import cross from "../../assets/icon-cross.svg"
import Button from "../../Elements/Button";
import Dropdown from "../../Elements/Dropdown";
import Textfield from "../../Elements/Textfield";

interface EditBoardProps {
    darkTheme: boolean;
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
}

const clickHandler =  () => {

}
const EditBoard = ({ darkTheme, mobile, tablet, desktop }: EditBoardProps) => {

    return <div className={`absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[24px] px-[24px] py-[30px] ${desktop ? 'w-[480px]' : tablet ? 'w-[calc(100vw-288px)]' : 'w-[calc(100vw-32px)]'} ${darkTheme ? "bg-grey-dark" : "bg-white"}  bg-opacity-[100%] rounded-[4px] z-50`}>
        <div className={`font-bold text-lg ${darkTheme ? "text-white" : "text-black"} `}>Edit Board</div>
        <div>
            <div className={`mb-[8px] font-bold text-sm ${darkTheme ? "text-white" : "text-grey-medium"} `}>Board Name</div>
            <Textfield placeholder="e.g. Take coffe break" width="w-full" />
        </div>
        <div className="flex flex-col gap-[8px]">
            <div className={`font-bold text-sm ${darkTheme ? "text-white" : "text-grey-medium"} `}>Subtasks</div>
            <div className="flex justify-between items-center">
                <Textfield placeholder="e.g. Drink Coffe & smile" width="w-[92%]" />
                <img src={cross} alt="" className="w-[15px] h-[15px]" />
            </div> 
            <div className="mt-[8px] m-auto w-full">
                <Button words={"full"} size={"small"} color={'purple'} backgroundColor={darkTheme ? 'white' : "lightGrey"} cta={"+ Add New Column"} clickHandler={clickHandler} />
            </div>
        </div>
        <div className=" m-auto w-full">
            <Button words={'full'} size={"small"} color={'white'} backgroundColor={'purple'} cta={"Save Changes"} clickHandler={clickHandler} />
        </div>
    </div>

}

export default EditBoard