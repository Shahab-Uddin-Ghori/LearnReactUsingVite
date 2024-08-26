import React from "react";

function Input({
  width = "6rem",
  height = "3rem",
  border = "none",
  outline = "none",
  backgroundColor = "rgb(0,0,0,.9)",
  color = "rgb(255,255,255,0.9)",
  padding = "1rem .5rem",
  fontSize = "1rem",
  letterSpacing = "1px",
  borderRadius = "7px",
  value,
  readOnly,
}) {
  return (
    <input
      readOnly={readOnly}
      value={value}
      type="text"
      style={{
        boxShadow: "0 1px 8px 1px rgb(0,0,0,0.8)",
        width: width,
        height: height,
        border: border,
        outline: outline,
        backgroundColor: backgroundColor,
        color: color,
        padding: padding,
        fontSize: fontSize,
        letterSpacing: letterSpacing,
        borderRadius: borderRadius,
      }}
    />
  );
}

export default Input;
