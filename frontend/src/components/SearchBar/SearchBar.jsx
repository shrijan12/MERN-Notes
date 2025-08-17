import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        className="w-full text-xs bg-transparent py-[11px] outline-none"
      />

      {value && (
        <IoMdClose
          className="text-slate-700 mr-2 cursor-pointer hover:text-black"
          size={22}
          onClick={onClearSearch}
        />
      )}
      <FaSearch
        size={22}
        className="text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
