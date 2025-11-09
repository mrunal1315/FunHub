import React, { createContext, useState, useCallback, useEffect } from "react";

export const AppContext = createContext(); //creating context

export const AppProvider = ({ children }) => { //react prop that wraps everything
  const [joke, setJoke] = useState("");
  const [savedJokes, setSavedJokes] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchJoke = useCallback(async () => {   //fetching the joke
    setLoading(true);  
    try {
      let url = "https://v2.jokeapi.dev/joke/Any?type=single";
      if (category) url = `https://v2.jokeapi.dev/joke/${category}?type=single`;

      const res = await fetch(url);
      const data = await res.json();
      setJoke(data.joke || "No joke found, try again!");
    } catch {
      setJoke("Failed to fetch joke.");
    } finally {
      setLoading(false);
    }
  }, [category]);

  const searchJokes = async () => {   //searching jokes
    if (!searchTerm.trim()) return;  
    setLoading(true);
    try {
      const res = await fetch(
        `https://v2.jokeapi.dev/joke/Any?contains=${searchTerm}&type=single`
      );
      const data = await res.json();
      setJoke(data.joke || "Joke not found");
    } catch {
      setJoke("Error fetching joke.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  const saveJoke = () => {
    if (joke && !savedJokes.includes(joke)) {
      setSavedJokes([...savedJokes, joke]);
    }
  };

  const removeJoke = (index) => {
    setSavedJokes(savedJokes.filter((_, i) => i !== index));
  };

  return (
    <AppContext.Provider
      value={{
        joke,
        savedJokes,
        loading,
        fetchJoke,
        saveJoke,
        removeJoke,
        searchTerm,
        setSearchTerm,
        searchJokes,
        category,
        setCategory,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
