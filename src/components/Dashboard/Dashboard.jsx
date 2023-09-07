import React from "react";
import { TimeCard } from "../Cards/TimeCard/TimeCard";
import { MainCard } from "../Cards/MainCard/MainCard";
import { LastDaysCard } from "../Cards/LastDaysCard/LastDaysCard";
import { HourlyForecast } from "../Cards/HourlyForecast/HourlyForecast";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const city = "London";

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
            }
        );
  }, []);



  const sunrise = new Date(
    weatherData?.sys.sunrise * 1000
  ).toLocaleTimeString();
  const sunset = new Date(weatherData?.sys.sunset * 1000).toLocaleTimeString();

  return (
    <section className={"content"}>
      <div className={"first_row"}>
        <TimeCard
          city={weatherData?.name}
          timeZoneOffset={weatherData?.timezone}
        />
        <MainCard
          temperature={parseFloat((weatherData?.main.temp - 273.15).toFixed(1))}
          feelslike={parseFloat(
            (weatherData?.main.feels_like - 273.15).toFixed(1)
          )}
          sunrise={sunrise}
          sunset={sunset}
          main = {weatherData?.weather[0].main}
          humidity={weatherData?.main.humidity}
          windSpeed={weatherData?.wind.speed}
          pressure={weatherData?.main.pressure}
          uv = {weatherData?.visibility}
        />
      </div>
      <div className={"second_row"}>
        <LastDaysCard />
        <HourlyForecast />
      </div>
    </section>
  );
};
