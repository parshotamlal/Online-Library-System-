import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-50 via-white to-amber-100 border-t shadow-md">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-10 text-center">
        {/* About Section */}
        <div className="mb-8 max-w-lg mx-auto">
          
          <h4 className="mt-3 text-gray-600 text-sm leading-relaxed">
            A modern learning management system to manage, share and explore
            knowledge with ease.
          </h4>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3 justify-center mb-8">
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              Resources
            </h2>
            <ul className="text-gray-600 font-medium space-y-2">
              <li>
                <Link to="/" className="hover:text-amber-700 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-700 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              Follow us
            </h2>
            <ul className="text-gray-600 font-medium space-y-2">
              <li>
                <a
                  href="https://github.com/parshotamlal"
                  className="hover:text-amber-700 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link to="/" className="hover:text-amber-700 transition">
                  Discord
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              Legal
            </h2>
            <ul className="text-gray-600 font-medium space-y-2">
              <li>
                <Link to="#" className="hover:text-amber-700 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-amber-700 transition">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-sm text-gray-500">
            © 2025{" "}
            <a
              href="#"
              target="_blank"
              className="font-medium text-amber-700 hover:underline"
            >
              Parshotam Lal
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {["facebook", "twitter", "github", "linkedin"].map((icon, idx) => (
              <Link
                key={idx}
                to="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700 transition"
              >
                <i className={`fa-brands fa-${icon} text-lg`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
