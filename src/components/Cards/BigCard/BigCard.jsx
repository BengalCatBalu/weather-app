import React, { useEffect, useState } from "react";
import "./index.css";
import { weatherIcons } from "../../../weatherIcons";
import { SyncOutlined } from "@ant-design/icons";

const options = { day: "numeric", month: "long", weekday: "long" };

const BigCard = ({ city, timeZoneOffset, temperature, main }) => {
  const [cityTime, setCityTime] = useState(new Date());
  useEffect(() => {
    const updateCityTime = () => {
      const localTime = new Date();
      const localTimeInMs = localTime.getTime();
      const localOffsetInMs = localTime.getTimezoneOffset() * 60 * 1000;
      const cityTimeInMs =
        localTimeInMs + localOffsetInMs + timeZoneOffset * 1000;
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
  const iconClass = weatherIcons[main ? main.toLowerCase() : ""];
  if (!city || !timeZoneOffset || !temperature || !main) {
    return <div className="big-card"><SyncOutlined spin className="spin" style={{fontSize:'3rem', color: 'white', marginLeft: '45vw', marginTop: '30vh'}}/></div>;
  } else {
    return (
      <div className="big-card">
        <div className="leftpart">
          <i className={"wi " + iconClass} style={{ fontSize: "3.5rem" }}></i>
          <div className="block1">
            <h1 className="temperature">{temperature}°C</h1>
            <h1 className="city">{city}</h1>
          </div>
        </div>
        <div className="right">
          <div className="block2">
            <h1 className="time">{cityTime.toLocaleTimeString()}</h1>
            <h1 className="time">
              {cityTime.toLocaleDateString("en-US", options)}
            </h1>
          </div>
        </div>
      </div>
    );
  }
};

export default BigCard;
