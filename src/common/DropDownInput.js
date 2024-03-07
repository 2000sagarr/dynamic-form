import React from "react";

const DropDownInput = ({ inputLabel, options }) => {
  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      {/* <input name="firstName" placeholder={placeholder ? placeholder : ""} /> */}
      <select name="cars" id="cars">
        {options.map((option) => {
          return <option key={option} value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDownInput;
