import React from "react";

function Button({
  width = "6rem",
  height = "2rem",
  backgroundColor = "rgb(39, 197, 39)",
  color = "#fff",
  text = "click",
  onClick,
  borderRadius = "7px",
  fontSize,
  fontWeight,
}) {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{
        fontWeight: fontWeight,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: color,
        border: "none",
        outline: "none",
        borderRadius: borderRadius,
        fontSize: fontSize,
        boxShadow: "0 2px 8px 1px rgb(0,0,0,0.3)",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
