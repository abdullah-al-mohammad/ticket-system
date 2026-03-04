import { use } from 'react';
import TicketCard from '../../TicketCard/TicketCard';

const TicketCards = ({ fetchTicketCards, handleCompleteTask }) => {
  const data = use(fetchTicketCards);

  return (
    <div className="mt-8">
      <h1 className="font-semibold text-2xl mb-5">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 col-span-3">
          {data.map(ticket => (
            <TicketCard ticket={ticket} handleCompleteTask={handleCompleteTask}></TicketCard>
          ))}
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-semibold">Task Status</h1>
          <p>Select a ticket to add to Task Status</p>
          <h1 className="text-2xl font-semibold">Resolved Task</h1>
          <p>No resolved tasks yet.</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCards;
