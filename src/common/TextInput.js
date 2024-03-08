import React, { useState } from "react";

const TextInput = ({
  name,
  inputLabel,
  placeholder,
  format,
  onAnswerQuestion,


}) => {
  const [inputData, setInputData] = useState("");

  const onBlurHanlder = () => {
    onAnswerQuestion(name, inputData);
  };

  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      <input
        name="firstName"
        placeholder={placeholder ? placeholder : ""}
        type={format}
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        onBlur={onBlurHanlder}
      />
    </div>
  );
};

export default TextInput;
