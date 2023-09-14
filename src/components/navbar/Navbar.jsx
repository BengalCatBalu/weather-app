import React from "react";
import "./index.css";
import { ThemeButton } from "./ThemeButton/ThemeButton";
import SearchBar from "./SearchBar/SearchBar";
import { Typography } from "antd";

const { Title } = Typography;

const styleObject = {
  fontSize: "2rem",
  color: "#78bedc",
  alignItems: "center",
  margin: 0,
};

export const Navbar = () => {
  return (
    <div className={"navbar"}>
      <div className="small-row">
        <a href="/">
          <i
            class="wi wi-day-sunny"
            style = {styleObject}
          ></i>
        </a>
        <Title level={2} className="signing" style={{color: "#78bedc", margin: 0 }}>
          Weather App
        </Title>
      </div>
      <div className="small-row">
        <SearchBar />
        {/*<ThemeButton />*/}
      </div>
    </div>
  );
};
