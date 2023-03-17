import React from "react";
import "./style.css";

const ColorSlider = ({ baseColor, colorName, onValueChange }) => {
  const handleValueChange = (event) => {
    const value = event.target.value;
    onValueChange(value);
  };
  return (
    <>
      <label>{colorName}</label>
      <input
        type="range"
        className={`slider slider--${colorName}`}
        id={`${colorName}Slider`}
        min="0"
        max="255"
        defaultValue="0"
        style={{ backgroundColor: `${baseColor}` }}
        onChange={handleValueChange}
      />
    </>
  );
};

export default ColorSlider;
