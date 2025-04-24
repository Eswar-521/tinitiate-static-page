
import React from "react";

const PhoneInputForm = () => (
  <div className="max-w-xl mx-auto my-8 bg-white dark:bg-gray-800 p-6 rounded shadow">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Phone number:
    </label>
    <div className="relative">
      <input
        type="tel"
        id="phone"
        className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="123-456-7890"
      />
      <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">📞</span>
    </div>
    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
      Select a phone number that matches the format.
    </p>
  </div>
);

export default PhoneInputForm;