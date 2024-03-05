import react, { useState } from "react";
import "./App.css";
import WeatherDataFetcher from "./Components/WeatherDataFetcher";

const App = () => {
  const [city, setCity] = useState("");
  const [buttonClick, setButtonClick] = useState(false);

  const handleClick = (e) => {
    setButtonClick(true);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
    setButtonClick(false);
  };

  return (
    <div className="Content">
      <h1 className="Header">WEATHER DASHBOARD</h1>
      <h2 className="SubHeader">Your Weather Web App Companion</h2>
      <div className="dataInput">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name..."
          className="textBox"
        />
        <button onClick={handleClick} className="SearchButton">
          🔍
        </button>
      </div>
      {buttonClick && <WeatherDataFetcher city={String(city)} />}
    </div>
  );
};

export default App;
