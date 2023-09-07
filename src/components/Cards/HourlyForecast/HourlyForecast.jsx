import React from 'react'
import "./index.css"
import { OneHour } from './OneHour/OneHour'

export const HourlyForecast = () => {
  return (
    <div className='hourly_card'>
        <h1 className='title'>
            Hourly Forecast
        </h1>
        <div className='information'>
            <OneHour/>
            <OneHour/>
            <OneHour/>
            <OneHour/>
            <OneHour/>
        </div>

    </div>
  )
}
