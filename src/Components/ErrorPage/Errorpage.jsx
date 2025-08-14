import React from "react";

export const Errorpage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 p-6">
      <div className="max-w-lg w-full text-center bg-white shadow-2xl rounded-2xl p-10 animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-red-700 drop-shadow-md">
          Oops! 
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Something went wrong. Please try refreshing the page or
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};
