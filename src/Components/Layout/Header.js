import React, { useState } from "react";

const NavLinks = [
  {
    id: 1,
    name: "Ashram",
    link: "/",
  },
  {
    id: 2,
    name: "Mandir",
    link: "/mandir",
  },
  {
    id: 3,
    name: "Bhakti",
    link: "/bhakti",
  },
  {
    id: 4,
    name: "App",
    link: "/app",
  },
  {
    id: 5,
    name: "Contact Us",
    link: "/contact-us",
  },
];

function Header() {
  const [ActiveState, setActiveState] = useState(0);
  const [collapse, setCollapse] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex">
        <a className="navbar-brand" href="/">
          Shrimad Rajchandra Mandir Devlali
        </a>
        <button
          className={`navbar-toggler ${collapse ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={() => setCollapse(!collapse)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse d-lg-flex justify-content-end ${
            collapse ? "show" : ""
          }`}
          id="navbarColor01"
        >
          <ul className="navbar-nav me-auto me-lg-2">
            {NavLinks.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`nav-link ${
                    ActiveState === item.id ? "active" : ""
                  }`}
                  href={item.link}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
