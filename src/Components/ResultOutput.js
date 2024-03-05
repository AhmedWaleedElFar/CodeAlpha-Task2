import React from "react"; // Use functional component for simplicity
import "./ResultOutput.css";

const ResultOutput = ({ error, loading, data }) => {
  // Conditional rendering based on data availability
  if (error) {
    return (
      <div className="errorPar">
        <p>There was an error retrieving data.</p>
      </div>
    );
  } else if (loading) {
    return (
      <div className="loadingPar">
        <p>Loading data...</p>
      </div>
    );
  } else if (!data) {
    // Handle the case where data is not provided or empty
    return (
      <div className="noData">
        <p>No data available.</p>
      </div>
    );
  } else {
    const cityName = data.city?.name;
    if (!cityName || cityName.trim() === "") {
      return (
        <div className="errorPar">
          <p>
            <b>Please enter a valid city name...</b>
          </p>
        </div>
      );
    }
    let weatherItem = data.list[0];
    const weather = weatherItem.weather[0];
    const mainTemp = weather.main;
    const descTemp = weather.description;
    const temp = weatherItem.main.temp;
    const humidity = weatherItem.main.humidity;
    const windSpeed = weatherItem.wind.speed;

    // Access city name and country from the "city" object within "weatherItem"
    weatherItem = data.city;
    const dispCity = weatherItem.name;
    const country = weatherItem.country;

    // Render data as needed
    return (
      <div className="outputDiv">
        <div className="content">
          <div className="countryData">
            <h2>
              🏙 {dispCity} - {country}
            </h2>
          </div>
          <div className="weather">
            <h4>
              {mainTemp} - {descTemp}
            </h4>
          </div>
          <div className="physics">
            <p className="temperature">
              <b>Temperature 🌡</b>
              <p>{temp}</p>
              <b>°C</b>
            </p>
            <p className="humidity">
              <b>Humidity 💧</b>
              <p>{humidity}</p>
              <b>%</b>
            </p>
            <p className="WindSpeed">
              <b>Wind Speed 💨</b> <p>{windSpeed}</p> <b>KM/h</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default ResultOutput;
