import React from "react";

const SearchBox = ({ placeholder, onSearchChange }) => {
  return (
    <div className="px-2 m-2">
      <input
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
      ;
    </div>
  );
};

export default SearchBox;
