import { Outlet } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/houses/logo.png"
const NavBar = () => (
  <>
    <header className="header" id="header">
      <nav className="nav">
      <Link
                href={{
                  pathname: "/",
                }}
                className="nav__logo"
              >
                 <Image src={logo} alt="" className="logo-nav" />
                {/* SUKANA */}
              </Link>
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
