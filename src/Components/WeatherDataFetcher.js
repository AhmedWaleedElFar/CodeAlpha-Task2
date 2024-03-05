import react, { useState, useEffect } from "react";
import ResultOutput from "./ResultOutput";
// The free api key provided by the website
const API_KEY = "b729cfdfeae72146d6852945e898141d";

// OpenWeatherMap base url
const base = "http://api.openweathermap.org/data/2.5/forecast?";

const [dispCity, country, mainTemp, descTemp, temp, humidity, windSpeed] = "";

const WeatherDataFetcher = (city) => {
  // states to determine the status of fetch, storing data and reporting error
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);

  // Reruns everytime the input changes
  useEffect(() => {
    // The main fetcher engine
    const fetchWeatherData = async () => {
      setIsLoading(true);
      setError(null);
      const getReq = `${base}q=${city["city"]}&units=metric&appid=${API_KEY}`;
      try {
        // Waiting to successfully retrieve the weather data
        if (city) {
          const fetchedData = await fetch(getReq);
          const data = await fetchedData.json();
          setWeatherData(data);
        }
      } catch (error) {
        setError(error);
        console.log(isError);
      } finally {
        setIsLoading(false);
      }
    };

    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);
  return (
    <ResultOutput data={weatherData} error={isError} loading={isLoading} />
  );
};

export default WeatherDataFetcher;
