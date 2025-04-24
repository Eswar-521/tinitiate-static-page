import React from "react";
import { Link } from "react-router-dom";

const sections = {
  "Getting Started": ["Introduction", "Quickstart", "JavaScript", "TypeScript", "License", "Changelog"],
  "Integration Guides": [
    "React", "Next.js", "Vue", "Svelte", "Nuxt", "Angular", "Astro", "Remix", "Meteor", "Gatsby",
    "SolidJs", "Qwik", "Laravel", "Symfony", "Rails", "Phoenix", "Django", "Flask", "Blazor", "Hugo"
  ],
  "Customize": ["Configuration", "Dark Mode", "Theming", "Colors", "Icons", "RTL", "Optimization"],
  "Components": [
    "Accordion", "Alert", "Avatar", "Badger", "Banner", "Bottom Navigation", "Breadcrumb", "Buttons", "Button Group",
    "Card", "Carousel", "Chat Bubble", "DatePicker", "Device Mockups", "Drawer", "DropDowns", "Footer", "Forms",
    "Gallery", "Indicators", "Jumbotron", "KBD", "List Group", "Mega Menu", "Modal", "Navbar", "Pagination",
    "Popover", "Progress", "Rating", "Sidebar", "Skeleton", "Speed Dial", "Spinner", "Stepper", "Tables", "Tabs",
    "Timeline", "Toast", "Tooltips", "Typography", "Video"
  ],
  "Forms": [
    "InputField", "File Input", "Search Input", "Number Input", "Phone Input", "Select", "Textarea",
    "TimerPicker", "Checkbox", "Radio", "Toggle", "Range", "Floating Label"
  ],
  "Typography": ["Heading", "Paragraphs", "Blockquote", "Images", "Lists", "Links", "Text", "HR"],
  "Plugins": ["Charts", "Datatables", "WYSIWYG"]
};

const LeftSidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 h-full p-4 overflow-y-auto ml-14"> {/* Added ml-4 for margin left */}
      {Object.entries(sections).map(([sectionTitle, items], idx) => (
        <div key={idx} className="mb-4">
          <h2 className="text-lg font-semibold mb-2">{sectionTitle.toUpperCase()}</h2>
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default LeftSidebar;
