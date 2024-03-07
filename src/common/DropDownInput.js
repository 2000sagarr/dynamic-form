import React, { useState } from "react";

const DropDownInput = ({ name, inputLabel, options, onAnswerQuestion }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const onOptionChangeHandler = (event) => {
    setSelectedOption(event.target.value);
    onAnswerQuestion(name, event.target.value);
  };
  return (
    <div className="form-input">
      <label>{inputLabel}</label>
      <select value={selectedOption} onChange={onOptionChangeHandler}>
        <option value="" disabled hidden>
          Select option...
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDownInput;
