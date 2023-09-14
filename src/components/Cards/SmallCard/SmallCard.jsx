import React from 'react'
import "./index.css"

export const SmallCard = ({feelsLike, pressure}) => {
  return (
    <div className='smallCard'>
        <div className='leftSmall'>
            <h1 className='small_sign'>Feels Like</h1>
            <h1 className='small_sign'>{parseFloat((feelsLike - 273.15).toFixed(1))}°C</h1>
        </div>
        <div className='rightSmall'>
            <h1 className='smaller_sign'>Pressure</h1>
            <h1 className='smaller_sign'>{pressure}hPa</h1>
        </div>
    </div>
  )
}
