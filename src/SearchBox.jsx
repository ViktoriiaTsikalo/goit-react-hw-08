import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p className={s.searchText}>Find contacts by name</p>
      <input
        className={s.searchInput}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
