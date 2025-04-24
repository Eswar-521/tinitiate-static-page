
import React from "react";
import { Link } from "react-router-dom";

const items = [
  "Introduction", "Using", "Getting Started", 
  "Install Using NPM", "Include Using CDN", "Bundled JavaScript",
  "Data attributes", "Init Functions", "ESM and CJS", "TypeScript", "Figma Desgin System", "Flowbite SVG Icons",
  "Flowbite GPT", "Pro Version", "Work with us", "Learn Desgin Concepts", "Tailwind Css v3 to v4", "Tailwind Css v3", "Tailwind Css v2",
  "WindCss", "React", "Nextjs", "Vue.js", "Nuxt", "Laravel", "Svelte", "Angular", "Ruby and Rails", "Django", "Flask", "Lincensing", "Contributions", 
  "Discord community", "Youtube channel", "Authors"
];

const RightSidebar = () => {
  return (
    <aside className="w-64 h-[calc(100vh-64px)] overflow-y-auto p-4 text-sm border-l border-gray-200 bg-blue-50 fixed right-0 top-16">
      <h2 className="font-semibold mb-2 -800">ON THIS PAGE </h2>
      <ul className="space-y-1">
        {items.map((text, index) => (
          <li key={index}>
            <Link
              to={`/${text
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/\./g, '')
                .replace(/&/g, 'and')
                .replace(/[^\w-]/g, '')
              }`}
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RightSidebar;
