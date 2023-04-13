import React from "react";
import "./style.css";

const ColorSlider = ({ baseColor, colorName, onValueChange }) => {
  return (
    <>
      <label>{colorName}</label>
      <input
        type="range"
        className={`slider slider--${colorName}`}
        min="0"
        max="255"
        defaultValue="0"
        style={{ backgroundColor: `${baseColor}` }}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
    </>
  );
};

export default ColorSlider;
