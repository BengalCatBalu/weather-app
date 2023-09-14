import React from 'react'
import './index.css'
import { weatherIcons } from '../../../../weatherIcons'

export const Day = ({day, main, temperature}) => {
  const iconClass = weatherIcons[main ? main.toLowerCase() : ""];
  return (
    <div className='small_column'>
        <h1 className='title_sm'>{day}</h1>
        <i className={'wi ' + iconClass} style={{fontSize: '1.5rem', marginTop: '-0.5rem'}}></i>
        <h1 className='title_sm' >{parseFloat((temperature - 273.15).toFixed(1))}</h1>
    </div>
  )
}
