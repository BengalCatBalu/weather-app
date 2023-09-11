import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import { ThemeButton } from "./ThemeButton/ThemeButton";
import { Input } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import SearchBar from "./SearchBar/SearchBar";

const { Search } = Input;

export const Navbar = () => {

  return (
    <div className={"navbar"}>
      <h1 className="link"> <a href = "/">{window.location.pathname == "/" ? "Weather Dashboard" : "Main Page"}</a></h1>
      <SearchBar />
      <ThemeButton/>
    </div>
  );
};
