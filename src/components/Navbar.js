import React, { useState } from 'react';
import Switch from 'react-switch';
import { SunIcon, MoonIcon, MenuIcon, XIcon, ExternalLinkIcon } from '@heroicons/react/outline';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 px-4 py-2 flex justify-between items-center">
      <div className="text-lg text-gray-600 dark:text-gray-100">exex.rs</div>
      <div className="flex items-center">
        <div className="flex items-center mr-4 space-x-2">
          <SunIcon className="text-yellow-500 w-4 h-4" />
          <Switch
            onChange={toggleDarkMode}
            checked={isDarkMode}
            offColor="#e5e7eb"
            onColor="#1f2937"
            offHandleColor="#ffffff"
            onHandleColor="#ffffff"
            uncheckedIcon={false}
            checkedIcon={false}
            height={18}
            width={36}
            handleDiameter={15}
          />
          <MoonIcon className="text-blue-500 w-4 h-4" />
        </div>
        <button
          onClick={handleMenuToggle}
          className="text-gray-900 dark:text-gray-100 focus:outline-none ml-4"
        >
          {menuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div className={`absolute top-16 right-0 w-48 bg-gray-100 dark:bg-gray-900 ${menuOpen ? 'block' : 'hidden'}`}>
        <a href="https://github.com/paradigmxyz/reth" className="flex items-center px-4 py-2 text-gray-900 dark:text-gray-100" target="_blank" rel="noopener noreferrer">
          Reth
          <ExternalLinkIcon className="w-4 h-4 ml-1" />
        </a>
        <a href="https://reth.rs/developers/exex/exex.html" className="flex items-center px-4 py-2 text-gray-900 dark:text-gray-100" target="_blank" rel="noopener noreferrer">
          ExEx docs
          <ExternalLinkIcon className="w-4 h-4 ml-1" />
        </a>
        <a href="https://github.com/weaveVM/exex.rs" className="flex items-center px-4 py-2 text-gray-900 dark:text-gray-100" target="_blank" rel="noopener noreferrer">
          exex.rs GitHub
          <ExternalLinkIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
