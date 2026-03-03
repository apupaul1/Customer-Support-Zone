import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const TicketsContainer = ({ticketsPromise,setProgressCount,progressCount,taskName,setTaskName}) => {

    const allTickets = use(ticketsPromise)

    const tickets = allTickets.tickets

    return (
        <div className='flex-2'>
            <h1 className='font-bold'>Customer Tickets</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6'>
                {tickets.map(ticket=> <TicketCard 
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