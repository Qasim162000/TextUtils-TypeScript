import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [cAlert, setAlert] = useState<{ msg: string; type: string } | null>(
    null
  );
  const [chosenColor, setChosenColor] = useState("black");

  const colorPalette = (color: string) => {
    setChosenColor(color);
  };
  const showAlert = (message: string, type: string) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleMode, chosenColor]);
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
      <Alert customAlert={cAlert} />
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
};

export default App;
