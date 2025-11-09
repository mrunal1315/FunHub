 import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export default function CategoryFilter() {
  const { category, setCategory, fetchJoke } = useContext(AppContext);

  const handleChange = (e) => {
    setCategory(e.target.value);
    fetchJoke();
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <select value={category} onChange={handleChange} style={{ padding: "6px", borderRadius: "6px" }}>
        <option value="">All</option>
        <option value="Programming">Programming</option>
        <option value="Misc">Misc</option>
        <option value="Pun">Pun</option>
        <option value="Spooky">Spooky</option>
        <option value="Christmas">Christmas</option>
      </select>
    </div>
  );
}
