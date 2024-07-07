"use client";

import React, { useState, useEffect } from "react";
import { fetchHistoricalData } from "../../utils/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HistoricalPage() {
  const [historicalData, setHistoricalData] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");

  useEffect(() => {
    fetchHistoricalData(baseCurrency, targetCurrency).then(setHistoricalData);
  }, [baseCurrency, targetCurrency]);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <Link href="/" className="flex items-center text-blue-500 mb-4">
        <ArrowLeft size={24} className="mr-2" />
        Back to Converter
      </Link>

      <h1 className="text-2xl font-bold mb-4">Historical Rates</h1>

      <div className="flex justify-between mb-4">
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
          className="p-2 bg-gray-800 rounded"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
        <select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
          className="p-2 bg-gray-800 rounded"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
      </div>

      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={historicalData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="rate" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
