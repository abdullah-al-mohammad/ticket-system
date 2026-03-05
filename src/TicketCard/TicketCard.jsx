import { FaCalendarAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const TicketCard = ({ ticket, handleAddTask }) => {
  // console.log(ticket);

  //   {
  //   "id": 13,
  //   "title": "Two-factor authentication issue",
  //   "description": "Users are not receiving OTP codes for 2FA login.",
  //   "customer": "SafeLogin Inc",
  //   "priority": "High",
  //   "status": "In Progress",
  //   "createdAt": "2026-03-04T10:05:00Z"
  // }

  const statusClass =
    ticket.status === 'In Progress'
      ? 'bg-[#F8F3B9] text-[#9C7700] '
      : 'text-[#0B5E06] bg-[#B9F8CF]';

  const priorityClass =
    ticket.priority === 'High'
      ? 'text-[#9C0000] '
      : ticket.priority === 'Medium'
        ? 'text-[#9C7700] '
        : 'text-[#0B5E06] ';

  return (
    <div onClick={() => handleAddTask(ticket)}>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{ticket.title}</h2>
            <button className={`rounded-full btn ${statusClass} `}>
              {ticket.status === 'In Progress' ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaCheckCircle />
              )}
              {ticket.status}
            </button>
          </div>
          <p>{ticket.description}</p>
          <div className="card-actions justify-between">
            <div className="flex items-center justify-center">
              <span className="mr-2">#1001</span>
              <span className={`${priorityClass}`}>{ticket.priority}</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">{ticket.customer}</span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="text-gray-400" />
                {new Date(ticket.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
