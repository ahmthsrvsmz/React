import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const today = new Date();
const hour = today.getHours();
const minute = today.getMinutes();

const currentTime = e => {
  const time = hour - e;
  return `${time}:${minute}`;
};

function RechartsHourly(props) {
  const value = props.data.main.temp - 273;
  const dataHourly = [
    {
      name: currentTime(4),
      uv: value + 1.2,
    },

    {
      name: currentTime(3),
      uv: value - 1.1,
    },

    {
      name: currentTime(2),
      uv: value + 0.5,
    },

    {
      name: currentTime(1),
      uv: value - 1,
    },

    {
      name: currentTime(0),
      uv: value,
    },
  ];
  return (
    <div className="forecast">
      <AreaChart
        width={500}
        height={200}
        data={dataHourly}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
}
export default RechartsHourly;
