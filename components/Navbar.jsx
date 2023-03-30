import { Outlet } from "react-router-dom";
import Link from "next/link";

const NavBar = () => (
  <>
    <header className="header" id="header">
      <nav className="nav">
        <a href="#" className="nav__logo">
          SUKANA
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                href={{
                  pathname: "/",
                }}
                className="nav__link"
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link href={"/#about"} className="nav__link">
                About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                href={{
                  pathname: "/immobile",
                }}
              >
                <p className="nav__link">Immobiles</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
    <Outlet />
  </>
);

export default NavBar;
