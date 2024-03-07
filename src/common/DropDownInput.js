import React from "react";

const DropDownInput = ({ inputLabel }) => {
  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      {/* <input name="firstName" placeholder={placeholder ? placeholder : ""} /> */}
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default DropDownInput;
