import { Suspense } from 'react';
import './App.css';
import Progress from './components/Banner/Progress/Progress';
import Resolved from './components/Banner/Resolved/Resolved';

import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import TicketCards from './components/TicketCards/TicketCards';

const fetchTicketCard = async () => {
  const res = await fetch('/data.json');
  return res.json();
};
const fetchTicketCards = fetchTicketCard();

function App() {
  const handleCompleteTask = () => {
    console.log('complete data');
  };
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <Navbar></Navbar>
        <div className="md:flex justify-center items-center gap-5 mt-10">
          <Progress></Progress>
          <Resolved></Resolved>
        </div>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <TicketCards
            fetchTicketCards={fetchTicketCards}
            handleCompleteTask={handleCompleteTask}
          ></TicketCards>
        </Suspense>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
