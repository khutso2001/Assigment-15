import React, { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowSize from "./hooks/useWindowSize";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    if (isMobile) {
      setTheme("light");
    }
  }, [isMobile, setTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <div className="app-header">
        <h1>Click to change the color theme</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <p>The mobile version only has a “light” theme</p>
    </div>
  );
};

export default App;
