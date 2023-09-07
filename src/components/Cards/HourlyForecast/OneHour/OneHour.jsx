import React from 'react'
import "./index.css"
import { GithubOutlined } from '@ant-design/icons'

export const OneHour = () => {
  return (
    <div className='hour'>
        <h1>
           time 
        </h1>
        <GithubOutlined/>
        <h1>
            temperature
        </h1>
        <h1>
            Wind
        </h1>
    </div>
  )
}
