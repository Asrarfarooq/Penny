import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Sliders } from "lucide-react";

const timeRanges = [
  { label: "1W", days: 7 },
  { label: "1M", days: 30 },
  { label: "1Y", days: 365 },
  { label: "YTD", days: "ytd" },
  { label: "Custom", days: "custom" },
];

export default function HistoricalChart({ data, fromCurrency, toCurrency }) {
  const [selectedRange, setSelectedRange] = useState("1M");
  const [customDays, setCustomDays] = useState(30);

  const filterData = (days) => {
    if (days === "ytd") {
      const startOfYear = new Date(new Date().getFullYear(), 0, 1);
      return data.filter((item) => new Date(item.date) >= startOfYear);
    } else if (days === "custom") {
      return data.slice(-customDays);
    } else {
      return data.slice(-days);
    }
  };

  const chartData = filterData(
    timeRanges.find((r) => r.label === selectedRange).days
  ).map((d) => ({
    ...d,
    date: new Date(d.date).toISOString().split("T")[0], // Ensure date is formatted correctly
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          Historical Rates: {fromCurrency} to {toCurrency}
        </h2>
        <div className="flex items-center">
          <Sliders className="w-5 h-5 mr-2" />
          {timeRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedRange(range.label)}
              className={`px-2 py-1 rounded ${
                selectedRange === range.label
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
      {selectedRange === "Custom" && (
        <div className="mb-4">
          <label htmlFor="customDays" className="mr-2">
            Custom days:
          </label>
          <input
            type="number"
            id="customDays"
            value={customDays}
            onChange={(e) => setCustomDays(Number(e.target.value))}
            className="w-20 p-1 border rounded"
          />
        </div>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis
            dataKey="date"
            tickFormatter={(date) => new Date(date).toLocaleDateString()}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(date) => new Date(date).toLocaleDateString()}
            formatter={(value) => [
              value.toFixed(4),
              `${fromCurrency}/${toCurrency}`,
            ]}
          />
          <Line type="monotone" dataKey="rate" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
