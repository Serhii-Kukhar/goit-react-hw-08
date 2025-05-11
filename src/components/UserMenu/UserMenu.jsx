import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import { Avatar, Button, Typography, Box } from "@mui/material";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar src="/broken-image.jpg" />
        <Typography variant="subtitle1" fontWeight={500}>
          {user.name}
        </Typography>
      </Box>
      <Button
        onClick={() => dispatch(logoutThunk())}
        variant="outlined"
        color="error"
        size="medium"
      >
        Вийти
      </Button>
    </Box>
  );
};

export default UserMenu;
