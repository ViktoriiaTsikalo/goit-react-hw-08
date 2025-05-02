import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../redux/filtersSlice";
import s from "./SearchBox.module.css";
import { selectError, selectLoading } from "../redux/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {error && <h2>Server is dead...</h2>}
      {isLoading && <h2>Loading...</h2>}
      <p className={s.searchText}>Find contacts by name</p>
      <input
        className={s.searchInput}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
