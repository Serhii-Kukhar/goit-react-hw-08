import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { Box, TextField, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Шукати контакт за імʼям:"
          variant="standard"
          type="text"
          value={filter}
          onChange={handleChange}
          sx={{
            width: "300px",
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchBox;
