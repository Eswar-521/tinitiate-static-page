import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa"; 

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="flex">


      
      <header className="w-full bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50 ml-16"> 

        <div className="flex items-center space-x-4"> 
          
          <Link to="/" className="text-xl font-bold text-blue-600">
            Flowbite
          </Link>

          
          <div className="w-48">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        
        <div className="space-x-4 flex items-center">
          <Link to="/quickstart" className="text-sm text-blue-600 hover:underline">
            Quickstart
          </Link>
          <Link to="/blocks" className="text-sm text-blue-600 hover:underline">
            Blocks
          </Link>
          <Link to="/Figma" className="text-sm text-blue-600 hover:underline">
            Figma
          </Link>
          <Link to="/Icons" className="text-sm text-blue-600 hover:underline">
            Icons
          </Link>
          <Link to="/Blogs" className="text-sm text-blue-600 hover:underline">
            Blog
          </Link>
          <Link to="/Pro version" className="text-sm text-blue-600 hover:underline">
            Pro Version
          </Link>

      
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-600 hover:text-gray-800" size={20} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-gray-600 hover:text-gray-800" size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-gray-600 hover:text-gray-800" size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-600 hover:text-gray-800" size={20} />
            </a>

        
            <button onClick={toggleDarkMode} className="text-gray-600 hover:text-gray-800">
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 12v2m8.93-4.93l-1.42 1.42M4.22 4.22l1.42 1.42M21 12h-2m-12 0H3m16.24 6.24l1.42-1.42M4.24 17.24l-1.42-1.42M12 3a9 9 0 100 18 9 9 0 000-18z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 12v2m8.93-4.93l-1.42 1.42M4.22 4.22l1.42 1.42M21 12h-2m-12 0H3m16.24 6.24l1.42-1.42M4.24 17.24l-1.42-1.42M12 3a9 9 0 100 18 9 9 0 000-18z" />
                </svg>
              )}
            </button>
          </div>

          <Link
            to="/pricing"
            className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700 transition">
            Pricing & FAQ
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
