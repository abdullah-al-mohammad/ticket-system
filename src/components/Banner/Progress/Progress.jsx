import './progress.css';

const Progress = () => {
  return (
    <div className="progress-bg flex justify-center items-center rounded">
      <div className="progress-bg">
        <div className="bg-right"></div>

        <div className="content">
          <h1 className="font-semibold text-2xl">In-Progress</h1>
          <h3 className="font-semibold text-4xl">0</h3>
        </div>
      </div>
    </div>
  );
};

export default Progress;
