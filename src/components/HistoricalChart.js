import React, { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

const CurrencyConverter = ({
  rates,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  amount,
  setAmount,
  result,
  convert,
  clearConversion,
}) => {
  const currencyData = useMemo(() => {
    return Object.keys(rates).reduce((acc, code) => {
      acc[code] = {
        name: new Intl.DisplayNames(["en"], { type: "currency" }).of(code),
        flag: code
          .slice(0, 2)
          .toUpperCase()
          .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          ),
      };
      return acc;
    }, {});
  }, [rates]);

  const CurrencyOption = ({ currency }) => (
    <option value={currency}>
      {currencyData[currency].flag} {currencyData[currency].name} ({currency})
    </option>
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-bold mb-4">Currency Converter</h2>
      <div className="flex items-center mb-4">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="w-1/3 p-2 bg-gray-200 dark:bg-gray-700 rounded-l-lg border-r border-gray-300 dark:border-gray-600"
        >
          {Object.keys(rates).map((currency) => (
            <CurrencyOption key={currency} currency={currency} />
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
            <CurrencyOption key={currency} currency={currency} />
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
            {(rates[toCurrency] / rates[fromCurrency]).toFixed(4)} {toCurrency}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Updated {new Date().toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
