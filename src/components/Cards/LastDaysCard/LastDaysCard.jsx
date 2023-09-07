import React from "react";
import "./index.css";
import { OneDay } from "./OneDay/OneDay";

export const LastDaysCard = () => {
  return (<div className="lastDays_card">
    <h1 className="title">
        5 Days Forecast
    </h1>
    <div className="days_list">
        <OneDay/>
        <OneDay/>
        <OneDay/>
        <OneDay/>
        <OneDay/>
    </div>
  </div>);
};
