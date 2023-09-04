import React from "react";
import { useState, useEffect } from "react";
import "./index.css"
import { ThemeButton } from "./ThemeButton/ThemeButton";
import { Input } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Search } = Input;

export const Navbar = () => {

    const onSearch = (value) => console.log(value);

  return (
    <div className={"navbar"}>
      <ThemeButton/>
      <Search style={{maxWidth: '40%'}} size="large" placeholder="input search text" onSearch={onSearch} enterButton />
      <button className={"github"}><GithubOutlined/> GitHub</button>
    </div>
  );
};
