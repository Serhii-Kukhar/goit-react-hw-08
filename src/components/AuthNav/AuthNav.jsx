import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && s.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={setActiveClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={setActiveClass}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
