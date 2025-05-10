import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchBox}>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.search}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
