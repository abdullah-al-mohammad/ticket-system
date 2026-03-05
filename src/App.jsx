import { Suspense, useState } from 'react';
import './App.css';
import Progress from './components/Banner/Progress/Progress';
import Resolved from './components/Banner/Resolved/Resolved';

import { toast, ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import TicketCards from './components/TicketCards/TicketCards';

const fetchTicketCard = async () => {
  const res = await fetch('/data.json');
  return res.json();
};
const fetchTicketCards = fetchTicketCard();

function App() {
  const [ticketCards, setTicketCards] = useState([]);
  const [resolvedCards, setResolvedCards] = useState([]);
  const notify = () => toast(`${ticketCards.length + 1} task in progress!`);
  const notifyResolved = () => toast(`${resolvedCards.length + 1} task resolved!`);
  const handleAddTask = p => {
    // console.log('complete data', p);
    setTicketCards([...ticketCards, p]);
    notify();
  };
  const handleCompleteTask = p => {
    setResolvedCards([...resolvedCards, p]);
    const remainingTasks = ticketCards.filter(ticket => ticket.id !== p.id);

    setTicketCards(remainingTasks);
    notifyResolved();
  };
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <Navbar></Navbar>
        <div className="md:flex justify-center items-center gap-5 mt-10">
          <Progress ticketCards={ticketCards}></Progress>
          <Resolved resolvedCards={resolvedCards}></Resolved>
        </div>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <TicketCards
            fetchTicketCards={fetchTicketCards}
            handleAddTask={handleAddTask}
            ticketCards={ticketCards}
            handleCompleteTask={handleCompleteTask}
            resolvedCards={resolvedCards}
          ></TicketCards>
        </Suspense>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
