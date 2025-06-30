import React, { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    "technology",
    "business",
    "health",
    "science",
    "sports",
    "entertainment",
  ];

  return (
    <nav className="navbar bg-dark border-bottom border-body text-xl" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Logo */}
        <div className="navbar-brand text-white text-3xl font-bold">
          <span className="badge bg-light text-dark p-3">NewsWave</span>
        </div>

        <div>
          {/* Mobile Dropdown */}
          <div className="block lg:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:brightness-110 transition duration-300"
            >
              Categories
            </button>

            <ul
              className={`absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-xl z-50 overflow-hidden transition-all duration-300 origin-top ${
                isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              {categories.map((category) => (
                <li
                  key={category}
                  className="px-4 py-2 hover:bg-purple-100 text-gray-800 font-medium capitalize cursor-pointer transition"
                  onClick={() => {
                    setCategory(category);
                    setIsDropdownOpen(false);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Category Links */}
          <div className="hidden lg:block">
            <ul className="navbar-nav flex-row gap-3">
              {categories.map((category) => (
                <li key={category} className="nav-item">
                  <button
                    onClick={() => setCategory(category)}
                    className="nav-link text-white capitalize hover:underline transition bg-transparent border-none"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
