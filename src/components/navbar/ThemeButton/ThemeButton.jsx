import React from 'react'
import { useState, useEffect } from "react";
import { Switch } from 'antd';
import "./index.css"
export const ThemeButton = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div style={{marginTop: "1rem"}}>
      <Switch className="custom-switch" defaultChecked onChange={toggleTheme} />
      <h1 className='small_sign'>
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </h1>
    </div>
    
  )
}
