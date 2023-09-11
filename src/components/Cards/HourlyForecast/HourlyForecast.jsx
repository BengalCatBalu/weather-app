import React from "react";
import "./index.css";
import { OneHour } from "./OneHour/OneHour";

export const HourlyForecast = ({ forecastData }) => {
  const todayForecast = forecastData?.list?.slice(4, 9) || [];
  console.log("todayForecast", todayForecast);
  return (
    <div className="hourly_card">
      <h1 className="title">Hourly Forecast</h1>
      <div className="information">
        {todayForecast.map((hourData, index) => (
          <OneHour key={index} hourData={hourData} />
        ))}
      </div>
    </div>
  );
};
