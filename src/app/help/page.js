import React from "react";
import Link from "next/link";
import { ArrowLeft, Twitter, Github } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 flex flex-col items-center justify-center">
      <Link href="/" className="flex items-center text-blue-500 mb-4">
        <ArrowLeft size={24} className="mr-2" />
        Back to Converter
      </Link>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Meet Penny</h1>
        <p className="mb-4">
          Penny is a currency converter that can convert between various
          currencies, including USD, EUR, GBP, and more.
        </p>
        <p className="mb-4">
          I made Penny because I needed a simple, no-bloat currency converter
          for my travels, and I wanted an application that focused solely on
          currency conversion.
        </p>
        <h2 className="text-xl font-bold mb-2">Why Penny?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Free to use with no advertisements</li>
          <li>🛠 Supports offline mode (No wifi or cellular needed)</li>
          <li>
            🌎 Can be downloaded as an application for iOS, Android, and desktop
          </li>
        </ul>
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://twitter.com/asrarfarooq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://github.com/asrarfarooq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white"
          >
            <Github size={24} />
          </a>
        </div>
        <p className="text-center mt-4">
          Asrar Farooq
          <br />
          @asrarfarooq
        </p>
      </div>
    </div>
  );
}
