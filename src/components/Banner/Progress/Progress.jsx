import vector from '../../../assets/vector1.png';

const Progress = ({ ticketCards }) => {
  return (
    <div className="relative w-full max-w-[700px] h-[250px] mx-auto flex items-center justify-center overflow-hidden bg-[#422ad5]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[300px]">
        <img src={vector} alt="" className="w-full" />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[300px] scale-x-[-1]">
        <img src={vector} alt="" className="w-full" />
      </div>

      <div className="relative z-10 text-white text-center px-4">
        <h1 className="font-semibold text-2xl">In-Progress</h1>
        <h3 className="font-semibold text-4xl">
          {ticketCards.length > 0 ? ticketCards.length : 0}
        </h3>
      </div>
    </div>
  );
};

export default Progress;
