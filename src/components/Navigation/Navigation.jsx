import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav>
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
      )}
      {!isLoggedIn && (
        <>
          <NavLink className={setActiveClass} to="/register">
            Register
          </NavLink>
          <NavLink className={setActiveClass} to="/login">
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
