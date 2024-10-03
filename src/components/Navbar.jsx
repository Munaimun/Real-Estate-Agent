import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-white block">
      <div className="max-w-screen-xl mx-auto py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="w-1/3 flex justify-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14" />
          </Link>
        </div>

        {/* Menu (Hidden on mobile, shown on desktop) */}
        <div className="hidden md:flex w-4/5 justify-center items-center space-x-14">
          <Link to="/" className="text-black hover:text-gray-300">
            WHO WE ARE
          </Link>
          <Link to="/about" className="text-black hover:text-gray-300">
            APPRAISAL
          </Link>
          <Link to="/copy-about" className="text-black hover:text-gray-300">
            PRIVATE LENDERS
          </Link>
          <Link to="/brokerage" className="text-black hover:text-gray-300">
            BROKERAGE
          </Link>
          <Link to="/contact" className="group">
            <button className="border border-black text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white px-4 py-2">
              GET A FREE QUOTE
            </button>
          </Link>
        </div>

        {/* Burger Menu Button (Shown on mobile, hidden on desktop) */}
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Shown on mobile, hidden on desktop) */}
      {isOpen && (
        <div className="md:hidden bg-white text-black">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/" className="text-black hover:text-gray-700">
                WHO WE ARE
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:text-gray-700">
                APPRAISAL
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-black hover:text-gray-700">
                BROKERAGE
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:text-gray-700">
                GET A FREE QUOTE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
