import React from "react";

const Navbar = ({setCategory }) => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body text-xl"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="navbar-brand text-white text-3xl font-bold">
          <span className="badge bg-light text-dark p-3">NewsWave</span>
        </div>
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
        <form className="d-flex ms-auto" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
