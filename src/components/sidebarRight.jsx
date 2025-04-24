import React from "react";

const RightSidebar = () => (
  <aside className="hidden lg:block w-64 h-full overflow-y-auto border-l border-gray-200 dark:border-gray-700 p-4">
    <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">On This Page</h2>
    <ul className="space-y-2 text-sm">
      <li className="text-blue-600 dark:text-blue-400">Default phone input</li>
      <li>Country code input</li>
      <li>Verification form</li>
    </ul>
  </aside>
);

export default RightSidebar;
