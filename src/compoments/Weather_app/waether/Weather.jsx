import React, { useEffect } from "react";
import Search from "../Search/Search";
import { useState } from "react";
import "./style.css"

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=179ed7ac20689738b329f9cf0f360ee1`
      );
      const data = await response.json();
      console.log(data, "data");
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch() {
    setLoading(true);
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("Dhaka");
  }, []);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name},<span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div>
            <span>{getCurrentDate()}</span>
          </div>
          <div>{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="waeather-info"></div>
          <div>
            <div>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
