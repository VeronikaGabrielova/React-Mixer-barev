import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ColorSlider from "./components/ColorSlider";

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  return (
    <>
      <div className="color-panel">
        <h1>Mixér barev</h1>
        <div className="sliders">
          <ColorSlider
            baseColor={redValue}
            colorName={"red"}
            onValueChange={(value) => setRedValue(value)}
          />
          <ColorSlider
            baseColor={greenValue}
            colorName={"green"}
            onValueChange={(value) => setGreenValue(value)}
          />
          <ColorSlider
            baseColor={blueValue}
            colorName={"blue"}
            onValueChange={(value) => setBlueValue(value)}
          />
        </div>
        <div
          style={{ backgroundColor: color }}
          className="color-box"
          id="color-box"
        ></div>
      </div>
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
