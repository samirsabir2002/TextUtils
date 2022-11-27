import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import React, { useState } from "react";
import Alert from "./components/Alert.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  let togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      showalert(" The dark mode is enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      showalert(" The dark theme is disnable", "success");
    }
  };

  return (
    <Router>
      <>
        <Navbar
          title="Texturtils"
          mode={mode}
          about="About Textutils "
          togglemode={togglemode}
          alert={alert}
        />
        <div className="container my-3">
          <div style={{ height: 50 }}>
            <Alert alert={alert} />
          </div>

          {/* <About /> */}
          <Routes>
            <Route
              path=""
              element={
                <TextForm
                  mode={mode}
                  togglemode={togglemode}
                  heading="Enter the text analyze"
                />
              }
            />

            <Route path="About.js" element={<About mode={mode} />} />
            <Route
              path="TextForm.js"
              element={
                <TextForm
                  mode={mode}
                  togglemode={togglemode}
                  heading="Enter the text analyze"
                />
              }
            />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
