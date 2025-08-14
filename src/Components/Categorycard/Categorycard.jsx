import React from "react";
import { Link } from "react-router-dom";

export const Categorycard = ({ categoryname, onClicK }) => {
  return (
    <div
      className="w-[70vw] sm:w-40 md:w-52 flex-shrink-0 rounded-lg p-4 flex flex-col items-center gap-4 border border-gray-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-center">{categoryname}</h3>

      <Link to={`books/${encodeURIComponent(categoryname)}`} className="w-full">
        <button
          onClick={onClicK}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Explore
        </button>
      </Link>
    </div>
  );
};
