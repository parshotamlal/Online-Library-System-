import React from "react";

export const Hero = () => {
  return (
    <section className="mt-4 bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-12 md:px-12">
      <div className="mx-auto max-w-4xl text-center font-medium">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
          Welcome to the <span className="text-blue-500">Online Library System</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore a wide range of books across various categories. 
          Your next great read is just a click away.
        </p>
      </div>
    </section>
  );
};
