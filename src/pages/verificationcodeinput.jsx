import React, { useState } from 'react';

const PhoneDropdownForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <form className="max-w-sm mx-auto">
      <div className="flex items-center">
        <button
          type="button"
          onClick={toggleDropdown}
          className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        >
          <svg fill="none" aria-hidden="true" className="h-4 w-4 me-2" viewBox="0 0 20 15">
            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
            {/* You can paste the rest of the SVG content here if needed */}
          </svg>
          +1
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-52 dark:bg-gray-700 absolute mt-12">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span className="inline-flex items-center">
                    <svg fill="none" aria-hidden="true" className="h-4 w-4 me-2" viewBox="0 0 20 15">
                      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                      {/* Add more SVG parts here if required */}
                    </svg>
                    +1 United States
                  </span>
                </button>
              </li>
              {/* Add more country options here if needed */}
            </ul>
          </div>
        )}
      </div>
    </form>
  );
};

export default PhoneDropdownForm;
