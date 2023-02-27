import { useEffect, useState } from "react";
import "./App.css";
import Chart from "./components/Chart/Chart";
import UserInputs from "./components/UserInputs/UserInputs";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    distance: "",
    modeOfTransport: "bike",
    co2Levels: 0,
  });
  const [chartData, setChartData] = useState([]);
  const [inputFieldError, setInputFieldError] = useState(false);

  const calculateCO2Emissions = () => {
    if (userData.modeOfTransport === "plane") return userData.distance * 255;
    if (userData.modeOfTransport === "bus") return userData.distance * 105;
    if (userData.modeOfTransport === "car") return userData.distance * 16;
    if (userData.modeOfTransport === "motorbike") return userData.distance * 80;
    if (userData.modeOfTransport === "train") return userData.distance * 41;
    if (userData.modeOfTransport === "bike") return userData.distance * 22;
    if (userData.modeOfTransport === "walking") return userData.distance * 19;
    return 0;
  };
  useEffect(() => {
    if (userData.distance && userData.modeOfTransport) {
      setUserData({ ...userData, co2Levels: calculateCO2Emissions() });
    } else {
      setUserData({ ...userData, co2Levels: 0 });
    }
  }, [userData.distance, userData.modeOfTransport]);

  return (
    <div className="App">
      <UserInputs
        userData={userData}
        setUserData={setUserData}
        setChartData={setChartData}
        chartData={chartData}
        inputFieldError={inputFieldError}
        setInputFieldError={setInputFieldError}
      />
      {<Chart chartData={chartData} />}
    </div>
  );
}

export default App;
