import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export default function SavedPage() {
  const { savedJokes, removeJoke, darkMode } = useContext(AppContext);
console.log("SavedPage component loaded!");
console.log(savedJokes)
  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h2 style={{ color: darkMode ? "white" : "black" }}>Saved Jokes</h2>
      {savedJokes.length === 0 ? (
        <p style={{ color: darkMode ? "white" : "black" }}>No saved jokes yet!</p>
      ) : (
        savedJokes.map((j, i) => (
          <div
            key={i}
            style={{
              background: darkMode ? "#2c2c2c" : "#fff3f3",
              margin: "0.5rem auto",
              padding: "0.8rem",
              borderRadius: "10px",
              maxWidth: "600px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              color: darkMode ? "white" : "black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor:"pointer",
            }}
          >
            {j}                     
              {/* <h1>{j},{i}</h1> */}

            <button  
              onClick={() => removeJoke(i)}
              style={{ padding: "4px 8px", borderRadius: "6px", background: "#e74c3c", color: "white" ,cursor:"pointer"}}
            >
              ❌ Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
