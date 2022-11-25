import React from "react";

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={(e) => keywordChange(e.target.value)}
          value={keyword}
          className="form-control"
          placeholder="Cari Edukasi"
        />
      </div>
    </div>
  );
}

export default SearchBar;
