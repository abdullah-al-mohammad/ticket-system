const TicketCard = ({ ticket, handleCompleteTask }) => {
  console.log(ticket);

  //   {
  //   "id": 13,
  //   "title": "Two-factor authentication issue",
  //   "description": "Users are not receiving OTP codes for 2FA login.",
  //   "customer": "SafeLogin Inc",
  //   "priority": "High",
  //   "status": "In Progress",
  //   "createdAt": "2026-03-04T10:05:00Z"
  // }

  return (
    <div onClick={handleCompleteTask}>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{ticket.title}</h2>
            <button className="rounded-full btn bg-[#B9F8CF]">{ticket.status}</button>
          </div>
          <p>{ticket.description}</p>
          <div className="card-actions justify-between">
            <div>
              <span className="mr-2">#1001</span>
              <span>{ticket.priority}</span>
            </div>
            <div>
              <span className="mr-2">{ticket.customer}</span>
              <span>{new Date(ticket.createdAt).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
