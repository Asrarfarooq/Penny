"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Bell, List } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 flex flex-col items-center">
      <Link
        href="/"
        className="self-start flex items-center text-blue-500 mb-4"
      >
        <ArrowLeft size={24} className="mr-2" />
        Back to Converter
      </Link>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Additional Features</h1>
        <div className="grid grid-cols-1 gap-4">
          <Link
            href="/features/trend-analysis"
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center"
          >
            <TrendingUp className="mr-2" size={24} />
            <h2 className="text-xl font-bold">Trend Analysis</h2>
          </Link>
          <Link
            href="/features/rate-alerts"
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center"
          >
            <Bell className="mr-2" size={24} />
            <h2 className="text-xl font-bold">Rate Alerts</h2>
          </Link>
          <Link
            href="/features/multi-currency-comparison"
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center"
          >
            <List className="mr-2" size={24} />
            <h2 className="text-xl font-bold">Multi-Currency Comparison</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
