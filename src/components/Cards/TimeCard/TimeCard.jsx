import React from "react";
import "./index.css";
import { useState, useEffect } from "react";

export const TimeCard = ({city, timeZoneOffset}) => {
  const [cityTime, setCityTime] = useState(new Date());
  useEffect(() => {
    const updateCityTime = () => {
      const localTime = new Date();
      const localTimeInMs = localTime.getTime();
      const localOffsetInMs = localTime.getTimezoneOffset() * 60 * 1000;
      const cityTimeInMs = localTimeInMs + localOffsetInMs + timeZoneOffset * 1000;
      const cityTime = new Date(cityTimeInMs);
      setCityTime(cityTime);
    };

    // Обновляем время сразу при монтировании компонента
    updateCityTime();

    // Устанавливаем интервал для обновления времени каждую секунду
    const intervalId = setInterval(updateCityTime, 1000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [timeZoneOffset]);
  return (
    <div className="time_card">
      <h1 className="city">{city}</h1>
      <div className="block">
        <h1 className="time">{cityTime.toLocaleTimeString()}</h1>
        <h1 className="date">{cityTime.toLocaleDateString()}</h1>
      </div>
    </div>
  );
};
