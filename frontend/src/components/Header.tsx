import React from "react";
import { Outlet } from "react-router-dom";
// import HahaHeroesLogo from "../../public/HAHA-Heroes-Logo.png";

const Header: React.FC = ({}) => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto px-4">
          <a href="#" className="flex items-center py-4">
            <img
              src={`${window.location.origin}/HAHA-Heroes-Logo.png`}
              className="h-8 mr-3 text-white"
              alt="HaHa Heroes Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              HaHa Heroes
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium h-100 flex flex-col px-4 mt-5 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
              <li className="text-blue-700 bg-white pb-4 h-100 font-medium rounded-t-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
                Volunteers List
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
