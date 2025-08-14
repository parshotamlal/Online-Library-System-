import React from "react";
import { NavLink } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import logo from "../../assets/Lmslogo.png";
import { useState } from "react";
import { addSearch } from "../../Features/BookSlice";
import { useDispatch } from "react-redux";
export const Header = () => {
  const [searchBook, setSearchBook] = useState();
  const dispatch = useDispatch();
  return (
    <header
      className="
      sticky top-0 z-50 bg-white shadow-xl
      flex flex-wrap items-center justify-between gap-4
      px-4 py-2
    "
    >
      <NavLink to="/">
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </NavLink>

      <div className="relative w-full sm:w-60 md:w-72 flex-shrink">
        <input
          type="text"
          placeholder="Search Book..."
          value={searchBook}
          onChange={(e) => {
            setSearchBook(e.target.value);
          }}
          className="
            w-full rounded-2xl bg-blue-100 p-2 pr-10
            outline-none placeholder:text-sm
          "
        />
        <ManageSearchIcon
          fontSize="inherit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          style={{ width: 24, height: 24 }}
          onClick={() => {
            dispatch(addSearch(searchBook));
            setSearchBook("");
          }}
        />
      </div>

      <div className="flex w-full sm:w-60 md:w-72 flex-shrink">
        <ul className="flex gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-700"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="addbook"
            className={({ isActive }) =>
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-700"
            }
          >
            <li>Add Book</li>
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-700"
            }
          >
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};
