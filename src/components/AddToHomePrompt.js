import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const AddToHomePrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone;

    if (isIos() && !isInStandaloneMode()) {
      setShowPrompt(true);
    }
  }, []);

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4">
      <div className="bg-gray-800 rounded-lg w-full max-w-sm overflow-hidden">
        <div className="p-4">
          <h2 className="text-white text-lg font-bold mb-2">
            Add to Home Screen
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            This website has app functionality. Add it to your home screen to
            use it in fullscreen and while offline.
          </p>
          <ol className="list-decimal list-inside text-gray-300 text-sm space-y-2">
            <li>Press the Share button on the menu bar below.</li>
            <li>Press Add to Home Screen.</li>
          </ol>
        </div>
        <div className="flex justify-between items-center bg-gray-700 p-4">
          <button
            onClick={() => setShowPrompt(false)}
            className="text-blue-400 font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowPrompt(false)}
            className="text-white bg-blue-500 px-4 py-2 rounded-full font-semibold"
          >
            Add to Home Screen
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToHomePrompt;
