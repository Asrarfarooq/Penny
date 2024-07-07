"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Bell, List } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <Link href="/" className="flex items-center text-blue-500 mb-4">
        <ArrowLeft size={24} className="mr-2" />
        Back to Converter
      </Link>

      <h1 className="text-2xl font-bold mb-4">Additional Features</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <TrendingUp className="mb-2" size={24} />
            <h2 className="text-xl font-bold mb-2">Trend Analysis</h2>
            <p>Analyze currency trends over custom time periods.</p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <Bell className="mb-2" size={24} />
            <h2 className="text-xl font-bold mb-2">Rate Alerts</h2>
            <p>Set alerts for specific exchange rate thresholds.</p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <List className="mb-2" size={24} />
            <h2 className="text-xl font-bold mb-2">
              Multi-Currency Comparison
            </h2>
            <p>Compare multiple currencies at once.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
