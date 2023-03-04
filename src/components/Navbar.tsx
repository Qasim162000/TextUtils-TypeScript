import React from "react";
import propTypes from "prop-types";

type NavbarProps = {
  colorPaletteHandler: (color: string) => void;
  mode: string;
  title: string;
  toggleMode: () => void;
  aboutText: string;
};

export default function Navbar(props: NavbarProps) {
  const colorGrey = () => {
    props.colorPaletteHandler("grey");
  };
  const colorGreen = () => {
    props.colorPaletteHandler("green");
  };
  const colorRed = () => {
    props.colorPaletteHandler("red");
  };
  const colorYellow = () => {
    props.colorPaletteHandler("yellow");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* Search field and button */}
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            <button
              type="button"
              className="btn btn-secondary mx-2 mb-1"
              onClick={colorGrey}
            />

            <button
              type="button"
              className="btn btn-success mx-2 mb-1"
              onClick={colorGreen}
            />

            <button
              type="button"
              className="btn btn-danger mx-2 mb-1"
              onClick={colorRed}
            />

            <button
              type="button"
              className="btn btn-warning mx-2 mb-1"
              onClick={colorYellow}
            />
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string.isRequired,
};
Navbar.defaultProps = { title: "Set Title here", aboutText: "About Text here" };
