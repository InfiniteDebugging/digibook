import React from "react";

const SearchBox = ({ placeholder, onSearchChange }) => {
  return (
    <div className="px-2 m-2">
      <input
        className="p-4 rounded-lg bg-cyan-400 border-[.25rem] border-cyan-600 placeholder:text-slate-500 placeholder:text-center"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
