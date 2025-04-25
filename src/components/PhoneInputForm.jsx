import React, { useState, useRef } from "react";

const PhoneInputForm = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState("desktop"); // "desktop" | "tablet" | "mobile"
  const containerRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div
      ref={containerRef}
      className={`max-w-xl mx-auto my-8 p-6 rounded shadow bg-white dark:bg-gray-800
        ${viewMode === "tablet" ? "max-w-md" : ""}
        ${viewMode === "mobile" ? "max-w-xs" : ""}`}
    >
      {/* Toggle buttons */}
      <div className="flex justify-end space-x-4 mb-4">
        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          title="Toggle Fullscreen"
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {isFullscreen ? (
            <svg className="w-5 h-5 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h6v6M20 20h-6v-6M4 20h6v-6M20 4h-6v6" />
            </svg>
          )}
        </button>

        {/* View Toggles */}
        <button
          onClick={() => handleViewModeChange("desktop")}
          title="Desktop View"
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          🖥️
        </button>
        <button
          onClick={() => handleViewModeChange("tablet")}
          title="Tablet View"
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          📱
        </button>
        <button
          onClick={() => handleViewModeChange("mobile")}
          title="Mobile View"
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          📞
        </button>
      </div>

      {/* Phone Input Form */}
      <form>
        <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Phone number:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            {/* Phone icon */}
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 19 18">
              <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
            </svg>
          </div>
          <input
            type="text"
            id="phone-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Select a phone number that matches the format.
        </p>
      </form>
    </div>
  );
};

export default PhoneInputForm;
