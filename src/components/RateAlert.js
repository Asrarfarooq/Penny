import React, { useState } from "react";

const RateAlert = ({ rates }) => {
  const [alertCurrency, setAlertCurrency] = useState("EUR");
  const [alertRate, setAlertRate] = useState("");
  const [alerts, setAlerts] = useState([]);

  const addAlert = () => {
    if (alertRate) {
      setAlerts([
        ...alerts,
        { currency: alertCurrency, rate: parseFloat(alertRate) },
      ]);
      setAlertRate("");
    }
  };

  return (
    <div className="bg-gray-800 dark:bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-bold mb-4">Rate Alerts</h2>
      <div className="flex items-center mb-4">
        <select
          value={alertCurrency}
          onChange={(e) => setAlertCurrency(e.target.value)}
          className="p-2 bg-gray-700 dark:bg-gray-200 rounded mr-2"
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={alertRate}
          onChange={(e) => setAlertRate(e.target.value)}
          placeholder="Target Rate"
          className="p-2 bg-gray-700 dark:bg-gray-200 rounded mr-2"
        />
        <button
          onClick={addAlert}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Set Alert
        </button>
      </div>
      <ul>
        {alerts.map((alert, index) => (
          <li
            key={index}
            className="bg-gray-700 dark:bg-gray-200 p-2 rounded mb-2"
          >
            Alert: 1 USD = {alert.rate} {alert.currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RateAlert;
