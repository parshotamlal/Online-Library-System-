import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Bookdetail = ({ book }) => {
  return (
    <div className="max-w-5xl mx-auto my-12 px-4 md:px-8">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row transition-transform duration-300 hover:scale-[1.01]">
        
        {/* Book Image */}
        <div className="md:w-1/3 bg-gradient-to-b from-gray-50 to-gray-200 flex justify-center items-center p-6">
          <img
            src={
              book.cover || "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={book.title}
            className="w-full max-h-[400px] object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="md:w-2/3 p-8 flex flex-col justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-indigo-700 tracking-wide">
              {book.title}
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              by <span className="font-semibold text-gray-800">{book.author}</span>
            </p>
            <p className="mt-5 text-gray-700 leading-relaxed">
              {book.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-3">
            <span className="text-yellow-600 font-semibold text-lg">
              ⭐ {book.rating} / 5
            </span>
            <span className="px-4 py-1.5 text-sm bg-indigo-100 text-indigo-700 rounded-full font-medium shadow-sm">
              {book.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


