import { Link } from "react-router-dom";

import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-400 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex justify-center sm:items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                APPRAISAL
              </Link>
            </li>
            <li>
              <Link to="/copy-about" className="hover:underline me-4 md:me-6">
                PRIVATE LENDERS
              </Link>
            </li>
            <li>
              <Link to="/brokerage" className="hover:underline me-4 md:me-6">
                BROKERAGE
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-black">
          <Link href="https://flowbite.com/" className="hover:underline"></Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
