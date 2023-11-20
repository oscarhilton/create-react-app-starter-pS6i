import logo from './logo.svg';
import './App.css';

const ThreeHourTimer = () => {
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now() + 3 * 60 * 60 * 1000); // 3 hours in milliseconds
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (now >= endTime) {
        clearInterval(interval);
        setPercent(100);
      } else {
        const newPercent = ((now - startTime) / (endTime - startTime)) * 100;
        setPercent(newPercent);
      }
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return (
    <div>
      <div>Time Remaining: {((endTime - Date.now()) / 1000 / 60).toFixed(2)} minutes</div>
      <div>Progress: {percent.toFixed(2)}%</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ThreeHourTimer />
    </div>
  );
}

export default App;
