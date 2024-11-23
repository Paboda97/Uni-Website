import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For the main header menu
  const [isStickyMenuOpen, setIsStickyMenuOpen] = useState(false); // For the sticky navbar menu

  const toggleMainMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleStickyMenu = () => {
    setIsStickyMenuOpen(!isStickyMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Main Header */}
      <div className="bg-gray-900 text-white">
        <div className="flex items-center justify-between px-4 md:px-12 py-4">
          <div className="flex items-center space-x-3">
            <h1 className="text-lg md:text-2xl font-bold uppercase">UVA UNI</h1>
          </div>
          {/* Navigation for large screens */}
          <nav className="hidden md:flex space-x-6">
            <a href="#students" className="hover:text-orange-400">
              Students
            </a>
            <a href="#faculty&staff" className="hover:text-orange-400">
              Faculty & Staff
            </a>
           { /*<a href="#alumni" className="hover:text-orange-400">
              Alumni
            </a>*/}
            <a href="#blog" className="hover:text-orange-400">
              Blog
            </a>
          </nav>
          {/* Hamburger menu button for mobile */}
          <div className="md:hidden">
            <button
              aria-label="Toggle Main Menu"
              onClick={toggleMainMenu}
              className="text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="bg-gray-800 text-white space-y-4 px-4 py-4 md:hidden">
            <a href="#students" className="block hover:text-orange-400">
              Students
            </a>
            <a href="#faculty&staff" className="block hover:text-orange-400">
              Faculty & Staff
            </a>
            {/*<a href="#alumni" className="block hover:text-orange-400">
              Alumni
            </a>*/}
            <a href="#blog" className="block hover:text-orange-400">
              Blog
            </a>
          </div>
        )}
      </div>

      {/* Sticky Scrolling Navbar */}
      <div
        className="bg-white shadow-md sticky top-0 z-50"
        style={{ borderTop: '2px solid #B03A2E' }}
      >
        <div className="hidden md:flex justify-center space-x-6 px-4 md:px-12 py-3 text-gray-900 text-sm md:text-base">
          
        <a href="#home" className="hover:text-orange-500">
            HOME
          </a>
          <a href="#about" className="hover:text-orange-500">
            ABOUT
          </a>
          <a href="#academic" className="hover:text-orange-500">
            ACADEMIC
          </a>
          <a href="#research" className="hover:text-orange-500">
            RESEARCH
          </a>
          <a href="#people" className="hover:text-orange-500">
            PEOPLE
          </a>
          <a href="#contacts" className="hover:text-orange-500">
            CONTACTS
          </a>
        </div>

        {/* Mobile Sticky Menu */}
        <div className="md:hidden px-4 py-3 flex items-center justify-between bg-white">
          <h2 className="text-gray-900 font-bold">Navigation</h2>
          <button
            aria-label="Toggle Sticky Menu"
            onClick={toggleStickyMenu}
            className="text-gray-900 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Sticky Dropdown */}
        {isStickyMenuOpen && (
          <div className="bg-white shadow space-y-2 px-4 py-4 text-gray-900 text-sm md:hidden">
            
            <a href="#home" className="block hover:text-orange-500">
              HOME
            </a>
            <a href="#about" className="block hover:text-orange-500">
              ABOUT
            </a>
            <a href="#academic" className="block hover:text-orange-500">
              ACADEMIC
            </a>
            <a href="#research" className="block hover:text-orange-500">
              RESEARCH
            </a>
            <a href="#people" className="block hover:text-orange-500">
              PEOPLE
            </a>
            <a href="#contacts" className="block hover:text-orange-500">
              CONTACTS
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
