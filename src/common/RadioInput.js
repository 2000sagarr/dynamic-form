import React from "react";
import { textToId } from "../help";
const RadioInput = ({ inputLabel, options }) => {
  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      <div>
        {options.map((option) => {
          return (
            <div key={option}>
              <input className="checkbox" type="radio" />
              <span className="input-name">{option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioInput;
