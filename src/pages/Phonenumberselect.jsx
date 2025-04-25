import { useState } from "react";

const PhoneNumberForm = () => {
  const [copied, setCopied] = useState(false);
  const [tooltipText, setTooltipText] = useState("Copy number");

  const handleCopy = () => {
    const select = document.getElementById("phone-numbers");
    const selectedNumber = select.value;

    navigator.clipboard.writeText(selectedNumber).then(() => {
      setCopied(true);
      setTooltipText("Copied!");
      setTimeout(() => {
        setCopied(false);
        setTooltipText("Copy number");
      }, 2000);
    });
  };

  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-2 flex justify-between items-center">
        <label htmlFor="phone-numbers" className="text-sm font-medium text-gray-900 dark:text-white">
          Primary phone number:
        </label>
        <a href="#" className="text-blue-700 dark:text-blue-500 text-xs font-medium hover:underline">
          Manage numbers
        </a>
      </div>

      <div className="flex items-center relative">
        <div className="relative w-full">
          <select
            id="phone-numbers"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-e-0 border-gray-300 text-gray-900 text-sm rounded-s-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <option value="+1 234 456 7890">+1 234 456 7890</option>
            <option value="+1 456 234 7890">+1 456 234 7890</option>
            <option value="+1 432 621 3163">+1 432 621 3163</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:hover:text-white dark:border-gray-600"
        >
          {copied ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
          )}
        </button>

        <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-100 left-full ml-2 dark:bg-gray-700">
          {tooltipText}
        </div>
      </div>

      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Please set your primary phone number.
      </p>
    </form>
  );
};

export default PhoneNumberForm;
