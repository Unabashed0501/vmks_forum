import React from "react";
import "./style.css";

interface SearchBarProps {
  value: string;
  handleSearchKey: any;
  clearSearch: any;
  formSubmit: any;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  handleSearchKey,
  clearSearch,
  formSubmit,
}) => {
  return (
    <div>
      <h1 className="searchBar-wrap">
        <form onSubmit={formSubmit}>
          <input
            type="text"
            onChange={handleSearchKey}
            placeholder="Search by Category"
            value={value}
          />
          {value && <span onClick={clearSearch}>x</span>}
          <button>Go</button>
        </form>
      </h1>
    </div>
  );
};

export default SearchBar;
