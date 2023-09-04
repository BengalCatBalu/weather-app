import React from "react";
import "./index.css";
import { useState, useEffect } from "react";

export const TimeCard = () => {
  return (
    <div className="time_card">
      <h1 className="city">City</h1>
      <div className="block">
        <h1 className="time">00:00</h1>
        <h1 className="date">Date</h1>
      </div>
    </div>
  );
};
