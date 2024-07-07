import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CurrencyConverter = ({ rates }) => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  const convert = () => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return;
    const rate = rates[toCurrency] / rates[fromCurrency];
    setResult(amount * rate);
  };

  return (
    <div className="bg-gray-800 dark:bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-bold mb-4">Currency Converter</h2>
      <div className="flex items-center mb-4">
        <div className="relative w-1/3 mr-2">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full p-2 bg-gray-700 dark:bg-gray-200 rounded appearance-none"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-1/3 p-2 bg-gray-700 dark:bg-gray-200 rounded mr-2"
        />
        <div className="relative w-1/3">
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full p-2 bg-gray-700 dark:bg-gray-200 rounded appearance-none"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <button
        onClick={convert}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Convert
      </button>
      {result && (
        <div className="bg-gray-700 dark:bg-gray-200 p-4 rounded mt-4">
          <h3 className="text-lg font-bold">Conversion Result</h3>
          <p className="mt-2">
            {amount} {fromCurrency} = {result.toFixed(4)} {toCurrency}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            1 {fromCurrency} ={" "}
            {(rates[toCurrency] / rates[fromCurrency]).toFixed(4)} {toCurrency}
          </p>
          <p className="text-sm text-gray-500">
            Updated {new Date().toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
