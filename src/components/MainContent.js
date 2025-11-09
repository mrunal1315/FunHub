import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

export default function MainContent() {
  const { joke, loading, fetchJoke, saveJoke, darkMode } = useContext(AppContext);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <SearchBar />
      <CategoryFilter />
      <div
        style={{
          background: darkMode ? "#232526" : "#c9898bff",
          padding: "2rem",
          borderRadius: "12px",
          margin: "1rem auto",
          maxWidth: "600px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          color: darkMode ? "white" : "black",   //card
          //cursor:"pointer"
        }}
      >
        {loading ? <p>Loading...</p> : <p>{joke}</p>}
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button className="btn" onClick={fetchJoke} style={{ padding: "8px 12px", borderRadius: "6px", background: "#3498db", color: "white",cursor:"pointer" }}>New Joke</button>
          <button className="btn" onClick={saveJoke} style={{ padding: "8px 12px", borderRadius: "6px", background: "#e67e22", color: "white",cursor:"pointer" }}>Save Joke</button>
        </div>
      </div>
    </div>
  );
}
