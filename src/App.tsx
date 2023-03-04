import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [cAlert, setAlert] = useState(false);
  const [chosenColor, setChosenColor] = useState("black");

  const colorPalette = (color) => {
    setChosenColor(color);
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = chosenColor;
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  useEffect(() => {
    mode === "dark"
      ? (document.body.style.backgroundColor = chosenColor)
      : (document.body.style.backgroundColor = "white");
  }, [toggleMode, chosenColor, mode]);
  return (
    // <Router>
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        colorPaletteHandler={colorPalette}
      />
      <Alert cAlert={cAlert} />
      {/* <Routes> */}
      <div className="container my-3">
        {/* path="/"
          element={ */}
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
          bgColor={chosenColor}
        />
      </div>
      {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
