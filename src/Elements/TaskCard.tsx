import React from "react";

interface TaskCardProps {
    taskName: string;
    substasksOrder: number;
    substasksTotal: number;
}

const TaskCard = ({taskName, substasksOrder, substasksTotal}: TaskCardProps) => {
    return <div className="flex flex-col justify-center gap-[12px] px-[16px] w-[280px] h-[88px] bg-white rounded-[8px]  drop-shadow-[0px_4px_4px_rgba(54,78,126,0.25)]">
        <p className="font-bold text-md">{taskName}</p>
        <p className="text-grey-medium text-sm">{substasksOrder} of {substasksTotal} substasks</p>
    </div>
}

export default TaskCard