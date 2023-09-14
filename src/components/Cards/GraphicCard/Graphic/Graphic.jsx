import React, {useState, useEffect} from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Graphic = ({ forecastData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (forecastData && forecastData.list) {
      const transformedData = forecastData.list.map((item) => {
        return {
          name: new Date(item.dt * 1000).toLocaleDateString("en-US", {day:"2-digit", weekday:"short", hour: "2-digit"}), // Преобразование времени в читаемый формат
          temperature: parseFloat((item.main.temp - 273.15).toFixed(2)), // Используем температуру как значение для графика
        };
      });
      setData(transformedData);
      console.log("transformedData", transformedData);
    }
  }, [forecastData]);
  return (
    <ResponsiveContainer width="90%" height="45%">
      <AreaChart data={data}>
        <XAxis
          dataKey="name"
          fontSize={"0.8rem"}
          color="var(--additional-text-color)"
        />
        <Tooltip />
        <Area type="monotone" dataKey="temperature" stroke="#a1e6ff" fill="#b1edfd" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graphic;

