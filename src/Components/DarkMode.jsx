import React, { useState, useEffect } from "react";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

const DarkMode = () => {
  const [modo, setModo] = useState(storedTheme || (prefersDark ? 'dark' : 'light'));

  useEffect(() => {
    if (defaultDark) {
      setDark();
    }
  }, []);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
      setModo('dark');
    } else {
      setLight();
      setModo('light');
    }
  };

  const handleLightMode = () => {
    setLight();
    setModo('light');
  };

  const handleDarkMode = () => {
    setDark();
    setModo('dark');
  };

  return (
    <>
    <div className="toggle-theme-wrapper hidden sm:ml-6 sm:block">
      <span style={{"fontSize":"30px"}}>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleTheme} defaultChecked={defaultDark}/>
        <div className="slider round"></div>
      </label>
      <span style={{"fontSize":"30px"}}>🌒</span>
    </div>
    <div className="toggle-theme-wrapper sm:hidden">
      {modo === 'dark' ? (
        <button className="btn" onClick={handleLightMode}><span style={{"fontSize":"30px"}}>☀️</span></button>
      ) : (
        <button className="btn" onClick={handleDarkMode}><span style={{"fontSize":"30px"}}>🌒</span></button>
      )}
    </div>
    </>
  );
};

export default DarkMode;
