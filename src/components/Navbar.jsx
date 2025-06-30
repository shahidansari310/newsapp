import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">NewsWave</a>

        <ul className="navbar-nav flex-row gap-3">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">World</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Tech</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
        </ul>

        <form className="d-flex ms-auto" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar
