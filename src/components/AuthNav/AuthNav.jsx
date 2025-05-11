import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const ActiveLink = ({ isActive }) => ({
  color: "white",
  border: isActive ? "1px solid white" : "none",
  transition: "all 0.3s",
});

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <NavLink to="/register">
        {({ isActive }) => (
          <Button sx={ActiveLink({ isActive })} color="inherit">
            Реєстрація
          </Button>
        )}
      </NavLink>
      <NavLink to="/login">
        {({ isActive }) => (
          <Button sx={ActiveLink({ isActive })} color="inherit">
            Увійти
          </Button>
        )}
      </NavLink>
    </Stack>
  );
};

export default AuthNav;
