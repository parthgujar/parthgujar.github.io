import { useEffect, useState } from "react";

const NavLinks = [
  {
    id: 2,
    name: "Mandir",
    link: "/mandir-gallery",
  },

  {
    id: 3,
    name: "Bhakti",
    link: "/bhakti-popular",
  },
  {
    id: 6,
    name: "Swadhyay",
    link: "/swadhyay-popular",
  },
  {
    id: 4,
    name: "App",
    link: "/app",
  },
  {
    id: 1,
    name: "Ashram",
    link: "/ashram",
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

  useEffect(() => {
    if (window.location.pathname === "/") setActiveState(0);
    else if (window.location.pathname === "/ashram-gallery") setActiveState(1);
    else if (window.location.pathname === "/mandir-gallery") setActiveState(2);
    else if (window.location.pathname === "/bhakti") setActiveState(3);
    else if (window.location.pathname === "/app") setActiveState(4);
    else if (window.location.pathname === "/contact-us") setActiveState(5);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex">
        <a className="navbar-brand" href="/">
          {window.innerWidth > 360
            ? "Shrimad Rajchandra Mandir Devlali"
            : "SRM Devlali"}
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
