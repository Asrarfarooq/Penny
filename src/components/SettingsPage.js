"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SettingsPage() {
  const [defaultCurrency, setDefaultCurrency] = useState("USD");
  const [historicalDays, setHistoricalDays] = useState(30);

  useEffect(() => {
    const storedCurrency = localStorage.getItem("defaultCurrency");
    const storedDays = localStorage.getItem("historicalDays");
    if (storedCurrency) setDefaultCurrency(storedCurrency);
    if (storedDays) setHistoricalDays(parseInt(storedDays));
  }, []);

  const saveSettings = () => {
    localStorage.setItem("defaultCurrency", defaultCurrency);
    localStorage.setItem("historicalDays", historicalDays.toString());
    alert("Settings saved!");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <Link href="/" className="flex items-center text-blue-500 mb-4">
        <ArrowLeft size={24} className="mr-2" />
        Back to Converter
      </Link>

      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block mb-2">Default Currency</label>
          <select
            value={defaultCurrency}
            onChange={(e) => setDefaultCurrency(e.target.value)}
            className="w-full p-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Historical Data Range</label>
          <select
            value={historicalDays}
            onChange={(e) => setHistoricalDays(parseInt(e.target.value))}
            className="w-full p-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            <option value={7}>7 days</option>
            <option value={30}>30 days</option>
          </select>
        </div>

        <button
          onClick={saveSettings}
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
