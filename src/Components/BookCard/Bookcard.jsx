import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({ book }) => {
  const { title, description, rating, author, category } = book;
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 w-full max-w-sm mx-auto sm:max-w-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Book Info */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 line-clamp-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center">
        <span className="inline-flex items-center gap-1 text-sm sm:text-base bg-yellow-400 text-gray-800 px-3 py-1 rounded-full font-semibold shadow-sm">
          ⭐ {rating}
        </span>
        <Link to={encodeURIComponent(title)}>
          <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
