import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <nav
      style={{
        background: darkMode
          ? "linear-gradient(90deg, #141E30, #6c9ed7ff)"
          : "linear-gradient(90deg, #c13a50ff, #87767dff)",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontSize: "1.6rem", fontWeight: "bold" }}>🤹‍♂ FunHub</div>

      <div style={{ display: "flex", gap: "1rem", fontWeight: "bold" }}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/saved" className="nav-link">Saved</Link>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          
          padding: "6px 12px",
          borderRadius: "6px",
          background: darkMode ? "#f39c12" : "#34495e",
          color: "white",
          cursor:"pointer"
        }}
>
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}  