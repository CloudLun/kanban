import React from "react";

import Button from "../../Elements/Button";

interface DeleteProps {
    darkTheme: boolean;
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
}

const clickHandler = () => {

}

const DeleteBoard = ({ darkTheme, mobile, tablet, desktop }: DeleteProps) => {
    return <div className={`absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[16px] px-[24px] py-[30px] ${desktop ? 'w-[480px]' : tablet ? 'w-[calc(100vw-288px)]' : 'w-[calc(100vw-32px)]'} ${darkTheme ? "bg-grey-dark" : "bg-white"}  bg-opacity-[100%] rounded-[4px] z-50`}>
        <div className={`font-bold text-lg ${darkTheme ? "text-red-main" : "text-red-main"} `}>Delete this board?</div>
        <div className="text-sm text-grey-medium">
            Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.
        </div>
        <div className="flex items-center gap-[16px] mt-[8px] m-auto w-full">
            <Button words={'full'} size={"small"} color={'white'} backgroundColor={'red'} cta={"Delete"} clickHandler={clickHandler} />
            <Button words={'full'} size={"small"} color={'purple'} backgroundColor={"lightGrey"} cta={"Cancel"} clickHandler={clickHandler} />
        </div>
    </div>
}

export default DeleteBoard