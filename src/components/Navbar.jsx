import React from "react";
import { useState } from "react";

const Navbar = ({setCategory }) => {

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
    <nav
      className="navbar bg-dark border-bottom border-body text-xl"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="navbar-brand text-white text-3xl font-bold">
          <span className="badge bg-light text-dark p-3">NewsWave</span>
        </div>
        <div>
  {/* Only visible on screens smaller than `lg` (mobile/tablet) */}
  <div className="block lg:hidden">
   <div className="relative">
        <button
          className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Categories
        </button>

        {isDropdownOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
            {categories.map((category) => (
              <li
                key={category}
                className="px-4 hover:bg-gray-200 cursor-pointer capitalize"
                onClick={() => {
                  setCategory(category);
                  setIsDropdownOpen(false);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

  </div>

  {/* Only visible on `lg` and up (desktop) */}
  <div className="hidden lg:block">
    <ul className="navbar-nav flex-row gap-3">
          <li className="nav-item">
            <div
              className="nav-link text-white"
              onClick={() => setCategory("technology")}
            >
              Technology
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link text-white"
              onClick={() => setCategory("business")}
            >
              Business
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link text-white"
              onClick={() => setCategory("health")}
            >
              Health
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link text-white"
              onClick={() => setCategory("science")}
            >
              Science
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link text-white"
              onClick={() => setCategory("sports")}
            >
              Sports
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link text-white"
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </div>
          </li>
        </ul>
  </div>
</div>
        
      </div>
    </nav>
  );
};

export default Navbar;
