import React, { useState } from "react";
import "../App.css";
import H1 from "../components/H1";
import Button from "../components/Button";
function CountingByclick() {
  const [count, updateCount] = useState(0);

  const updateCountFunc = () => {
    updateCount(count + 1);
  };

  return (
    <div className="countingByClick">
      <H1 text="Counting by useState"></H1>
      <H1 text={count}></H1>
      <Button text="Count+" onClick={updateCountFunc} />
    </div>
  );
}

export default CountingByclick;
