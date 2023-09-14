import React, { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Mountain");

  const handleSearch = () => {
    onSubmit({ searchTerm, category });
  };

  return (
    <div className="search_wrap">
      <div className="input_wrap">
        <div className="search_input">
          <label htmlFor="search-input">Search Photos:</label>
          <input
            type="text"
            id="search-input"
            placeholder="Enter keywords"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="search_input">
          <label htmlFor="category-select">Select Category:</label>
          <select
            id="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Mountain">Mountain</option>
            <option value="Beaches">Beaches</option>
            <option value="Birds">Birds</option>
            <option value="Food">Food</option>
          </select>
        </div>
      </div>
      <div>
        <button onClick={handleSearch} className="search_btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
