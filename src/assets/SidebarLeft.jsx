import React from "react";

const links = ["Introduction", "Quickstart", "JavaScript", "React", "Next.js", "Vue"];

const LeftSidebar = () => (
  <aside className="w-64 h-full overflow-y-auto border-r border-gray-200 dark:border-gray-700 p-4">
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link} className="text-gray-800 dark:text-white hover:underline">
          {link}
        </li>
      ))}
    </ul>
  </aside>
);

export default LeftSidebar;