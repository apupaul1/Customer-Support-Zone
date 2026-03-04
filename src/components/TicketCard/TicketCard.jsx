import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { MdOutlineDateRange } from "react-icons/md";


const TicketCard = ({ ticket, setProgressCount, progressCount, taskName, setTaskName }) => {

    const { id, title, description, customer, priority, status, createdAt } = ticket

    const formattedDate = new Date(createdAt).toLocaleDateString("en-US");

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            toast.error(`You have already added ${title} to be resolved`)
            return;
        }
        toast.success(`Added ${title} to the task status`)
        setIsClicked(true);
        setProgressCount(progressCount + 1)

        const data = { id, title }
        const updatedData = [...taskName,data]
        setTaskName(updatedData)
    };

    return (
        <div
            onClick={handleClick}
            className={`bg-base-100 p-4 rounded-2xl shadow-md ${isClicked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
            <div className='flex justify-between mb-1 items-center'>
                <h1 className='text-lg font-bold'>{title}</h1>
                <button className={"btn rounded-full bg-emerald-200 text-[#0B5E06]"}>
                    <span className='w-3 h-3 rounded-full bg-[#02A53B]'></span>
                    {status}
                    </button>
            </div>

            <div className='mb-3'>
                <p className='text-sm'>{description}</p>
            </div>

            <div className='flex flex-col lg:flex-row justify-between'>

                <div className='flex justify-between gap-6'>
                    <h1 className='text-xs'>#{id}</h1>
                    <p className={`font-semibold text-xs
                        ${priority === 'High' && 'text-red-500'}
                        ${priority === 'Medium' && 'text-[#FEBB0C]'}
                        ${priority === 'Low' && 'text-[#02A53B]'}`}>
                        {priority} Priority</p>
                </div>

                <div className='flex  justify-between gap-4'>
                    <h1 className='text-xs mt-2 lg:mt-0'>{customer}</h1>
                    <p className='flex items-center gap-2 text-xs mt-2 lg:mt-0'><MdOutlineDateRange size={20}/>{formattedDate}</p>
                </div>

            </div>
        </div>
    );
};

export default TicketCard;