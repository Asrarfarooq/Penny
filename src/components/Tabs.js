import React, { useState } from "react";

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex mb-4 overflow-x-auto">
        {React.Children.map(children, (child, index) => (
          <button
            className={`px-4 py-2 ${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
            } rounded-t-lg mr-2 whitespace-nowrap`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
}

export function TabPanel({ children }) {
  return <div>{children}</div>;
}
