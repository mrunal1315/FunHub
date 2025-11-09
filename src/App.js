import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./App.css";

// Lazy load SavedPage (loads only when needed)
const SavedPage = lazy(() => import("./pages/SavedPage"));

function App() {
  return (
    <AppProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* Home page */}
            <Route path="/" element={<MainContent />} />

            {/* Saved jokes page - wrapped in Suspense for lazy loading */}
            <Route path="/saved" element={
                <Suspense fallback={<p style={{ textAlign: "center" }}>Loading Saved Page...</p>}>
                  <SavedPage />
                </Suspense>
             
              }
            />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
