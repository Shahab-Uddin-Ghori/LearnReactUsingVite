import React from "react";

function H1({
  text = "Heading Here",
  color,
  fontSize,
  fontWeight,
  textShadow,
}) {
  return (
    <h1
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        textShadow: textShadow,
      }}
    >
      {text}
    </h1>
  );
}

export default H1;
