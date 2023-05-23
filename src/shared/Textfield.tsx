import React, { useState } from "react";


const Textfield = () => {

    const [error, setError] = useState<boolean>(false)


    return <div>
        <input type="text" placeholder="Enter task name" className={`px-[16px] py-[15px] w-[350px] h-[40px] text-sm border-[1px] ${error ? "border-red-main" : "border-grey-medium"} border-opacity-[25%] rounded-[4px]`} />
    </div>
}

export default Textfield