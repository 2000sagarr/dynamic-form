import React, { useState } from "react";

const TextAreaInput = ({ name, inputLabel, placeholder, onAnswerQuestion }) => {
  const [inputData, setInputData] = useState("");

  const onBlurHanlder = () => {
    onAnswerQuestion(name, inputData);
  };

  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      <textarea
        name=""
        placeholder={placeholder ? placeholder : ""}
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        onBlur={onBlurHanlder}
      />
    </div>
  );
};

export default TextAreaInput;
