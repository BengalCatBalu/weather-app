import React, {useState, useEffect} from 'react'
import './index.css'
import Graphic from './Graphic/Graphic'
import { Divider } from 'antd'
import { Day } from './Day/Day'

const GraphicCard = ({ forecastData }) => {
  const [dailyData, setDailyData] = useState([]);
  const daysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayLabels = { "Monday": "MON", "Tuesday": "TUE", "Wednesday": "WED", "Thursday": "THU", "Friday": "FRI", "Saturday": "SAT", "Sunday": "SUN" };

  useEffect(() => {
    if (forecastData && forecastData.list) {
      const groupedData = {};

      forecastData.list.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

        if (!groupedData[dayOfWeek]) {
          groupedData[dayOfWeek] = [];
        }

        groupedData[dayOfWeek].push(item);
      });

      const processedData = daysOrder.map((day) => {
        if (!groupedData[day]) return null;

        const temps = groupedData[day].map(item => item.main.temp);
        const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;

        const mainWeather = groupedData[day].reduce((acc, curr) => {
          if (!acc[curr.weather[0].main]) {
            acc[curr.weather[0].main] = 0;
          }
          acc[curr.weather[0].main]++;
          return acc;
        }, {});

        const frequentMainWeather = Object.keys(mainWeather).reduce((a, b) => mainWeather[a] > mainWeather[b] ? a : b);

        return {
          day,
          label: dayLabels[day],
          avgTemp,
          main: frequentMainWeather,
        };
      }).filter(Boolean);

      setDailyData(processedData);
    }
  }, [forecastData]);

  return (
    <div className='graphicCard'>
      <h1 className='graphic_title'>
        Temperature  .  Precipitation  .  Wind
      </h1>
      <Graphic forecastData={forecastData} />
      <div className='daysList'>
        {dailyData.map(({ day, label, avgTemp, main }, index) => (
          <>
            <Day key={day} day={label} temperature={avgTemp} main={main} />
            {index < dailyData.length - 1 && <Divider type="vertical" style={{ height: "100%" }} />}
          </>
        ))}
      </div>
    </div>
  );
};

export default GraphicCard;