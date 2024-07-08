import React, { useState, useEffect } from "react";

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
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-blue-500 text-white">
      <p>Add this app to your home screen for a better experience!</p>
      <button
        onClick={() => setShowPrompt(false)}
        className="mt-2 px-4 py-2 bg-white text-blue-500 rounded"
      >
        Dismiss
      </button>
    </div>
  );
};

export default AddToHomePrompt;
