import React, { useState } from "react";
import $ from 'jquery';

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

if (defaultDark) {
  setDark();
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

function darkMode() {
  $("#btnDark").click();
  setDark();
}

function lightMode() {
  $("#btnLight").click();
  setLight();
}

const DarkMode = () => {
  const [modo, setModo] = useState(storedTheme);
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
      <button id="btnLight" onClick={() => setModo('light')} style={{"display":"none"}}></button>
      <button id="btnDark" onClick={() => setModo('dark')} style={{"display":"none"}}></button>
      {modo === 'dark' ? (
        <button id="btnLight2" className="btn" onClick={lightMode}><span style={{"fontSize":"30px"}}>☀️</span></button>
      ) : (
        <button id="btnDark2" className="btn" onClick={darkMode}><span style={{"fontSize":"30px"}}>🌒</span></button>
      )}
    </div>
    </>
  );
};

export default DarkMode;