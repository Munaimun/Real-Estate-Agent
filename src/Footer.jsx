import {
  FaTwitter,
  FaFacebookSquare,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-gray-400 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Let&apos;s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond within 1-2 business
              days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none">
                <FaTwitter />
              </button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none">
                <FaFacebookSquare />
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none">
                <FaDribbble />
              </button>
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none">
                <FaGithub />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="/copy-about"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/brokerage"
                    >
                      Borkerage
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Contact or Visit
                </span>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Tel. 310-650-8798
                    </p>
                  </li>

                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      sam@samsdod.com
                    </p>
                  </li>

                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Hermosa Beach, CA
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-blueGray-300" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm italic text-blueGray-500 font-semibold py-1">
              Accurate Appraisal & Brokerage Services
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
