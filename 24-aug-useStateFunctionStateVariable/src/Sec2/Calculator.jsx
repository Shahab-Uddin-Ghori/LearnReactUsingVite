import React, { useState } from "react";
import H1 from "../components/H1";
import Button from "../components/Button";
import Input from "../components/Input";
import mysound from "./soundClick.mp3";
const sound = new Audio(mysound);

function Calculator() {
  const [input, setInput] = useState("");

  const soundClick = () => {
    sound.currentTime = 0;
    sound.play();
  };

  const evalute = (value) => {
    soundClick();

    try {
      if (value === "=") {
        setInput(String(eval(input)));
      } else if (value === "c") {
        setInput("");
      } else if (value === "rev") {
        setInput(input.slice(0, -1));
      } else {
        setInput(input + value);
      }
    } catch (error) {
      setInput(error);
    }
  };

  return (
    <div
      className="Calculator"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#FFf",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="CalBody"
        style={{
          backgroundColor: "#fff",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          gap: "1rem",
          borderRadius: "18px",
          boxShadow: "0 1px 8px 0px rgb(0,0,0,0.8)",
        }}
      >
        <H1
          text="Calculator"
          fontSize="1rem"
          color="#fff"
          textShadow="2px 2px 4px rgba(25, 0, 0, .7), 0 2px 8px rgba(0, 0, 0, .3)"
        />
        <Input value={input} readOnly width="100%" fontSize=".9rem" />
        <div
          className="nums"
          style={{
            display: "flex",
            gap: "1rem",
            // backgroundColor: "green",
          }}
        >
          {/* C1 */}
          <div
            className="numsR1"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
              width: "100%",
            }}
          >
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="C"
              backgroundColor="red"
              fontSize="1.2rem"
              onClick={() => evalute("c")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="7"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("7")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="4"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("4")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="1"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("1")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="0"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("0")}
            />
          </div>
          {/* C2 */}
          <div
            className="numsR1"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
              width: "100%",
            }}
          >
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="rev"
              backgroundColor="red"
              fontSize="1rem"
              color="#fff"
              onClick={() => evalute("rev")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="8"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("8")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="5"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("5")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="2"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("2")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="."
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute(".")}
            />
          </div>
          {/* C3 */}
          <div
            className="numsR1"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
              width: "100%",
            }}
          >
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="*"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("*")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="9"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("9")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="6"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("6")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="3"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("3")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="-"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("-")}
            />
          </div>
          {/* C4 */}
          <div
            className="numsR1"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
              width: "100%",
            }}
          >
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="/"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("/")}
            />
            <Button
              width="3rem"
              height="2rem"
              borderRadius="4px"
              text="+"
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("+")}
            />
            <Button
              width="3rem"
              height="7rem"
              borderRadius="4px"
              text="="
              backgroundColor="#fff"
              color="black"
              fontSize="1.2rem"
              onClick={() => evalute("=")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
