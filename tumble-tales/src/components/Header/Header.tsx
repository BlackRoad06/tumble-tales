import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/tumble-tales-logo.svg';
import LoginPanel from './Login/LoginPanel';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userPanelOpen, setUserPanelOpen] = useState(false);

  return (
    <header className="h-64 bg-green-200 bg-opacity-30 px-6 relative">

      {/* Main container: nav and logo */}
      <div className="relative max-w-6xl w-full h-full mx-auto flex items-center justify-between">
        
        {/* Left nav (desktop only) */}
        <nav className="hidden md:flex space-x-6 flex-shrink-0">
           <Link to="/home" className="text-blue-600 hover:underline whitespace-nowrap">Home</Link>
           <Link to="/about" className="text-blue-600 hover:underline whitespace-nowrap">About</Link>
          <Link to="/contact" className="text-blue-600 hover:underline whitespace-nowrap">Contact</Link>
        </nav>


        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        
        <div className="logo-polish">
          <img src={logo} alt="Logo" className="h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 max-h-64 w-auto" />
          </div>
        </div>
      </div>


      {/* Icons container — pinned top-right with padding */}
      <div className="absolute top-4 right-6 flex items-center space-x-4 z-50">
        <button
          onClick={() => setUserPanelOpen(true)}
          className="text-2xl text-blue-700 hover:text-blue-900"
          aria-label="User Panel"
        >
          👤
        </button>
        <a href="#" aria-label="Facebook" className="hidden md:inline text-blue-700 hover:text-blue-900 text-base">
          FB
        </a>
        <a href="#" aria-label="Twitter" className="hidden md:inline text-blue-400 hover:text-blue-600 text-base">
          TW
        </a>
      </div>

      {/* Right-side login panel */}
      <LoginPanel isOpen={userPanelOpen} onClose={() => setUserPanelOpen(false)} />

      {/* Hamburger button (mobile only) */}
      <div className="md:hidden absolute top-6 left-6">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-blue-600 hover:text-blue-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 md:hidden px-6 py-4 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-4 flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-blue-600 hover:text-blue-800 focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-3 mb-4">
          <Link to="/home" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
          <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
