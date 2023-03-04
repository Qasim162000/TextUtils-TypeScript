import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!", "success");
  };
  const handleCloneClick = () => {
    let newText = text + text;
    setText(newText);
    props.showAlert("Text in box cloned!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // const textFormLogic = (text) => {
  //   if (text.length === 0) {
  //   } else {
  //   }
  // };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? `${props.bgColor}` : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCloneClick}>
          Clone Existing Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        {/* Bugged: */}
        {/* <h2>Your Text Summary</h2>
        <p>
        <p>{text.split(/[ ]+/).join(" ") +text.split(" ").length} Words and {text.length} characters</p>
        </p> */}

        {/* Fixing Bug */}

        <h2>Your Text Summary</h2>
        <p>
          {text.length > 0
            ? `${text.replace(/\s+/g, " ").trim().split(" ").length} words & ${
                text.length
              } characters`
            : // `${text.split(" ").length} Words & ${text.length} characters`
              `0 Words & ${text.length} characters`}
          {/* <p>
            Works, but gives error on length =0
            {text.match(/(\w+)/g).length} Words and {text.length} characters
          </p> */}
        </p>
        {/* uptil here */}

        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in the above box to preview here"}
        </p>
      </div>
    </>
  );
}
