import { useDispatch, useSelector } from "react-redux";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/selectors";
import {
  changeNameFilter,
  changeNumberFilter,
} from "../../redux/filters/slice";
import {
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import React from "react";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const numberFilter = useSelector(selectNumberFilter);
  const [searchType, setSearchType] = React.useState("name");

  const handleNameChange = (e) => {
    dispatch(changeNameFilter(e.target.value));
  };

  const handleNumberChange = (e) => {
    dispatch(changeNumberFilter(e.target.value));
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
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
        <FormControl sx={{ width: "150px", mr: 2 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Пошук за:
          </InputLabel>
          <NativeSelect
            value={searchType}
            onChange={handleSearchTypeChange}
            inputProps={{
              name: "searchType",
              id: "uncontrolled-native",
            }}
          >
            <option value="name">Імʼям</option>
            <option value="number">Номером</option>
          </NativeSelect>
        </FormControl>

        {searchType === "name" ? (
          <TextField
            id="input-name"
            label="Шукати контакт за імʼям"
            variant="standard"
            type="text"
            value={nameFilter}
            onChange={handleNameChange}
            sx={{
              width: "300px",
            }}
          />
        ) : (
          <TextField
            id="input-number"
            label="Шукати контакт за номером"
            variant="standard"
            type="text"
            value={numberFilter}
            onChange={handleNumberChange}
            sx={{
              width: "300px",
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default SearchBox;
