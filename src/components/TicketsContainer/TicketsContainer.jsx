import React, { use, useEffect } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const TicketsContainer = ({ ticketsPromise, setProgressCount, progressCount, taskName, setTaskName, allTask, setAllTask }) => {

    const allTickets = use(ticketsPromise)

    const tickets = allTickets.tickets

    useEffect(() => {
        setAllTask(tickets);
    }, [tickets, setAllTask]);

    return (
        <div className='flex-2'>
            <h1 className='font-bold'>Customer Tickets</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 mt-6'>
                {
                    allTask.length == 0 && <p className='text-center'>All Tickets Resolved</p>
                }
                {allTask.map(ticket => <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    setProgressCount={setProgressCount}
                    progressCount={progressCount}
                    taskName={taskName}
                    setTaskName={setTaskName}
                >
                </TicketCard>)}
            </div>
        </div>
    );
};

export default TicketsContainer;