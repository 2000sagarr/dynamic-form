import React from "react";

const TextInput = ({ inputLabel, placeholder, format }) => {
  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      <input
        name="firstName"
        placeholder={placeholder ? placeholder : ""}
        type={format}
      />
    </div>
  );
};

export default TextInput;
