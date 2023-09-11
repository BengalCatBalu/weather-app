import React from 'react'
import "./index.css"
import { weatherIcons } from '../../../../weatherIcons';

export const OneHour = ({hourData}) => {
  // Извлечение данных из hourData
  const time = new Date(hourData?.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const temperature = parseFloat((hourData?.main?.temp - 273.15).toFixed(1));
  const windSpeed = hourData?.wind?.speed;
  const main = weatherIcons[hourData?.weather[0]?.main.toLowerCase()];
  const windDeg = hourData?.wind?.deg;

  return (
    <div className='hour'>
        <h1>
           {time} 
        </h1>
        <i class={"wi " + main} style={{ fontSize: "2.5rem" }}></i>
        <h1>
            {temperature}°C
        </h1>
        <h1 className='windSpeed'>
            {windSpeed} km/h
        </h1>
    </div>
  )
}

