import React from 'react';
import "./index.css";
import { weatherIcons } from '../../../../weatherIcons';

export const OneDay = ({ dayData }) => {
  
  const main = weatherIcons[dayData?.weather[0]?.main.toLowerCase()];
  const temperature = parseFloat((dayData?.main.temp - 273.15).toFixed(1));
  const date = new Date(dayData.dt * 1000);
  const options = { day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className='info'>
        <i class={"wi " + main}></i>
        <h1 className='temp'>
            {temperature}°C
        </h1>
        <h1 className='data'>
            {formattedDate}
        </h1>
    </div>
  );
};

