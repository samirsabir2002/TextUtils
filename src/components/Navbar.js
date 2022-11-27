import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      {/* navbar-${props.mode === "dark" ? "light" : "dark"} bg-$ */}
      {/* {props.mode === "light" ? "dark" : "light"} */}
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === "light" ? "light" : "dark"
        } bg-${props.mode === "dark" ? "dark" : "light"} `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="./TextForm.js">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./TextForm.js"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./About.js">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="ms-auto d-flex ">
              <div className=" form-check form-switch">
                <input
                  onClick={() => {
                    props.togglemode();
                  }}
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};
Navbar.defaultProps = {
  title: "set title here ",
  about: "set about here"
};
