import React, { useState, useEffect } from "react";
import { fetchLatestRates } from "../utils/api";

export default function MultiCurrencyConverter() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [rates, setRates] = useState({});
  const [selectedCurrencies, setSelectedCurrencies] = useState([
    "EUR",
    "GBP",
    "JPY",
    "CAD",
  ]);

  useEffect(() => {
    fetchLatestRates(baseCurrency).then(setRates);
  }, [baseCurrency]);

  const addCurrency = (currency) => {
    if (!selectedCurrencies.includes(currency)) {
      setSelectedCurrencies([...selectedCurrencies, currency]);
    }
  };

  const removeCurrency = (currency) => {
    setSelectedCurrencies(selectedCurrencies.filter((c) => c !== currency));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-bold mb-4">Multi-Currency Converter</h2>
      <div className="flex items-center mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-1/3 p-2 bg-gray-200 dark:bg-gray-700 rounded-l-lg"
        />
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
          className="w-2/3 p-2 bg-gray-200 dark:bg-gray-700 rounded-r-lg"
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {selectedCurrencies.map((currency) => (
          <div
            key={currency}
            className="bg-gray-100 dark:bg-gray-700 p-2 rounded flex justify-between items-center"
          >
            <span>
              {currency}:{" "}
              {((amount * rates[currency]) / rates[baseCurrency]).toFixed(4)}
            </span>
            <button
              onClick={() => removeCurrency(currency)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <select
        onChange={(e) => addCurrency(e.target.value)}
        className="mt-4 p-2 bg-gray-200 dark:bg-gray-700 rounded w-full"
      >
        <option value="">Add currency...</option>
        {Object.keys(rates)
          .filter((c) => !selectedCurrencies.includes(c))
          .map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
      </select>
    </div>
  );
}
