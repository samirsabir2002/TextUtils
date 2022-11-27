import React from "react";
export default function Alert(props) {
  const style = {
    fontSize: 18
  };

  const cap = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div className="container mt-3  ">
        <div
          className={`alert alert-${props.alert.type}  d-flex justify-content-center rounded-pill  role="alert p-2`}
        >
          <p className="my-auto" style={style}>
            <strong>{cap(props.alert.type)} </strong> : {props.alert.message}
          </p>
        </div>
      </div>
    )
  );
}
