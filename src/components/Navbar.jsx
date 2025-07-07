import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar({ setDarkTheme, darkTheme }) {
  return (
    <div className="p-5 pb-0 flex flex-col border-b dark:border-gray-700 border-gray-200 bg-white dark:bg-gray-900">
      <div className="flex justify-between items-center w-full mb-4">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-3 rounded dark:bg-gray-50 dark:text-gray-900 shadow">
            Goggl <span role='img' aria-label='search'>🔎</span>
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-gray-100 border border-gray-300 rounded-full px-4 py-1 ml-4 shadow hover:shadow-lg transition"
        >
          {darkTheme ? "💡 Light" : "🌙 Dark"}
        </button>
      </div>
      <div className="w-full flex justify-center">
        <Search />
      </div>
    </div>
  );
}

export default Navbar;
