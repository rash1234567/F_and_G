import React,{useState,useEffect} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "January", pv: 2400, amt: 2400 },
  { name: "February", pv: 1398, amt: 2210 },
  { name: "March", pv: 9800, amt: 2290 },
  { name: "April", pv: 3908, amt: 2000 },
  { name: "May", pv: 4800, amt: 2181 },
  { name: "June", pv: 3800, amt: 2500 },
  { name: "July", pv: 4300, amt: 2100 },
  { name: "August", pv: 4300, amt: 2100 },
  { name: "September", pv: 4300, amt: 2100 },
  { name: "October", pv: 4300, amt: 2100 },
  { name: "November", pv: 4300, amt: 2100 },
  { name: "December", pv: 4300, amt: 2100 },
];
const width = 1100

const SimpleBarChart = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(document.getElementById("chart").offsetWidth);
    setHeight(document.getElementById("chart").offsetHeight);
  }, []);

    return (
      <BarChart width={width} height={height} data={data} className="bg-white w-full">
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey='pv' fill='#F5F7F9' className="hover:bg-black hover:text-black" />
        {/* <Bar dataKey='uv' fill='#82ca9d' /> */}
      </BarChart>
    );
};
export default SimpleBarChart;
