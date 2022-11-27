import React from "react";

export default function About(props) {
  const style = {
    backgroundColor: props.mode === "light" ? "white" : "#212529",
    color: props.mode === "light" ? "#212529" : "white"
  };
  return (
    <>
      <div className="container s">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={style}>
            {" "}
            <h2 className="accordion-header" id="headingOne" style={style}>
              <button
                style={style}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About TextUtils
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body text-${
                  props.mode === "light" ? " dark" : "light"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vehicula mi eu lectus feugiat elementum. Proin tincidunt iaculis
                purus et porttitor. In elementum feugiat sem, sed eleifend
                tellus lobortis a. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi vitae ante felis. Sed quis tellus vel
                neque elementum hendrerit at vel augue. In eu tristique dui.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header" id="headingTwo" style={style}>
              <button
                style={style}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Easy to Use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body text-${
                  props.mode === "light" ? " dark" : "light"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vehicula mi eu lectus feugiat elementum. Proin tincidunt iaculis
                purus et porttitor. In elementum feugiat sem, sed eleifend
                tellus lobortis a. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi vitae ante felis. Sed quis tellus vel
                neque elementum hendrerit at vel augue. In eu tristique dui.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header" id="headingThree" style={style}>
              <button
                style={style}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Compatibility
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body text-${
                  props.mode === "light" ? " dark" : "light"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vehicula mi eu lectus feugiat elementum. Proin tincidunt iaculis
                purus et porttitor. In elementum feugiat sem, sed eleifend
                tellus lobortis a. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi vitae ante felis. Sed quis tellus vel
                neque elementum hendrerit at vel augue. In eu tristique dui.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
