import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={() => dispatch(logoutThunk())} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
