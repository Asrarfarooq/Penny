"use client";

import React, { useState, useEffect } from "react";
import { fetchLatestRates, fetchHistoricalData } from "../utils/api";
import {
  Settings,
  HelpCircle,
  MoreHorizontal,
  Sun,
  Moon,
  Sliders,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "../components/ThemeProvider";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRange, setSelectedRange] = useState("1M");
  const [customDays, setCustomDays] = useState(30);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    fetchLatestRates().then(setRates);
    fetchHistoricalData(fromCurrency, toCurrency).then(setHistoricalData);
  }, [fromCurrency, toCurrency]);

  const convert = () => {
    if (!rates[fromCurrency] || !rates[toCurrency] || !amount) return;
    const rate = rates[toCurrency] / rates[fromCurrency];
    setResult(amount * rate);
  };

  const clearConversion = () => {
    setAmount("");
    setResult(null);
  };

  const filterData = (days) => {
    if (days === "ytd") {
      const startOfYear = new Date(new Date().getFullYear(), 0, 1);
      return historicalData.filter(
        (item) => new Date(item.date) >= startOfYear
      );
    } else if (days === "custom") {
      return historicalData.slice(-customDays);
    } else {
      return historicalData.slice(-days);
    }
  };

  const chartData = filterData(
    selectedRange === "1W"
      ? 7
      : selectedRange === "1M"
      ? 30
      : selectedRange === "1Y"
      ? 365
      : customDays
  );

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 flex flex-col items-center">
      <header className="w-full max-w-md flex justify-between items-center mb-8">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
            />
          </svg>
          <h1 className="text-2xl font-bold">Penny</h1>
        </div>
        <div className="flex items-center">
          <button onClick={toggleTheme} className="mr-4">
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <Link href="/help" className="mr-4">
            <HelpCircle size={24} />
          </Link>
          <Link href="/features">
            <MoreHorizontal size={24} />
          </Link>
        </div>
      </header>

      <main className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Currency Converter</h2>
          <div className="flex items-center mb-4">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-1/3 p-2 bg-gray-200 dark:bg-gray-700 rounded-l-lg border-r border-gray-300 dark:border-gray-600"
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-1/3 p-2 bg-gray-200 dark:bg-gray-700 text-center"
            />
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-1/3 p-2 bg-gray-200 dark:bg-gray-700 rounded-r-lg border-l border-gray-300 dark:border-gray-600"
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={convert}
            className="bg-blue-500 text-white p-2 rounded-lg w-full mb-2"
          >
            Convert
          </button>
          <button
            onClick={clearConversion}
            className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white p-2 rounded-lg w-full"
          >
            Clear
          </button>
          {result && (
            <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-bold">Conversion Result</h3>
              <p className="text-2xl mt-2">
                {amount} {fromCurrency} = {result.toFixed(4)} {toCurrency}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                1 {fromCurrency} ={" "}
                {(rates[toCurrency] / rates[fromCurrency]).toFixed(4)}{" "}
                {toCurrency}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Updated {new Date().toLocaleString()}
              </p>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Historical Rates</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center"
            >
              <Sliders className="w-5 h-5 mr-2" />
              Filter
            </button>
          </div>
          {showFilters && (
            <div className="mb-4 flex items-center">
              <button
                onClick={() => setSelectedRange("1W")}
                className={`px-2 py-1 rounded mr-2 ${
                  selectedRange === "1W"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                1W
              </button>
              <button
                onClick={() => setSelectedRange("1M")}
                className={`px-2 py-1 rounded mr-2 ${
                  selectedRange === "1M"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                1M
              </button>
              <button
                onClick={() => setSelectedRange("1Y")}
                className={`px-2 py-1 rounded mr-2 ${
                  selectedRange === "1Y"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                1Y
              </button>
              <button
                onClick={() => setSelectedRange("custom")}
                className={`px-2 py-1 rounded mr-2 ${
                  selectedRange === "custom"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                Custom
              </button>
              {selectedRange === "custom" && (
                <input
                  type="number"
                  value={customDays}
                  onChange={(e) => setCustomDays(Number(e.target.value))}
                  className="w-20 p-1 bg-gray-200 dark:bg-gray-700 rounded"
                />
              )}
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
      </main>
    </div>
  );
}
