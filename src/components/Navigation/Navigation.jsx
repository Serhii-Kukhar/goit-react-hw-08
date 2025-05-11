import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Button, Stack } from "@mui/material";

const ActiveLink = ({ isActive }) => ({
  color: "white",
  border: isActive ? "1px solid white" : "none",
  transition: "all 0.3s",
});

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Stack direction="row" spacing={2}>
      <NavLink to="/">
        {({ isActive }) => (
          <Button sx={ActiveLink({ isActive })}>Головна</Button>
        )}
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          {({ isActive }) => (
            <Button sx={ActiveLink({ isActive })} color="inherit">
              Контакти
            </Button>
          )}
        </NavLink>
      )}
    </Stack>
  );
};

export default Navigation;
