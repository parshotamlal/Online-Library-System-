import React from "react";
// Contact page 
export const Contact = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[700px] bg-gradient-to-br from-orange-100 via-white to-orange-50 p-4 sm:p-8">
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl sm:px-8 lg:px-12 py-10 border border-orange-200">
        <h1 className="text-4xl font-bold text-orange-700 mb-8 text-center drop-shadow-sm">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Side */}
          <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-inner">
            <h2 className="text-3xl font-extrabold text-gray-800">
              Get in touch
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Fill in the form to start a conversation
            </p>

            {/* Address */}
            <div className="flex items-center mt-6 text-gray-600 space-x-4">
              <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
              <span className="font-medium">
                Changran, Kathua 184104, Jammu and kashmir
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center mt-4 text-gray-600 space-x-4">
              <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">+91 8899227482</span>
            </div>

            {/* Email */}
            <div className="flex items-center mt-4 text-gray-600 space-x-4">
              <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a
                href="mailto:parshotamworks@gmail.com"
                className="font-medium hover:text-orange-600 transition"
              >
              parshotamworks@gmail.com
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <form className="p-6 flex flex-col space-y-4 bg-white rounded-xl shadow-md">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 outline-none transition"
            />
            <input
              type="tel"
              name="tel"
              placeholder="Telephone Number"
              className="p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transform hover:scale-105 transition duration-300 shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
