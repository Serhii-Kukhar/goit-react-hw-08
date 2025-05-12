import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import { Avatar, Button, Typography, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar src="/broken-image.jpg" alt={user.name} />
        <Typography variant="subtitle1" fontWeight={500}>
          {user.name}
        </Typography>
      </Box>
      <Button
        onClick={handleLogout}
        variant="contained"
        color="error"
        startIcon={<LogoutIcon />}
      >
        Вийти
      </Button>
    </Box>
  );
};

export default UserMenu;
