import React, { useState } from "react";

const MultiCurrencyConverter = ({ rates }) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [baseAmount, setBaseAmount] = useState(1);
  const [selectedCurrencies, setSelectedCurrencies] = useState([
    "EUR",
    "GBP",
    "JPY",
  ]);

  const addCurrency = (currency) => {
    if (!selectedCurrencies.includes(currency)) {
      setSelectedCurrencies([...selectedCurrencies, currency]);
    }
  };

  const removeCurrency = (currency) => {
    setSelectedCurrencies(selectedCurrencies.filter((c) => c !== currency));
  };

  return (
    <div className="bg-gray-800 dark:bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-bold mb-4">Multi-Currency Converter</h2>
      <div className="flex items-center mb-4">
        <input
          type="number"
          value={baseAmount}
          onChange={(e) => setBaseAmount(e.target.value)}
          className="p-2 bg-gray-700 dark:bg-gray-200 rounded mr-2"
        />
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
          className="p-2 bg-gray-700 dark:bg-gray-200 rounded"
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
            className="bg-gray-700 dark:bg-gray-200 p-2 rounded flex justify-between items-center"
          >
            <span>
              {currency}:{" "}
              {((baseAmount * rates[currency]) / rates[baseCurrency]).toFixed(
                4
              )}
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
        className="mt-4 p-2 bg-gray-700 dark:bg-gray-200 rounded"
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
};

export default MultiCurrencyConverter;
