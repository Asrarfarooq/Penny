import React, { useState, useEffect } from "react";
import { fetchLatestRates } from "../utils/api";

export default function RateAlert() {
  const [alerts, setAlerts] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [targetRate, setTargetRate] = useState("");
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetchLatestRates().then(setRates);
    const interval = setInterval(() => {
      fetchLatestRates().then((newRates) => {
        setRates(newRates);
        checkAlerts(newRates);
      });
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const addAlert = () => {
    if (fromCurrency && toCurrency && targetRate) {
      setAlerts([
        ...alerts,
        { fromCurrency, toCurrency, targetRate: parseFloat(targetRate) },
      ]);
      setTargetRate("");
    }
  };

  const checkAlerts = (currentRates) => {
    alerts.forEach((alert) => {
      const currentRate =
        currentRates[alert.toCurrency] / currentRates[alert.fromCurrency];
      if (currentRate >= alert.targetRate) {
        // In a real app, you'd send a notification here
        console.log(
          `Alert: ${alert.fromCurrency}/${alert.toCurrency} has reached ${currentRate}`
        );
      }
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-bold mb-4">Rate Alerts</h2>
      <div className="flex items-center mb-4">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="w-1/3 p-2 bg-gray-200 dark:bg-gray-700 rounded-l-lg"
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="w-1/3 p-2 bg-gray-200 dark:bg-gray-700"
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={targetRate}
          onChange={(e) => setTargetRate(e.target.value)}
          placeholder="Target rate"
          className="w-1/3 p-2 bg-gray-200 dark:bg-gray-700 rounded-r-lg"
        />
      </div>
      <button
        onClick={addAlert}
        className="bg-blue-500 text-white p-2 rounded-lg w-full mb-4"
      >
        Add Alert
      </button>
      <div>
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-2"
          >
            Alert: {alert.fromCurrency}/{alert.toCurrency} reaches{" "}
            {alert.targetRate}
          </div>
        ))}
      </div>
    </div>
  );
}
