import React from "react";
import "./charts.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Charts({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDashArray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
