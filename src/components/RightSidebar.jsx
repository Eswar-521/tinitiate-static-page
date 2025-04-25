import React from "react";
import { Link } from "react-router-dom";

const items = [
  "Default Phone input",
  "Verification code Input",
  "Authentication form",
];

const RightSidebar = () => {
  return (
    <aside className="bg-blue-50 border-l border-gray-200 flex-shrink-0 mr-4 rounded-md shadow-inner">
      <div className="sticky top-16 max-h-[calc(100vh-64px)] overflow-y-auto p-4 text-sm">
        <h2 className="font-semibold mb-2 text-gray-800">ON THIS PAGE</h2>
        <ul className="space-y-1">
          {items.map((text, index) => (
            <li key={index}>
              <Link
                to={`/${text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;
