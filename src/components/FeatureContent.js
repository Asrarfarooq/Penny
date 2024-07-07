"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Bell, List } from "lucide-react";
import TrendAnalysis from "./TrendAnalysis";
import RateAlert from "./RateAlert";
import MultiCurrencyComparison from "./MultiCurrencyComparison";

export default function FeatureContent() {
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    setIsClient(true);
  }, []);

  let content;
  if (isClient) {
    if (page === "trend-analysis") {
      content = <TrendAnalysis />;
    } else if (page === "rate-alerts") {
      content = <RateAlert />;
    } else if (page === "multi-currency-comparison") {
      content = <MultiCurrencyComparison />;
    } else {
      content = (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Additional Features</h1>
          <div className="grid grid-cols-1 gap-4">
            <Link
              href="/features?page=trend-analysis"
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center"
            >
              <TrendingUp className="mr-2" size={24} />
              <h2 className="text-xl font-bold">Trend Analysis</h2>
            </Link>
            <Link
              href="/features?page=rate-alerts"
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center"
            >
              <Bell className="mr-2" size={24} />
              <h2 className="text-xl font-bold">Rate Alerts</h2>
            </Link>
            <Link
              href="/features?page=multi-currency-comparison"
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center"
            >
              <List className="mr-2" size={24} />
              <h2 className="text-xl font-bold">Multi-Currency Comparison</h2>
            </Link>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 flex flex-col items-center justify-center">
      <Link href="/" className="flex items-center text-blue-500 mb-4">
        <ArrowLeft size={24} className="mr-2" />
        Back to Converter
      </Link>
      {content}
    </div>
  );
}
