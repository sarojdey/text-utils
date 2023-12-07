import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  background-color: #f1eaff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled(Typography)`
  font-family: "Roboto Condensed", sans-serif;
  color: rgb(89, 54, 99);
`;

const StyledArea = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 170px;
`;
const StyledButtonBox = styled(Box)`
  display: flex;
  margin-top: 30px;
  justify-content: space-evenly;
`;

const StyledButton = styled(Button)`
  && {
    font-family: "Roboto Condensed", sans-serif;
    background-color: #7743db;
    color: #fff;

    &:hover {
      background-color: red;
    }
  }
`;

function App() {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleRemoveExtraSpaces = () => {
    const prevText = text;
    const newText = removeExtraSpaces(prevText);
    setText(newText);
    console.log(newText);
  };

  const handleUppercase = () => {
    const prevText = text;
    const newText = makeUppercase(prevText);
    setText(newText);
    console.log(newText);
  };

  const handleLowercase = () => {
    const prevText = text;
    const newText = makeLowercase(prevText);
    setText(newText);
    console.log(newText);
  };

  const handleHexadecimal = () => {
    const prevText = text;
    const newText = stringToHexadecimal(prevText);
    setText(newText);
    console.log(newText);
  };

  const removeExtraSpaces = (inputString) => {
    return inputString.replace(/\s+/g, " ").trim();
  };
  const makeUppercase = (inputString) => {
    return inputString.toUpperCase();
  };
  const makeLowercase = (inputString) => {
    return inputString.toLowerCase();
  };

  const stringToHexadecimal = (inputString) => {
    let hexString = "";

    for (let i = 0; i < inputString.length; i++) {
      const charCode = inputString.charCodeAt(i);
      const hexValue = charCode.toString(16).toUpperCase();
      hexString += hexValue.length === 1 ? "0" + hexValue : hexValue;
    }

    return hexString;
  };

  return (
    <>
      <StyledBox>
        <img
          src="src\assets\logo.png"
          style={{
            marginTop: "20px",
            height: "70px",
          }}
        ></img>

        <StyledArea>
          <input
            type="text"
            style={{
              border: "none",
              borderRadius: "5px",
              height: "50px",
              width: "600px",
              padding: "0 8px",
              fontSize: "25px",
              fontFamily: '"Roboto Condensed", sans-serif',
            }}
            value={text}
            onChange={handleTextChange}
          />
          <StyledButtonBox>
            <StyledButton variant="contained" onClick={handleRemoveExtraSpaces}>
              Remove Extra Space
            </StyledButton>
            <StyledButton variant="contained" onClick={handleUppercase}>
              Uppercase
            </StyledButton>
            <StyledButton variant="contained" onClick={handleLowercase}>
              Lowercase
            </StyledButton>
            <StyledButton variant="contained" onClick={handleHexadecimal}>
              Hexadecimal
            </StyledButton>
          </StyledButtonBox>
        </StyledArea>
        <StyledText
          style={{
            marginBottom: "10px",
          }}
        >
          Made with ❤️ by{" "}
          <a href="" style={{ textDecoration: "none" }}>
            SRJ
          </a>
        </StyledText>
      </StyledBox>
    </>
  );
}

export default App;
