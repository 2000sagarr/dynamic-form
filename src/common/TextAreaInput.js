import React from "react";

const TextAreaInput = ({ inputLabel, placeholder, row }) => {
  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      <textarea
        name="firstName"
        placeholder={placeholder ? placeholder : ""}
        row={row ? row : 2}
      />
    </div>
  );
};

export default TextAreaInput;
