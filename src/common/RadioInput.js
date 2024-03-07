import React from "react";
import { textToId } from "../help";
const RadioInput = ({ inputLabel }) => {
  let name = textToId(inputLabel);
  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      <div>
        <div>
          <input id="checkbox" type="radio" />
          <span className="input-name">{name}</span>
        </div>

        <div>
          <input id="checkbox" type="radio" />
          <span className="input-name">{name}</span>
        </div>

        <div>
          <input id="checkbox" type="radio" />
          <span className="input-name">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default RadioInput;
