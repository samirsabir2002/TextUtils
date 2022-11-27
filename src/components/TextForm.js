import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  function countWords(str) {
    const arr = str.split(" ");

    return arr.filter((word) => word !== "").length;
  }
  const handlelowclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleResclick = () => {
    let newtext = text.split("  ").join("");
    setText(newtext);
  };

  const handelonchange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h4 className={`${props.mode === "light" ? "text-dark" : "text-white"}`}>
        {props.heading}
      </h4>
      <textarea
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#343a40",
          color: props.mode === "light" ? "#343a40" : "white "
        }}
        className="form-control"
        onChange={handelonchange}
        placeholder="type here to convert"
        value={text}
        id="floatingTextarea2"
        rows={5}
      ></textarea>
      <button
        onClick={handleupclick}
        className={`btn ${
          props.mode === "light" ? "btn-outline-dark" : "btn-outline-light"
        }  my-3 `}
      >
        Conver to UpperCase
      </button>
      <button
        onClick={handlelowclick}
        className={`btn ${
          props.mode === "light" ? "btn-outline-dark" : "btn-outline-light"
        }  m-3 `}
      >
        Convert to LowerCase
      </button>
      <button
        onClick={handleResclick}
        className={`btn ${
          props.mode === "light" ? "btn-outline-dark" : "btn-outline-light"
        }  my-3 `}
      >
        Clear the extra space
      </button>
      <div className="container my-4">
        <h4
          className={`${props.mode === "light" ? "text-dark" : "text-light"} `}
        >
          Text Summary
        </h4>
        <p className={`${props.mode === "light" ? "text-dark" : "text-white"}`}>
          {countWords(text)} Words and {text.length} characters
        </p>
        <h4
          className={`${props.mode === "light" ? "text-dark" : "text-white"}`}
        >
          Reading minutes{" "}
        </h4>
        <p className={`${props.mode === "light" ? "text-dark" : "text-white"}`}>
          {0.008 * countWords(text)} minutes
        </p>
        <h4
          className={`${props.mode === "light" ? "text-dark" : "text-white"}`}
        >
          Text Preview
        </h4>
        <p className={`${props.mode === "light" ? "text-dark" : "text-white"}`}>
          {text.length > 0 ? text : "Nothing to Preview"}
        </p>
      </div>
    </div>
  );
}
