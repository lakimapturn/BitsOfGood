import React, { useEffect } from "react";
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
            className={`relative z-10 inline-flex items-center px-4 py-2 text-white text-sm font-semibold ${
              currentPage !== page ? "bg-gray-900" : "bg-blue-700"
            }`}
          >
            {page}
          </button>
        ))}
      </>
    );
  };
  return (
    <div className="justify-center flex">
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <button
          onClick={() => toPage(currentPage - 1)}
          className="relative inline-flex items-center bg-gray-900 rounded-l-md px-2 py-2 text-gray-400"
          disabled={currentPage === 1}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon
            className="h-5 w-5"
            aria-hidden="true"
            color={currentPage === 1 ? `gray` : `white`}
          />
        </button>
        {showPageNumbers()}
        <button
          onClick={() => toPage(currentPage + 1)}
          className="relative inline-flex items-center bg-gray-900 rounded-r-md px-2 py-2 text-gray-400"
          disabled={currentPage === totalPages}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon
            className="h-5 w-5"
            aria-hidden="true"
            color={currentPage === totalPages ? `gray` : `white`}
          />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
