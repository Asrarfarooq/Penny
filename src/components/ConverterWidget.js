import React, { useState, useEffect } from "react";
import { fetchLatestRates } from "../utils/api";

const ConverterWidget = () => {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchLatestRates().then(setRates);
  }, []);

  const convert = () => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return;
    const rate = rates[toCurrency] / rates[fromCurrency];
    setResult(amount * rate);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm">
      <h2 className="text-lg font-bold mb-2">Currency Converter</h2>
      <div className="flex items-center mb-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-1/2 p-1 bg-gray-700 rounded mr-2"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="w-1/2 p-1 bg-gray-700 rounded"
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center mb-2">
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="w-full p-1 bg-gray-700 rounded"
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
        className="bg-blue-500 text-white p-1 rounded w-full mb-2"
      >
        Convert
      </button>
      {result && (
        <div className="bg-gray-700 p-2 rounded">
          <p>
            {amount} {fromCurrency} = {result.toFixed(4)} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default ConverterWidget;
