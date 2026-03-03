import React, { useState } from 'react';

const CardStatus = ({ taskName, resolved, setResolved }) => {


    return (
        <div className='flex-1'>
            <div>
                <h1 className='font-bold'>Task Status</h1>
                <div className='text-sm text-gray-500 my-3'>
                    {taskName.length == 0 ? 'Select a ticket to add to Task Status' : <div className='flex flex-col gap-3'>
                        {taskName.map(task => <div key={task.id} className='bg-base-100 p-4 shadow-lg rounded-xl'>
                            <h1 className='mb-4'>{task.title}</h1>
                            <button onClick={() => {
                                const updatedResolved = [...resolved, task]
                                setResolved(updatedResolved)
                            }}
                                className='btn w-full btn-success text-base-100'>Complete</button>
                        </div>)}
                    </div>}
                </div>
            </div>

            <div>
                <h1 className='font-bold'>Resolved Task</h1>
                <div className='text-sm text-gray-500 my-3'>
                    {resolved.length == 0 ? 'No Resolved Task Yet.' : <div className='flex flex-col gap-3'>
                        {resolved.map(resolve => <div key={resolve.id} className='bg-base-100 p-4 shadow-lg rounded-xl'>
                            <h1 className='mb-4'>{resolve.title}</h1>
                        </div>)}
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default CardStatus;