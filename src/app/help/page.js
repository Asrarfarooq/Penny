"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <Link href="/" className="flex items-center text-blue-500 mb-4">
        <ArrowLeft size={24} className="mr-2" />
        Back to Converter
      </Link>

      <h1 className="text-2xl font-bold mb-4">Help & Information</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">How to Use Penny</h2>
        <p className="mb-4">
          Penny is a simple and intuitive currency converter. Here is how to use
          it:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>Select your base currency from the first dropdown.</li>
          <li>Enter the amount you want to convert.</li>
          <li>Select the target currency from the second dropdown.</li>
          <li>Click the Convert button to see the result.</li>
        </ol>

        <h2 className="text-xl font-bold mb-2">Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Real-time currency conversion</li>
          <li>Historical exchange rate data</li>
          <li>Support for multiple currencies</li>
          <li>Dark mode support</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">About the Data</h2>
        <p>
          Penny uses exchange rate data from ExchangeRate-API. The rates are
          updated regularly to ensure accuracy.
        </p>
      </div>
    </div>
  );
}
