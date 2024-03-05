import React from "react";

interface NewColumnProps {
    darkTheme: boolean
}


const NewColumn = ({ darkTheme }: NewColumnProps) => {
    return <div className={`flex items-center justify-center mt-[45px] w-[280px] h-[814px] ${darkTheme ? "bg-grey-dark" : "bg-[#E9EFFA]"} rounded-[6px] cursor-pointer`}>
        <div className="font-bold text-xl text-grey-medium">+ New Column</div>
    </div>
}

export default NewColumn