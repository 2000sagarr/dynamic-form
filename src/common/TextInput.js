import React from "react";

const TextInput = ({ inputLabel, placeholder, type }) => {
  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      <input name="firstName" placeholder={placeholder ? placeholder : ""} />
    </div>
  );
};

export default TextInput;
