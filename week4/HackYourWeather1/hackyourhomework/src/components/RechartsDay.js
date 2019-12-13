import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

const currentDate = e => {
  const day = dd - e;
  return `${day}/${mm}/${yyyy}`;
};

function RechartsDay(props) {
  const temp = props.data.main.temp - 273;
  const dataHourly = [
    {
      name: currentDate(4),
      uv: temp - 5.2,
    },

    {
      name: currentDate(3),
      uv: temp + 1.2,
    },

    {
      name: currentDate(2),
      uv: temp + 2,
    },

    {
      name: currentDate(1),
      uv: temp - 3.2,
    },

    {
      name: currentDate(0),
      uv: temp,
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
export default RechartsDay;
