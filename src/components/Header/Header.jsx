import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import s from "./Header.module.css";
import logo from "../../assets/RentalCarLogo.svg"; // SVG-лого з текстом

const buildLinkClass = ({ isActive }) => {
  return clsx(s.navLink, isActive && s.active);
};

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.logoContainer}>
          <NavLink to="/" className={s.logoLink}>
            <img src={logo} alt="RentalCar Logo" className={s.logoImage} />
          </NavLink>
        </div>

        <nav className={s.navigation}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
