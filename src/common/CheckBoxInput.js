import React from "react";
import CheckBox from "./CheckBox";
const CheckBoxInput = ({ inputLabel }) => {
  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      <div>
        <CheckBox name={"Faizpur"} />
        <CheckBox name={"Pune"} />
        <CheckBox name={"Mumbai"} />
      </div>
    </div>
  );
};

export default CheckBoxInput;
