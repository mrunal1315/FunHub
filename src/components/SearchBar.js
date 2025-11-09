 import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export default function SearchBar() {
  const { searchTerm, setSearchTerm, searchJokes } = useContext(AppContext);

  const handleSearch = () => {
    console.log("clicked")
    if (searchTerm.trim() !== "") {
      searchJokes(searchTerm); // <-- Pass the keyword here
      setSearchTerm("");       //  clears input after search
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", margin: "1rem 0" }}>
      <input
        type="text" placeholder="Search jokes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", flex: 1, borderRadius: "6px" }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: "8px 12px", borderRadius: "6px", background: "#ff4081", color: "white",cursor:"pointer" }}
      >
        Search
      </button>
    </div>
  );
}
