import React from "react";
import "./index.css";
import { OneDay } from "./OneDay/OneDay";

export const LastDaysCard = ({ forecastData }) => {
  const fiveDaysForecast = forecastData?.list.filter((_, index) => index % 8 === 0); // Предполагая, что у вас есть 8 записей на день

  return (
    <div className="lastDays_card">
      <h1 className="title">
          5 Days Forecast
      </h1>
      <div className="days_list">
          {fiveDaysForecast?.map((dayData, index) => (
            <OneDay key={index} dayData={dayData} />
          ))}
      </div>
    </div>
  );
};

