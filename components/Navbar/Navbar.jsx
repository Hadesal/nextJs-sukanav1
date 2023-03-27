import { Outlet, NavLink, Link } from "react-router-dom";

import "./Layout.css";

const Layout = () => (
  <div className="Layout">
    <nav className="nav">
      <Link to="/" className="site-title">
        Sukana
      </Link>
      <ul>
        <NavLink to="/properties">Properties</NavLink>
        <NavLink to="/about-us">About-us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Layout;
