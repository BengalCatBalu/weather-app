import React from "react";
import { TimeCard } from "../Cards/TimeCard/TimeCard";
import { MainCard } from "../Cards/MainCard/MainCard";
import { LastDaysCard } from "../Cards/LastDaysCard/LastDaysCard";
import { HourlyForecast } from "../Cards/HourlyForecast/HourlyForecast";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BigCard from "../Cards/BigCard/BigCard";
import FourIconsCard from "../Cards/FourIconsCard/FourIconsCard";
import { SmallCard } from "../Cards/SmallCard/SmallCard";
import GraphicCard from "../Cards/GraphicCard/GraphicCard";

export const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  let { city } = useParams();
  city = city.charAt(0).toUpperCase() + city.slice(1);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(weather_url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log("Weather data:", data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });

    fetch(forecast_url)
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data);
        console.log("Forecast data:", data);
      })
      .catch((error) => {
        console.error("Error fetching forecast data:", error);
      });
  }, []);

  const sunrise = new Date(
    weatherData?.sys.sunrise * 1000
  ).toLocaleTimeString();
  const sunset = new Date(weatherData?.sys.sunset * 1000).toLocaleTimeString();

  return (
    <section className={"content"}>
      <BigCard
        city={weatherData?.name}
        timeZoneOffset={weatherData?.timezone}
        temperature={parseFloat((weatherData?.main.temp - 273.15).toFixed(1))}
        main={weatherData?.weather[0].main}
      />
      <div className={"first_row"}>
        <div className="column">
          <FourIconsCard humidity={weatherData?.main.humidity} wind = {weatherData?.wind.speed} sunset = {sunset} sunrise = {sunrise} />
          <SmallCard feelsLike = {weatherData?.main.feels_like} pressure = {weatherData?.main.pressure} />
        </div>
        <GraphicCard forecastData = {forecastData}/>
      </div>
    </section>
  );
};
