import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/tumble-tales-logo.svg';
import LoginPanel from './Login/LoginPanel';
import { UserIcon } from '@heroicons/react/24/solid';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileLogin, setShowMobileLogin] = useState(false);
  const [showDesktopLogin, setShowDesktopLogin] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setShowMobileLogin(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="h-48 sm:h-52 md:h-64 bg-green-200 bg-opacity-30 px-6 relative">
      {/* Main container: nav and logo */}
      <div className="relative max-w-6xl w-full h-full mx-auto flex items-center justify-between">
        {/* Left nav (desktop only) */}
        <nav className="hidden md:flex space-x-6 flex-shrink-0">
          <Link to="/home" className="link-paintbrush" aria-label="Go to Home page">Home</Link>
          <Link to="/about" className="link-paintbrush" aria-label="Go to About page">About</Link>
          <Link to="/contact" className="link-paintbrush" aria-label="Go to Contact page">Contact</Link>
        </nav>

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="logo-polish">
            <img
              src={logo}
              alt="Tumble-Tales site logo"
              className="h-36 sm:h-44 md:h-52 lg:h-56 xl:h-60 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Icons container (desktop only) */}
      <div className="hidden md:flex absolute top-4 right-6 items-center z-50">
        <button
          onClick={() => setShowDesktopLogin(true)}
          aria-label="Open User Panel"
          className="text-base group active:scale-150 transition duration-140"
        >
          <UserIcon className="w-7 h-7 opacity-70 text-gray-700 group-hover:text-green-800 group-active:text-gray-900" />
        </button>
        <div className="flex items-center space-x-4 ml-4">
          <a href="#" aria-label="Facebook" className="text-base group active:scale-150 transition duration-160">
            <ImFacebook2 className="w-7 h-7 opacity-70 text-gray-700 group-hover:text-green-800 group-active:text-gray-900" />
          </a>
          <a href="#" aria-label="Twitter" className="text-base group active:scale-150 transition duration-160">
            <FiTwitter className="w-7 h-7 opacity-70 text-gray-700 group-hover:text-green-800 group-active:text-gray-900" />
          </a>
          <a href="#" aria-label="Instagram" className="text-base group active:scale-150 transition duration-160">
            <FaInstagram className="w-7 h-7 opacity-70 text-gray-700 group-hover:text-green-800 group-active:text-gray-900" />
          </a>
        </div>
      </div>

      {/* Hamburger button (mobile only) */}
      <div className="md:hidden absolute top-4 left-6">
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            setShowMobileLogin(false);
          }}
          className="p-2 bg-red-400 hover:bg-red-300 active:bg-red-500 text-white rounded-md focus:outline-none transition-colors duration-150"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <GiHamburgerMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <motion.div
        ref={menuRef}
        initial={{ x: '-100%' }}
        animate={menuOpen ? { x: 0 } : { x: '-100%' }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 px-6 py-6 md:hidden"
      >
        <AnimatePresence mode="wait">
          {!showMobileLogin ? (
            <motion.div
              key="menu"
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-red-400 hover:text-red-300 active:text-red-500 rounded-md focus:outline-none transition-colors duration-150"
                  aria-label="Close menu"
                >
                  <IoClose className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex flex-col space-y-3 mt-6 mb-4">
                <Link
                  to="/home"
                  className="bg-red-400 hover:bg-red-300 active:bg-red-500 text-white py-2 rounded-md font-sans tracking-wider text-base text-center transition duration-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="bg-red-400 hover:bg-red-300 active:bg-red-500 text-white py-2 rounded-md font-sans tracking-wider text-base text-center transition duration-100"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="bg-red-400 hover:bg-red-300 active:bg-red-500 text-white py-2 rounded-md font-sans tracking-wider text-base text-center transition duration-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>

                <button
                  onClick={() => setShowMobileLogin(true)}
                  className="login-btn relative inline-block font-sans text-base tracking-wider focus:outline-none p-6"
                  aria-label="Open Login Panel"
                >
                  <span className="relative z-10">Login</span>
                  <svg
                    className="login-circle absolute top-1/2 left-1/2 w-28 h-16 -translate-x-1/2 -translate-y-1/2"
                    viewBox="0 0 140 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 40
                      C10 20, 60 10, 120 30
                      C130 50, 110 70, 70 70
                      C30 70, 15 60, 20 40
                      Z"
                    />
                  </svg>
                </button>
              </nav>
            </motion.div>
          ) : (
            <motion.div
              key="login"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full w-full"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setShowMobileLogin(false)}
                  className="text-red-400 hover:text-red-300 active:text-red-500 rounded-md focus:outline-none transition-colors duration-150"
                  aria-label="Back to menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Enter Username"
                  aria-label="Username"
                  className="border px-3 py-2 rounded border-blue-300 focus:ring focus:ring-blue-100"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  aria-label="Password"
                  className="border px-3 py-2 rounded border-blue-300 focus:ring focus:ring-blue-100"
                />
                <button className="bg-red-400 hover:bg-red-300 active:bg-red-500 text-white px-6 py-2 rounded-md font-sans tracking-wider text-base transition duration-100">
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Desktop Login Panel */}
      <AnimatePresence>
        {showDesktopLogin && (
          <>
            <div
              className="hidden md:block fixed inset-0 z-30 cursor-default"
              onClick={() => setShowDesktopLogin(false)}
            />
            <LoginPanel onClose={() => setShowDesktopLogin(false)} />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
