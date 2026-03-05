import { use } from 'react';
import TicketCard from '../../TicketCard/TicketCard';

const TicketCards = ({
  fetchTicketCards,
  handleAddTask,
  ticketCards,
  handleCompleteTask,
  resolvedCards,
}) => {
  const data = use(fetchTicketCards);

  return (
    <div className="mt-8">
      <h1 className="font-semibold text-2xl mb-5">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 col-span-3">
          {data.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} handleAddTask={handleAddTask}></TicketCard>
          ))}
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-semibold mb-2">Task Status</h1>
          {ticketCards.length === 0
            ? 'Select a ticket to add to Task Status'
            : ticketCards.map((ticket, index) => (
                <div key={index} className="mb-5">
                  <p>{ticket.title}</p>
                  <button
                    onClick={() => handleCompleteTask(ticket)}
                    className="btn btn-sm bg-[#02A53B] text-white mt-2"
                  >
                    Complete
                  </button>
                </div>
              ))}
          <h1 className="text-2xl font-semibold mb-2">Resolved Task</h1>
          {resolvedCards.length === 0 ? (
            <p>No resolved tasks yet.</p>
          ) : (
            resolvedCards.map((ticket, index) => (
              <div key={index} className="mb-5">
                <p>{ticket.title}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketCards;
