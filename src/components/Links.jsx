import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/images", text: "📸 Images" },
  { url: "/videos", text: "📺 Videos" },
];

const Links = () => (
  <nav className="flex justify-center items-center mt-4 gap-4" aria-label="Result types">
    {links.map(({ url, text }) => (
      <NavLink
        key={url}
        to={url}
        className={({ isActive }) =>
          `px-3 py-1 rounded-full transition font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700 ${
            isActive ? 'bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 shadow' : ''
          }`
        }
        aria-label={text}
      >
        {text}
      </NavLink>
    ))}
  </nav>
);

export default Links;
