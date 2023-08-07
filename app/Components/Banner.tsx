import React from "react";

interface BannerProps {
  onClose: () => void;
}

const Banner: React.FC<BannerProps> = ({ onClose }) => {
  return (
    <div
      id="sticky-banner"
      tabIndex={-1}
      className="bg-gradient-to-r from-yellow-100 via-gray-200 to-gray-100 fixed top-28 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center"></span>
          <span>
            Call or Visit Today 6 Days a Week | San Dimas 909-599-3141 | Pomona
            909-596-3799 |
            <a
              href="https://flowbite.com"
              className="ml-1 inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
            >
              Directions
            </a>
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={onClose}
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-black hover:bg-gray-100 rounded-lg text-sm p-1.5"
        >
          <span className="bg-gray-100 w-7 h-7 rounded-lg p-1.5">X</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
