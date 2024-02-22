import React from "react";
import useLocalStroage from "./UseLocalStorgage";
import "./theme.css"
const Light_dark = () => {
  const[theme, setTheme] = useLocalStroage("theme", "dark");
  function handleclick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container" >
        <p>Hello world</p>
        <button onClick={handleclick}>Change Theme</button>
      </div>
    </div>
  );
};

export default Light_dark;
