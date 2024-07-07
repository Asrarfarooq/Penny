import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HistoricalChart = ({ data }) => {
  return (
    <div className="bg-gray-800 dark:bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-bold mb-4">Historical Rates</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="rate" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoricalChart;
