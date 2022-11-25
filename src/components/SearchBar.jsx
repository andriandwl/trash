import React from "react";
import { Link } from "react-router-dom";

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={(e) => keywordChange(e.target.value)}
          value={keyword}
          className="form-control"
          placeholder="Cari .."
        />
        <div className="btn-group">
          <button className="btn btn-secondary btn-md" type="button">
            Kategori
          </button>
          <button
            type="button"
            className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/kategori/">
                Semua Kategori
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/kategori/1">
                Water
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/kategori/2">
                Fire
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/kategori/3">
                Grass
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/kategori/4">
                Bug
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
