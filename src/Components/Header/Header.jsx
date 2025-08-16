import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import logo from "../../assets/Lmslogo.png";
import { addSearch } from "../../Features/BookSlice";
import { useDispatch } from "react-redux";

export const Header = () => {
  const [searchBook, setSearchBook] = useState("");
  const dispatch = useDispatch();

  return (
    <header
      className="
        sticky top-0 z-50 bg-white shadow-md
        flex items-center justify-between
        px-6 py-3
      "
    >
      {/* Left - Logo + Search */}
      <div className="flex items-center gap-6 flex-shrink-0">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </NavLink>

        <div className="relative w-40 sm:w-60 md:w-72">
          <input
            type="text"
            placeholder="Search Book..."
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
            className="
              w-full rounded-xl border border-gray-300 bg-gray-50
              pl-4 pr-10 py-2 text-sm
              focus:ring-2 focus:ring-amber-500 focus:outline-none
              placeholder-gray-400
            "
          />
          <ManageSearchIcon
            fontSize="inherit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600 cursor-pointer hover:scale-110 transition"
            style={{ width: 22, height: 22 }}
            onClick={() => {
              dispatch(addSearch(searchBook));
              setSearchBook("");
            }}
          />
        </div>
      </div>

      {/* Center - Navigation */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-10 font-medium text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-700 transition"
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="addbook"
            className={({ isActive }) =>
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-700 transition"
            }
          >
            <li>Add Book</li>
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-700 transition"
            }
          >
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
