import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
  totalPages: number;
  toPage: Function;
  currentPage: number;
}

const numVisiblePages: number = 5;

const Pagination: React.FC<Props> = ({ totalPages, toPage, currentPage }) => {
  useEffect(() => {
    showPageNumbers();
  }, [currentPage]);

  const showPageNumbers = () => {
    const halfVisiblePages = Math.floor(numVisiblePages / 2);

    let startPage = Math.max(currentPage - halfVisiblePages, 1);
    const endPage = Math.min(startPage + numVisiblePages - 1, totalPages);

    if (endPage - startPage + 1 < numVisiblePages) {
      startPage = Math.max(endPage - numVisiblePages + 1, 1);
    }

    const visiblePages = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
    return (
      <>
        {visiblePages.map((page, index) => (
          <button
            key={index}
            onClick={() => toPage(page)}
            className={`relative z-10 inline-flex items-center  px-4 py-2  text-sm font-semibold ${
              currentPage !== page ? "text-blue-700" : "text-white bg-blue-700"
            }`}
          >
            {page}
          </button>
        ))}
      </>
    );
  };
  return (
    <div>
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <button
          onClick={() => toPage(currentPage - 1)}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          disabled={currentPage === 1}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon
            className="h-5 w-5"
            aria-hidden="true"
            color={currentPage === 1 ? `gray` : `#2b6cb0`}
          />
        </button>
        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

        {showPageNumbers()}
        <button
          onClick={() => toPage(currentPage + 1)}
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          disabled={currentPage === totalPages}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon
            className="h-5 w-5"
            aria-hidden="true"
            color={currentPage === totalPages ? `gray` : `#2b6cb0`}
          />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
