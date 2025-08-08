import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/tumble-tales-logo.svg';
import LoginPanel from './Login/LoginPanel';
import { UserIcon } from '@heroicons/react/24/solid';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userPanelOpen, setUserPanelOpen] = useState(false);

  return (
    <header className="h-64 bg-green-200 bg-opacity-30 px-6 relative">
      {/* Main container: nav and logo */}
      <div className="relative max-w-6xl w-full h-full mx-auto flex items-center justify-between">
        {/* Left nav (desktop only) */}
        <nav className="hidden md:flex space-x-6 flex-shrink-0">
          <Link to="/home" className="link-paintbrush">Home</Link>
          <Link to="/about" className="link-paintbrush">About</Link>
          <Link to="/contact" className="link-paintbrush">Contact</Link>
        </nav>

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="logo-polish">
            <img src={logo} alt="Logo" className="h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 max-h-64 w-auto" />
          </div>
        </div>
      </div>

      {/* Icons container */}
      <div className="absolute top-4 right-6 flex items-center z-50">
        {/* User icon */}
        <button
          onClick={() => setUserPanelOpen(true)}
          aria-label="User Panel"
          className="text-base group active:scale-150 transition duration-140"
        >
          <UserIcon className="w-7 h-7 opacity-70 text-gray-700 group-hover:text-green-800 group-active:text-gray-900" />
        </button>

        {/* Social icons (desktop only) */}
        <div className="hidden md:flex items-center space-x-4 ml-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-base group active:scale-150 transition duration-160"
          >
            <ImFacebook2 className="w-7 h-7 opacity-70 text-gray-700 group-hover:text-green-800 group-active:text-gray-900" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-base group active:scale-150 transition duration-160"
          >
            <FiTwitter className="w-7 h-7 opacity-70 text-gray-700 group-hover:text-green-800 group-active:text-gray-900" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-base group active:scale-150 transition duration-160"
          >
            <FaInstagram className="w-7 h-7 opacity-70 text-gray-700 group-hover:text-green-800 group-active:text-gray-900" />
          </a>
        </div>
      </div>

      {/* Invisible Overlay + LoginPanel */}
      {userPanelOpen && (
        <>
          <div
            className="fixed inset-0 z-30 cursor-default"
            onClick={() => setUserPanelOpen(false)}
          />
          <LoginPanel
            isOpen={userPanelOpen}
            onClose={() => setUserPanelOpen(false)}
          />
        </>
      )}

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

      {/* Invisible Overlay + Mobile slide-in menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 cursor-default"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 px-6 py-4 transform transition-transform duration-300 md:hidden translate-x-0`}
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
        </>
      )}
    </header>
  );
}
