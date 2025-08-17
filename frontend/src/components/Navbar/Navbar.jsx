import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearch("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-2xl font-medium text-black py-2">Notes</h2>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
