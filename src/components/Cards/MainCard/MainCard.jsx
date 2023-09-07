import React from "react";
import "./index.css";
import { GithubOutlined } from "@ant-design/icons";

export const MainCard = ({
  temperature,
  feelslike,
  sunrise,
  sunset,
  main,
  humidity,
  windSpeed,
  pressure,
  uv,
}) => {
  return (
    <div className="main_card">
      <div className="first_column">
        <h1 className="main_weather">{temperature}°C</h1>
        <h1 className="additional_weather">Feels like {feelslike}°C</h1>
        <div className="row_gap">
          <i class="wi wi-sunrise" style={{ fontSize: "2.5rem" }}>
            {" "}
          </i>
          <h1 className="time_sign">{sunrise}</h1>
        </div>
        <div className="row_gap">
          <i class="wi wi-sunset" style={{ fontSize: "2.5rem" }}>
            {" "}
          </i>
          <h1 className="time_sign">{sunset}</h1>
        </div>
      </div>
      <div className="second_column">
        <i
          className={"wi wi-day-" + (main ? main.toLowerCase() : "")}
          style={{ fontSize: "9rem" }}
        ></i>

        <h1 className="weather_sign">{main}</h1>
      </div>
      <div className="third_column">
        <div className="row">
          <div className="cell">
            <i class="wi wi-umbrella" style={{ fontSize: "3rem" }}></i>
            <h1 className="additional_info">{humidity}%</h1>
            <h1 className="sign">Humidity</h1>
          </div>
          <div className="cell">
            <i class="wi wi-strong-wind" style={{ fontSize: "3rem" }}></i>
            <h1 className="additional_info">{windSpeed}km/H</h1>
            <h1 className="sign">Wind Speed</h1>
          </div>
        </div>
        <div className="row">
          <div className="cell">
            <i class="wi wi-refresh" style={{ fontSize: "3rem" }}></i>
            <h1 className="additional_info">{pressure}hPa</h1>
            <h1 className="sign">Pressure</h1>
          </div>
          <div className="cell">
            <i class="wi wi-day-sunny" style={{ fontSize: "3rem" }}></i>
            <h1 className="additional_info">{uv}</h1>
            <h1 className="sign">UV</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
