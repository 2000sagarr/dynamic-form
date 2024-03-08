import React, { useState } from "react";
import { validateEmail } from "../help";

const TextInput = ({
  name,
  inputLabel,
  placeholder,
  format,
  onAnswerQuestion,
  validation,
}) => {
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("false");
  //console.log(format);
  const onBlurHanlder = () => {
    onAnswerQuestion(name, inputData);
  };

  const onChangeText = (e) => {
    let value = e.target.value;
    if (validation) {
      if (validation["minLength"] && value.length < validation["minLength"]) {
        setError(true);
        setErrorMessage(`Minimum ${validation["minLength"]} is required.`);
      } else if (
        validation["maxLength"] &&
        value.length > validation["maxLength"]
      ) {
        setError(true);
        setErrorMessage(`Minimum ${validation["maxLength"]} is required.`);
      } else if (validation["max"] && value > validation["max"]) {
        setError(true);
        setErrorMessage(`Max ${validation["max"]} is valid.`);
      } else if (validation["min"] && value < validation["min"]) {
        setError(true);
        setErrorMessage(`Min ${validation["min"]} is valid.`);
      } else {
        setError(false);
      }
    } else if (format === "email") {
      if (!validateEmail(value)) {
        setError(true);
        setErrorMessage(`Please enter valid email.`);
      } else {
        setError(false);
      }
    }
    setInputData(e.target.value);
  };
  return (
    <div>
      <div className="form-input">
        <label>{inputLabel}</label>
        <input
          placeholder={placeholder ? placeholder : ""}
          type={format}
          value={inputData}
          onChange={onChangeText}
          onBlur={onBlurHanlder}
        />
      </div>
      <div style={{ display: "block" }}>
        {" "}
        {error && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default TextInput;
