import React from "react";

const TextAreaInput = ({ inputLabel, placeholder }) => {
  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      <textarea name="" placeholder={placeholder ? placeholder : ""} />
    </div>
  );
};

export default TextAreaInput;
