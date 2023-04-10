import { Outlet } from "react-router-dom";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/houses/logo.png";
import styles from "../styles/Navbar.module.css";
const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <header className={styles.header} id="header">
        <nav className={styles.nav}>
          <Link
            href={{
              pathname: "/",
            }}
            className={styles.nav__logo}
          >
            <Image src={logo} alt="" className={styles["logo-nav"]} />
            {/* SUKANA */}
          </Link>
          <div
            className={styles.nav__toggle}
            onClick={toggleMenu}
            id="nav-toggle"
          >
            <i className="fas fa-bars"></i>
          </div>
          <div
            id="nav-menu"
            className={isActive ? styles.nav__menu_active : styles.nav__menu}
          >
            <div className="nav__close" onClick={toggleMenu}>
              <i className="bx bx-x"></i>
            </div>
          </div>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link
                href={{
                  pathname: "/",
                }}
                className={styles.nav__link}
              >
                Home
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href={"/#about"} className={styles.nav__link}>
                About
              </Link>
            </li>

            <li className={styles.nav__item}>
              <Link
                href={{
                  pathname: "/immobile",
                }}
              >
                <p className={styles.nav__link}>Immobiles</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
